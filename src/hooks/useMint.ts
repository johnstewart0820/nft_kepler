import {useMintContract} from "./useContract";
import {useCallback, useEffect, useState} from "react";
import {useWeb3React} from "@web3-react/core";
import {fromWei, toWei} from "web3-utils";
import {priceToken} from "../config";
import {useAlert} from "./useAlert";
import {classAlert} from "../contexts/AlertProvider";
import {BigNumber} from "ethers";

function useMint() {
    const contract = useMintContract() || null
    const {showAlert} = useAlert()
    const {account, library} = useWeb3React()

    const [pending, setPending] = useState<boolean>(false);
    const [balance, setBalance] = useState<string>('0');

    const getBalance = useCallback(() => {
        if (account && library) {
            library.getBalance(account)
                .then((res: any) => {
                    setBalance(fromWei(res.toString()));
                })
                .catch((e: any) => {
                    console.log(e.message || e);
                })
        }
    }, [account, library])

    useEffect(() => {
        getBalance()
    }, [getBalance])

    const mint = useCallback ((amount: string) => {
        setPending(true)
        if (contract) {
            const value = priceToken * parseInt(amount)
            contract.mint(amount, {value: toWei(value.toString()), from: account})
                .then(() => {
                    showAlert({text: `Mint ${amount} - Success`, cls: classAlert.success})
                })
                .catch((e: any) => {
                    showAlert({text: e.error?.message || e.message || `Mint ${amount} - Failed`, cls: classAlert.error})
                    console.log(e.message || e);
                })
                .finally(() => {
                    setPending(false)
                })
        } else {
            setPending(false)
        }

    }, [account, contract, showAlert])

    const onMint = useCallback( async (amount: string) => {
        if (contract && account) {
            setPending(true)
            const value = priceToken * parseInt(amount)
            try {
                const gasPrice: BigNumber = await library.getGasPrice()
                const estimateGas: BigNumber = await contract.estimateGas.mint(amount, { value: toWei(value.toString()), from: account })
                if (estimateGas) {
                    const estimateMethod = gasPrice.mul(estimateGas).add(BigNumber.from(toWei(value.toString())))
                    if (estimateMethod.gt(BigNumber.from(toWei(balance)))) {
                        showAlert({text: `Not enough ether balance`, cls: classAlert.error})
                        setPending(false)
                    } else {
                        mint(amount)
                    }
                } else {
                    setPending(false)
                }
            } catch (e) {
                showAlert({text: e.error?.message || 'Mint failed', cls: classAlert.error})
                setPending(false)
            }
        }
    }, [account, balance, contract, mint, showAlert])

    return {
        contract,
        onMint,
        pending,
        balance
    }

}

export default useMint;
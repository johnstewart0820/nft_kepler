import React, {useCallback, useState} from 'react';
import {introducings, priceToken, storageConnectorKey} from "../config";
import useAuth from "../hooks/useAuth";
import {ConnectorNames} from "../util/web3React";
import {useWeb3React} from "@web3-react/core";
import useMint from "../hooks/useMint";
import {escapeRegExp} from "../util";

const inputRegex = RegExp(`^\\d*$`) // match escaped "." characters via in a non-capturing group
function Introducing() {

    const {login} = useAuth()
    const {account} = useWeb3React()
    const [amount, setAmount] = useState('');
    const {contract, pending, onMint, balance} = useMint()

    const enforcer = (nextUserInput: string) => {
        if (nextUserInput === '' || inputRegex.test(escapeRegExp(nextUserInput))) {
            if (parseFloat(nextUserInput) * priceToken >= parseFloat(balance)) nextUserInput = Math.floor(parseFloat(balance) / priceToken).toString()
            setAmount(nextUserInput)
        }
    }

    const onLoginHandle = useCallback((connectorKey: ConnectorNames | string) => {
        window.localStorage.setItem(storageConnectorKey, connectorKey)
        login(connectorKey)
    }, [login])

    const onMintHandle = useCallback(() => {
        if (account) {
            onMint(amount)
        }
    }, [account, amount, onMint])

    return (
        <section id="introducing" className="introducing">
            <div className="container">
                <h2>Introducing the Kepler Multivisa!</h2>
                <p className="description">This document in form of NFT is a pass to early private mint. Total number of
                    Multivisas - 400. Multivisa grants an early private mint of 3 Kedu for each pass. The cost of 1
                    Multivisa is 0.08 ETH. </p>
                <div className="wrapp-introducing">
                    {
                        introducings.map((item, id) => {
                            return (
                                <div className="wrapp-introducing__item" key={`Introducing-${id}`}>
                                    <div className="wrapp-introducing__item-img">
                                        <img src={item.img} alt=""/>
                                    </div>
                                    <p className="wrapp-introducing__item-text">{item.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <p className="introducing-text">The validity period of Kepler Multivisa is 5 Earth years. Multivisa price is 0.08 ETH.</p>
                {
                    account &&
                    <>
                        <div className="info-left__balance">Your balance: {balance} ETH</div>
                        <input
                            type="text"
                            className="info-left__input"
                            onChange={event => enforcer(event.target.value.replace(/,/g, ''))}
                            inputMode="decimal"
                            autoComplete="off"
                            pattern={"^[0-9]*$"}
                            value={amount}
                        />
                    </>
                }
                {
                    account
                        ? <button disabled={!Boolean(contract) || amount === '' || parseFloat(amount) <= 0 || pending}
                                  className="info-left__btn"
                                  onClick={onMintHandle}>
                            {pending ? 'MINTING' : 'MINT MULTIVISA'}
                        </button>
                        : <button className="info-left__btn"
                                  onClick={() => onLoginHandle(ConnectorNames.Injected)}>Connect</button>
                }
            </div>
        </section>
    );
}

export default Introducing;
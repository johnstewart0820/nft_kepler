import useWeb3Provider from "./useWeb3Provider";
import {useMemo} from "react";
import {contractAddress, ContractAbi} from "../config";
import {getContract} from "../util/contracts";

export const useMintContract = () => {
    const provider = useWeb3Provider();
    return useMemo(() => {
        return getContract(ContractAbi, contractAddress, provider.getSigner())
    }, [provider])
}
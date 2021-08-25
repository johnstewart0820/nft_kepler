import {Contract, ethers} from "ethers"
import random from 'lodash/random'
import {defaultChainId} from "../config";

export const nodes: any = {
    1: [
        "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    ],
    4: [
        "https://rinkeby-light.eth.linkpool.io",
    ]
}
export const getNodeUrl = () => {
    const randomIndex = random(0, nodes[defaultChainId].length - 1)
    return nodes[defaultChainId][randomIndex]
}

const RPC_URL = getNodeUrl();

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL)

export const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider): Contract => {
    const signerOrProvider = signer ?? simpleRpcProvider
    return new ethers.Contract(address, abi, signerOrProvider)
}
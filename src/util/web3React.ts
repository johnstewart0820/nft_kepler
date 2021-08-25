import { ethers } from "ethers"
import {ExternalProvider} from "@ethersproject/providers/src.ts/web3-provider";
import {InjectedConnector} from '@web3-react/injected-connector'
import {defaultChainId} from "../config";

const POLLING_INTERVAL = 12000

export enum ConnectorNames {
    Injected = "injected",
    WalletConnect = "walletconnect",
}

const injected = new InjectedConnector({ supportedChainIds: [defaultChainId] })

export const connectorsByName: {[connectorName in ConnectorNames | string]: any} = {
    [ConnectorNames.Injected]: injected,
}

export const getLibrary = (provider: ExternalProvider): ethers.providers.Web3Provider => {
    const library = new ethers.providers.Web3Provider(provider)
    library.pollingInterval = POLLING_INTERVAL
    return library
}
"use client"
import { createContext, useContext, useEffect, useState } from 'react';
import { Web3ContextType, Web3ReactHooks, Web3ReactProvider, useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';
import { MetaMask } from '@web3-react/metamask';
import { metaMask, hooks as metaMaskHooks, } from 'src/connectors/metaMask';

export function Web3ProviderWrapper({ children }: { children: React.ReactNode }) {


  const connectors: [MetaMask, Web3ReactHooks][] = [
    [metaMask, metaMaskHooks],
  ]

  return (
    <Web3ReactProvider connectors={connectors}>
      {children}
    </Web3ReactProvider>
  )
}




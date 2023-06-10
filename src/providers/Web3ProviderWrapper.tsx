"use client"
import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core';
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




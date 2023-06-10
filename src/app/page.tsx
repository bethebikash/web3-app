import Image from 'next/image'
import Converter from 'src/components/Converter'
import WalletPopup from 'src/components/WalletPopup'
import { Web3ProviderWrapper } from 'src/providers/Web3ProviderWrapper'

export default function Home() {
  return (
    <Web3ProviderWrapper>
      <main className="flex h-screen flex-col">
        <div className='shrink-0 flex justify-between items-center p-5'>
          <h2 className='font-bold text-2xl'><span className='text-blue-500'>Web3</span> App</h2>
          <div className='flex items-center gap-3'>
            <WalletPopup />
          </div>
        </div>
        <div className='bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 h-0.5 rounded-full'></div>
        <div className='grow flex justify-center items-center'>
          <Converter />
        </div>
      </main>
    </Web3ProviderWrapper>
  )
}

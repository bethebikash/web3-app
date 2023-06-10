'use client'

import { formatEther } from "@ethersproject/units";
import { useRef, useState } from "react"
import { ImSpinner9 } from 'react-icons/im'
import { hooks, metaMask } from "src/connectors/metaMask";
import { useBalances } from "src/hooks/useBalances";
import { useClickOutside } from "src/hooks/useClickOutside";
import { formatAccountString } from "src/utils/formatAccountString";
import { roundNumber } from "src/utils/roundNumber";

const { useChainId, useAccounts, useIsActivating, useIsActive, useProvider } = hooks;

const WalletPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const handleTooglePopup = () => setIsPopupOpen(!isPopupOpen);

  const popupRef = useRef<HTMLDivElement>(null);
  useClickOutside(popupRef, () => setIsPopupOpen(false));

  // meta mask hooks
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActiviting = useIsActivating();
  const isActive = useIsActive();
  const provider = useProvider();

  // custom hook to get balance.
  const balances = useBalances(provider, accounts);

  const handleConnect = () => {
    metaMask.activate();
  }

  const handleDisconnect = () => {
    metaMask?.deactivate ? metaMask.deactivate() : metaMask.resetState();
  }

  return (
    <div className="relative" ref={popupRef}>
      <button onClick={handleTooglePopup} className="focus:outline-none relative inline-flex rounded-full items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 dark:text-white focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
        <span className="relative px-5 py-2 rounded-full transition-all ease-in duration-75 bg-white dark:bg-gray-900">
          Wallet Details
        </span>
      </button>
      {isPopupOpen && (
        <div className="absolute w-[300px] md:w-[400px] right-0 p-5 rounded-md mt-2 bg-gray-900 text-white border border-gray-700" >
          <div className="flex justify-between items-center">
            <h5 className="text-lg font-semibold">Wallet Details</h5>
            {isActive &&
              <button onClick={handleDisconnect} className="relative inline-flex rounded-full items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-700 group bg-gradient-to-br from-red-700 to-red-500 group-hover:from-red-800 group-hover:to-red-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800">
                <span className="relative px-5 py-2 rounded-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                  Disconnect
                </span>
              </button>}
          </div>
          {isActive ? (
            <div className="mt-10">
              <div className="flex justify-between items-center border-t border-gray-800 py-4">
                <span>Account</span>
                <span>{accounts?.[0] ? formatAccountString(accounts[0]) : null}</span>
              </div>
              <div className="flex justify-between items-center border-t border-gray-800 py-4">
                <span>Chain ID</span>
                <span>{chainId}</span>
              </div>
              <div className="flex justify-between items-center border-t border-gray-800 py-4">
                <span>Balance</span>
                <span>{balances?.[0] ? <><span className="text-gray-400 mr-1">Ξ</span>{roundNumber(Number(formatEther(balances[0])))}</> : null}</span>
              </div>
            </div>
          ) : (
            <div className="py-10 grid place-items-center gap-4">
              <p className="text-red-400">Wallet is not connected.</p>
              <button onClick={handleConnect} className="relative inline-flex rounded-full items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative flex justify-center items-center gap-2 px-5 py-2 rounded-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                  <span>Connect</span>
                  {isActiviting && <ImSpinner9 className="animate-spin" />}
                </span>

              </button>
            </div>
          )}
        </div>
      )}
    </div >
  )
}

export default WalletPopup
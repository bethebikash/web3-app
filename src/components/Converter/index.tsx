'use client'

import { useState } from "react"
import { decimalNumberRegEx } from "src/shared/regex";

const Converter = () => {
  const [nepaliAmount, setNepaliAmount] = useState<number | string>('');
  const [busdAmount, setBusdAmount] = useState<number | string>('');

  const handleNepaliAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNepaliAmount(e.target.value);
    if (e.target.value === '') {
      setBusdAmount('');
    } else {
      setBusdAmount(Number(e.target.value) * 3);
    }
  }

  const handleBusdAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusdAmount(e.target.value);
    if (e.target.value === '') {
      setNepaliAmount('');
    } else {
      setNepaliAmount(Number(e.target.value) / 3);
    }
  }


  return (

    <form className="flex flex-col gap-9 items-center justify-center">
      <div className="flex">
        <button disabled id="dropdown-button-2" data-dropdown-toggle="dropdown-search-city" className="w-[80px] flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
          NRS
        </button>
        <div className="relative w-full">
          <input type="text" value={nepaliAmount} onChange={(e) => { if (e.target.value === '' || decimalNumberRegEx.test(e.target.value)) { handleNepaliAmountChange(e) } }}
            id="nepaliAmount" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 focus:outline-none" placeholder="Enter NRS" />
        </div>
      </div>
      <div className="flex">
        <button disabled id="dropdown-button-2" data-dropdown-toggle="dropdown-search-city" className="w-[80px] flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
          BUSD
        </button>
        <div className="relative w-full">
          <input
            type="text"
            value={busdAmount}
            onChange={(e) => { if (e.target.value === '' || decimalNumberRegEx.test(e.target.value)) { handleBusdAmountChange(e) } }}
            id="busdAmount" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 focus:outline-none"
            placeholder="Enter BUSD" />
        </div>
      </div>
    </form>
  )
}

export default Converter
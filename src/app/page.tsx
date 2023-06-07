import Image from 'next/image'
import Converter from 'src/components/Converter'

export default function Home() {
  return (
    <main className="flex h-full flex-col">
      <div className='shrink-0 flex justify-between items-center p-5'>
        <p>asd</p>
        <div className='flex items-center gap-3'>
          <button className="relative inline-flex rounded-full items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2 rounded-full transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Connect
            </span>
          </button>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="m-0 p-0 w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
      <div className='bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 h-0.5 rounded-full'></div>
      <div className='grow'>
        <Converter />
      </div>
    </main>
  )
}

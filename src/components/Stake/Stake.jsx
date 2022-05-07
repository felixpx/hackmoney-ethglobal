import { ArrowCircleDownIcon, ChevronDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export default function Deposit() {
  return (
    <div className="m-2 flex w-11/12 flex-col justify-between rounded-xl bg-[#171717] p-8 px-16 text-base font-bold text-white shadow-lg lg:w-4/12">
      <button className="mb-4 flex w-3/12 flex-row items-center justify-between rounded-full border-2 border-white bg-transparent p-1 px-4 text-sm">
        Stake <ChevronDownIcon className="h-5" />
      </button>
      <div className="flex h-16 w-full flex-row items-center justify-between">
        <p className="text-3xl font-bold">500.00</p>
        <div className="flex items-center space-x-2">
          <Image src={'/usdc-logo.png'} height={25} width={25} />
          <p className="text-sm font-semibold">MIRA</p>
        </div>
      </div>
      <p className="-mt-2 text-xs font-light text-gray-300">
        Balance: 10,000.00
      </p>

      <div className="mt-12 flex w-full flex-row items-center justify-evenly">
        <div className="w-9/12 cursor-pointer rounded-full  bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] p-1.5 px-2 text-sm font-medium tracking-wide text-white">
          <div className="m-1 flex flex-row items-center justify-center space-x-2 text-xs">
            <p>Stake</p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex w-full flex-row items-center justify-between text-xs font-light text-gray-300">
        <p>Estimated Average APR</p>
        <p>12.45%</p>
      </div>
      <p className="mt-4 flex flex-row items-center justify-between text-xs font-light text-gray-300">
        <p>Estimated Network Fees</p>
        <p>0.01 MATIC</p>
      </p>
    </div>
  )
}

import { ArrowCircleDownIcon, ChevronDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export default function Deposit() {
  return (
    <div className="m-2 flex w-11/12 flex-col justify-between rounded-xl bg-[#171717] p-8 px-16 text-base font-bold text-white shadow-lg lg:w-4/12">
      <div className="flex w-full flex-row items-center justify-between font-bold text-gray-300">
        <p>Current USDC APY</p>
        <p classname="bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] bg-clip-text text-lg tracking-wide text-transparent">
          11.20%
        </p>
      </div>
      <div className="flex w-full flex-row items-center justify-between text-sm font-semibold text-gray-300">
        <p>Balance</p>
        <p classname="bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] bg-clip-text text-lg tracking-wide text-transparent">
          11768.20 mUSDC
        </p>
      </div>
      <div className="mt-4 flex w-full flex-row items-center justify-between font-bold text-gray-300">
        <p>Current MIRA APY</p>
        <p classname="bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] bg-clip-text tracking-wide text-transparent">
          5.62%
        </p>
      </div>
      <div className=" flex w-full flex-row items-center justify-between text-sm font-semibold text-gray-300">
        <p>Balance</p>
        <p classname="bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] bg-clip-text  tracking-wide text-transparent">
          7521.62 MIRA
        </p>
      </div>
    </div>
  )
}

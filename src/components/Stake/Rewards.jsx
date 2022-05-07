import { ArrowCircleDownIcon, ChevronDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export default function Deposit() {
  return (
    <div className="m-2 flex w-11/12 flex-col justify-between rounded-xl bg-[#171717] p-8 px-16 text-base font-bold text-white shadow-lg lg:w-4/12">
      <div className="flex w-full flex-row items-center justify-between font-bold text-gray-300">
        <p>Current MIRA Rewards</p>
        <p classname="bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] bg-clip-text text-lg tracking-wide text-transparent">
          510.20
        </p>
      </div>
      <div className="mt-6 flex w-full flex-row items-center justify-evenly">
        <div className="w-6/12 cursor-pointer rounded-full  bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] p-1.5 px-2 text-sm font-medium tracking-wide text-white">
          <div className="m-1 flex flex-row items-center justify-center space-x-2 text-xs">
            <p>Claim</p>
          </div>
        </div>
      </div>
    </div>
  )
}

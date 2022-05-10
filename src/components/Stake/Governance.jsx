import { ArrowCircleDownIcon, ChevronDownIcon } from '@heroicons/react/outline'
import Image from 'next/image'

export default function Deposit() {
  return (
    <div className="m-2 flex w-11/12 flex-col justify-between rounded-xl bg-[#171717] px-8 py-8 text-base font-bold text-white shadow-lg lg:w-4/12">
      <div className="flex w-full flex-col items-center justify-center font-bold text-gray-300">
        <p>Governance</p>
        <p className="mt-4 w-full text-xs font-medium">
          Propose and vote on the projects MiraDAO contributes to, how to use
          treasury funds, and more important decisions.
        </p>
      </div>
      <div className="mt-6 flex w-full flex-row items-center justify-evenly">
        <div
          className="w-56 cursor-pointer rounded-full  bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] p-1.5 px-2 text-sm font-medium tracking-wide text-white"
          onClick={() => window.open('https://www.google.com')}
        >
          <div className="m-1 flex flex-row items-center justify-center space-x-2 text-xs">
            <p>Participate</p>
          </div>
        </div>
      </div>
    </div>
  )
}

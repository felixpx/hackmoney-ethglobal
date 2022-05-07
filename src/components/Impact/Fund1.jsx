import {
  ArrowCircleDownIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/outline'
import Image from 'next/image'
import { useState } from 'react'

export default function Fund() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="m-2 flex w-11/12 flex-col justify-between rounded-xl bg-[#171717] p-8 px-16 text-base font-bold text-white shadow-lg lg:w-4/12">
      <div
        className="flex h-16 w-full cursor-pointer flex-row items-center justify-between"
        onClick={() => {
          if (isOpen) {
            setIsOpen(false)
          } else {
            setIsOpen(true)
          }
        }}
      >
        <div className="flex w-6/12 flex-row items-center justify-evenly">
          <Image src={'/usdc-logo.png'} height={50} width={50} />
          <p className="whitespace-nowrap text-3xl font-bold">ReFi Fund</p>
        </div>
        {!isOpen ? (
          <ChevronDownIcon className="h-5" />
        ) : (
          <ChevronUpIcon className="h-5" />
        )}
      </div>
      {isOpen && (
        <div className="flex flex-col items-center justify-evenly">
          <p className="mt-8 text-xs font-light text-gray-300">
            The ReFi Fund supports projects and organizations building solutions
            for climate regeneration.
          </p>

          <div className="flex w-full flex-col items-center justify-center">
            <p className="mt-6 text-sm font-bold text-gray-300">
              Inside this Fund
            </p>
            <div className="mt-2 flex w-full flex-row items-center justify-evenly">
              <div className="w-6/12 cursor-pointer rounded-xl border-2 border-white bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] p-1.5 px-2 text-sm font-medium tracking-wide text-white shadow-xl">
                <div className="flex flex-row items-center justify-center text-xs">
                  <p>KlimaDAO</p>
                </div>
              </div>
            </div>
            <div className="mt-2 flex w-full flex-row items-center justify-evenly">
              <div className="w-6/12 cursor-pointer rounded-xl border-2 border-white bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] p-1.5 px-2 text-sm font-medium tracking-wide text-white shadow-xl">
                <div className="flex flex-row items-center justify-center space-x-2 text-xs">
                  <p>Toucan Protocol</p>
                </div>
              </div>
            </div>
            <div className="mt-2 flex w-full flex-row items-center justify-evenly">
              <div className="w-6/12 cursor-pointer rounded-xl border-2 border-white bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] p-1.5 px-2 text-sm font-medium tracking-wide text-white shadow-xl">
                <div className="flex flex-row items-center justify-center space-x-2 text-xs">
                  <p>Open Forest Protocol</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex w-full flex-row items-center justify-evenly">
            <div className="w-3/12 cursor-pointer rounded-full  bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] p-1.5 px-2 text-sm font-medium tracking-wide text-white">
              <div className="m-1 flex flex-row items-center justify-center space-x-2 text-xs">
                <p>Learn more</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

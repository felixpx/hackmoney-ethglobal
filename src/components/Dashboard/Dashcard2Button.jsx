import Image from 'next/image'

export default function DashcardButton({ title, value, info }) {
  return (
    <div className="m-2 flex h-32 w-11/12 flex-col items-start justify-around rounded-xl bg-[#171717] p-4 text-base font-bold text-white lg:w-72">
      <p className="font-bold">{title}</p>
      <div className="flex w-full flex-row items-center justify-start bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] bg-clip-text text-lg font-bold tracking-wide text-transparent">
        <p className="mr-4">{value} miraUSDC</p>
        <Image
          src="/musdc.png"
          width="20"
          height="20"
          className="rounded-full"
        />
      </div>
      <div className="flex w-full flex-row items-center justify-evenly py-2">
        <button className="rounded-full border-2 border-white bg-transparent px-4 text-sm">
          Claim
        </button>
        <button className="rounded-full border-2 border-white bg-transparent px-4 text-sm">
          No Fee Deposit
        </button>
      </div>
      <p className="text-xs font-medium underline">{info}</p>
    </div>
  )
}

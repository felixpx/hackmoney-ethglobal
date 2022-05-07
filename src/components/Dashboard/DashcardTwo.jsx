import Image from 'next/image'
export default function DashcardTwo({ title, value, info }) {
  return (
    <div className="m-2 flex h-32 w-11/12 flex-col justify-between rounded-xl bg-[#171717] p-4 text-base font-bold text-white lg:w-72">
      <p className="font-bold">{title}</p>
      <div className="bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] bg-clip-text text-lg font-bold tracking-wide text-transparent ">
        {value}
      </div>
      <p className="text-xs font-medium underline">{info}</p>
    </div>
  )
}

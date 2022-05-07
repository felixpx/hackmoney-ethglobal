export default function DashcardMid({ title, value, info }) {
  return (
    <div className="m-2 flex h-32 w-11/12 flex-col items-start justify-around rounded-xl bg-[#171717] p-4 text-base font-bold text-white lg:w-72">
      <p className="font-bold">{title}</p>
      <p className="bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] bg-clip-text text-lg font-bold tracking-wide text-transparent ">
        {value}
      </p>
      <p className="text-sm">{info}</p>
    </div>
  )
}

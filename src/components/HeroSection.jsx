import { useRouter } from 'next/router'

export default function HeroSection({ title, description }) {
  const router = useRouter()
  return (
    <div
      className={`absolute top-16 flex h-36 w-full flex-col items-center justify-center px-2 text-base font-bold hover:text-black`}
    >
      <container className="flex flex-col items-center justify-center space-y-4">
        <p className="bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] bg-clip-text text-3xl font-bold tracking-wide text-transparent ">
          {title}
        </p>
        <div className="flex flex-wrap items-center justify-evenly text-sm font-medium ">
          {description}
        </div>
      </container>
    </div>
  )
}

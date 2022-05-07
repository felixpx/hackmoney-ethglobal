import { useRouter } from 'next/router'

export default function NavbarItem({ title }) {
  const router = useRouter()
  return (
    <div
      // className={`m-1 w-full cursor-pointer items-center px-2 text-base font-medium hover:text-black

      // `}
      className="m-1 cursor-pointer px-2 text-base font-medium hover:text-black"
    >
      <p className="text-sm tracking-wide ">{title}</p>
    </div>
  )
}

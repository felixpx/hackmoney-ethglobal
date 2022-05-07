import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useChain } from 'react-moralis'
import { useMoralis } from 'react-moralis'
import NavbarItem from './NavbarItem'
import { LogoutIcon } from '@heroicons/react/outline'

export default function Header() {
  const router = useRouter()

  const {
    authenticate,
    isAuthenticated,
    user,
    logout,
    isWeb3Enabled,
    enableWeb3,
  } = useMoralis()
  const { chainId, switchNetwork } = useChain()

  const [clippedAddress, setClippedAddress] = useState('')

  const [wrongNetwork, setWrongNetwork] = useState('')

  useEffect(() => {
    if (!isWeb3Enabled) enableWeb3()
    if (isAuthenticated && user) {
      setClippedAddress(
        user.get('ethAddress').slice(0, 4).concat('...') +
          user.get('ethAddress').slice(38, 42)
      )
    } else {
      setClippedAddress('Not authenticated')
    }
  }, [])

  useEffect(() => {
    if (chainId != '0x13881') {
      setWrongNetwork(true)
    } else setWrongNetwork(false)
  }, [])

  // authentication & wallet connect
  const login = async () => {
    authenticate()
    // console.log('Start login')
    // if (!isAuthenticated) {
    //   await authenticate({ provider: 'walletconnect', chainId: '56' })
    //     .then(function (user) {})
    //     .catch(function (error) {
    //       console.log(error)
    //     })
    // }
  }
  async function networkChange() {
    await switchNetwork('0x13881').then(() => {
      setWrongNetwork(false)
    })
  }

  return (
    <header className="absolute top-0 flex h-16 w-full flex-row items-center justify-between px-8">
      {/* LOGO */}
      <div className="w-2/12">MIRA DAO</div>
      {/* <Image /> */}

      {/* NAV BAR */}
      <nav className="flex w-8/12 flex-row items-center justify-evenly rounded-full bg-[#5653E2] p-1.5 text-white sm:w-7/12 lg:w-4/12">
        <div
          className={`cursor-pointer rounded-full ${
            router.pathname == '/' ? 'bg-[#827FE5]' : ''
          }`}
          onClick={() => router.push('/')}
        >
          <NavbarItem title={'Dashboard'} />
        </div>
        <div
          className={`cursor-pointer rounded-full ${
            router.pathname == '/deposit' ? 'bg-[#827FE5]' : ''
          }`}
          onClick={() => router.push('/deposit')}
        >
          <NavbarItem title={'Deposit'} />
        </div>
        <div
          className={`cursor-pointer rounded-full ${
            router.pathname == '/mira' ? 'bg-[#827FE5]' : ''
          }`}
          onClick={() => router.push('/mira')}
        >
          <NavbarItem title={'MIRA'} />
        </div>

        <div
          className={`cursor-pointer rounded-full ${
            router.pathname == '/impact' ? 'bg-[#827FE5]' : ''
          }`}
          onClick={() => router.push('/impact')}
        >
          <NavbarItem title={'Impact'} />
        </div>
      </nav>

      {/*  WALLET */}
      <div className="w-2/12">
        <div className="cursor-pointer rounded-full bg-[#5653E2] p-1.5 px-2 text-sm font-medium tracking-wide text-white">
          {isAuthenticated ? (
            <div className="m-1 flex flex-row items-center justify-evenly space-x-2 text-xs">
              <div
                className={`whitespace-nowrap ${
                  wrongNetwork ? 'font-bold text-[#D86972]' : ''
                } text-xs`}
                onClick={networkChange}
              >
                {wrongNetwork ? 'Switch Network!' : ' 6,222.67 MIRA'}
              </div>
              <div className="text-[#827FE5] ">
                <LogoutIcon
                  className="h-5 hover:text-[#D86972]"
                  onClick={logout}
                />
              </div>
              <div
                className="text-black"
                onClick={() =>
                  navigator.clipboard.writeText(user.get('ethAddress'))
                }
              >
                {clippedAddress}{' '}
              </div>
            </div>
          ) : (
            <div
              className="m-1 flex flex-row items-center justify-center space-x-2 text-xs"
              onClick={login}
            >
              <p>Connect Wallet</p>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

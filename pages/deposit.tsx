import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/components/Header/Header'
import HeroSection from '../src/components/HeroSection'
import Deposit from '../src/components/Deposit/Deposit'
import UserBalance from '../src/components/Deposit/UserBalance'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>MIRA | Deposit</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroSection
        title={'Fund & Save'}
        description={
          ' Deposit USDC into Mira Protocol. Earn interest on your balance while contributing to your desired Impact Fund.'
        }
      />
      <div className="mt-48 flex w-full flex-col items-center">
        <Deposit />
        <UserBalance />
      </div>
    </div>
  )
}

export default Home

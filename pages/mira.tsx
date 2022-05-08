import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/components/Header/Header'
import HeroSection from '../src/components/HeroSection'
import Stake from '../src/components/Stake/Stake'
import Rewards from '../src/components/Stake/Rewards'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>MIRA | Staking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroSection
        title={'Stake Mira'}
        description={
          ' Stake MIRA to earn governance rights in Mira DAO. Staking also rewards additional MIRA rewards..'
        }
      />
      <div className="mt-48 flex w-full flex-col items-center">
        {/* <Stake /> */}
        <Rewards />
        <div className="mt-6 flex w-full flex-row items-center justify-evenly">
          <div className="w-4/12 cursor-pointer rounded-xl border-2 border-black bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] p-1.5 px-2 text-sm font-medium tracking-wide text-white shadow-xl">
            <div className="m-1 flex flex-row items-center justify-center space-x-2 text-xs">
              <p>Buy Mira</p>
            </div>
          </div>
        </div>
        <div className="mt-6 flex w-full flex-row items-center justify-evenly">
          <div className="w-4/12 cursor-pointer rounded-xl border-2 border-black bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] p-1.5 px-2 text-sm font-medium tracking-wide text-white shadow-xl">
            <div className="m-1 flex flex-row items-center justify-center space-x-2 text-xs">
              <p>Snapshot</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

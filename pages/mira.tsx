import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/components/Header/Header'
import HeroSection from '../src/components/HeroSection'
import Rewards from '../src/components/Stake/Rewards'
import Governance from '../src/components/Stake/Governance'
import BalanceClaim from '../src/components/Stake/BalanceClaim'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>MIRA | Staking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroSection
        title={'MiraDAO Home'}
        description={
          ' Stake MIRA to earn governance rights in Mira DAO. Staking also rewards additional MIRA rewards.'
        }
      />
      <div className="mt-48 flex w-full flex-col items-center">
        <BalanceClaim />
        <Governance />
        <div className="mt-6 flex w-full flex-row items-center justify-evenly">
          <div className="w-6/12 cursor-pointer rounded-xl border-2 border-black bg-gradient-to-r from-[#5653E2] via-[#D77968] to-[#D86972] p-1.5 px-2 text-sm font-medium tracking-wide text-white shadow-xl lg:w-2/12">
            <div className="m-1 flex flex-row items-center justify-center space-x-2 text-xs">
              <p>Buy Mira</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

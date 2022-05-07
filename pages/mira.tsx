import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/components/Header/Header'
import HeroSection from '../src/components/HeroSection'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroSection
        title={'Stake Mira'}
        description={
          ' Stake MIRA to earn governance rights in Mira DAO. Staking also rewards additional MIRA rewards..'
        }
      />
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/components/Header/Header'
import HeroSection from '../src/components/HeroSection'
import Exchange from '../src/components/Exchange/Exchange'
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>MIRA | Exchange</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroSection
        title={'Mira DAO Exchange'}
        description={
          'Purchase or Swap Mira and USDC.'
        }
      />
    <Exchange />
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/components/Header/Header'
import HeroSection from '../src/components/HeroSection'
import Fund1 from '../src/components/Impact/Fund1'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>MIRA | Impact</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroSection
        title={'Mira DAO Impact Funds'}
        description={
          ' Explore the Mira DAO currated Impact Funds. We’ve identified and partnered with the most effective organizations out there.'
        }
      />
      <div className="mt-48 flex w-full flex-col items-center">
        <Fund1 />
        <Fund1 />
        <Fund1 />
      </div>
    </div>
  )
}

export default Home

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
        title={'Mira DAO Impact Funds'}
        description={
          ' Explore the Mira DAO currated Impact Funds. We’ve identified and partnered with the most effective organizations out there.'
        }
      />
    </div>
  )
}

export default Home

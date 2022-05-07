import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../src/components/Header/Header'
import HeroSection from '../src/components/HeroSection'
import Dashboard from '../src/components/Dashboard/Dashboard'
import Footer from '../src/components/Footer/Footer'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>MIRA | Dashboard</title>
        <link rel="icon" href="/mira-prp.png" className="rounded-full" />
      </Head>

      <Header />

      <HeroSection
        title={'Mira Dashboard'}
        description={
          'Discover the key metrics of Mira. Here you can find total fund donations, your rewards, protocol TVL, and more'
        }
      />
      <Dashboard />
      <Footer />
    </div>
  )
}

export default Home

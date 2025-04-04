import FeaturesSection from '@/src/components/feature'
import Footer from '@/src/components/footer'
import Header from '@/src/components/header'
import HeroSection from '@/src/components/heroSection'
import Unlocking from '@/src/components/unlocking'
import React from 'react'

function LandingPage() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <FeaturesSection/>
      <Unlocking/>
      {/* <Footer/> */}
    </div>
  )
}

export default LandingPage

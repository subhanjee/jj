import Faqs from '@/src/components/faqs'
import FeaturesSection from '@/src/components/feature'
import Footer from '@/src/components/footer'
import Header from '@/src/components/header'
import HeroSection from '@/src/components/heroSection'
import Roadmap from '@/src/components/roadMap'
import Unlocking from '@/src/components/unlocking'
import React from 'react'

function LandingPage() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <FeaturesSection/>
      <Unlocking/>
      <Roadmap/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default LandingPage

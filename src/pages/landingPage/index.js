import React, { useState } from 'react'
import Faqs from '@/src/components/faqs'
import FeaturesSection from '@/src/components/feature'
import Footer from '@/src/components/footer'
import Header from '@/src/components/header'
import HeroSection from '@/src/components/heroSection'
import Roadmap from '@/src/components/roadMap'
import Unlocking from '@/src/components/unlocking'
import USDTDeposit from '@/src/components/USDTDeposit'
import AuthPageWrapper from '@/pages/AuthPageWrapper'

function LandingPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)

  return (
    <div>
      <Header onJoinClick={() => setShowAuthModal(true)} />
        <div className='flex flex-col items-center justify-center min-h-screen text-white'
          style={{
            backgroundImage:
              "url('https://satochain.io/images/home/build-for-bitcoin.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
        <h1 className="text-3xl text-center font-mono mt-16 md:text-5xl lg:text-8xl">
          Build for Bitcoin
        </h1>
        <p className="text-1xl md:text-2xl lg:3xl mt-5">
          Enhance Bitcoins economy using secure
        </p>
        <p className="text-1xl md:text-2xl lg:3xl">
          Bitcoin-based apps and smart contracts
        </p>
      <div
  className='min-h-screen grid grid-cols-1  gap-5 md:grid-cols-1 lg:grid-cols-2 text-white'

>
  
  <HeroSection />
  {isAuthenticated && <USDTDeposit />}
</div>
</div>
      <FeaturesSection />
      <Unlocking />
      <Roadmap />
      <Faqs />
      <Footer />

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="  rounded-lg p-6 max-w-md w-full relative">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-2 right-3 text-gray-600 text-xl font-bold"
            >
              &times;
            </button>
            <AuthPageWrapper onAuthSuccess={() => {
              setIsAuthenticated(true)
              setShowAuthModal(false)
            }} />
          </div>
        </div>
      )}
    </div>
  )
}

export default LandingPage

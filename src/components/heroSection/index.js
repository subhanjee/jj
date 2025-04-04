import React from 'react'

function HeroSection() {
  return (
    <>
    <div className='  min-h-screen flex flex-col items-center justify-center text-white'>
      <h1 className=' text-3xl text-center font-mono mt-16   md:text-5xl lg:text-7xl'>Build for Bitcoin</h1>
      <p className='text-1xl md:text-2xl lg:2xl'>Enhance Bitcoins economy using secure
      </p>
      <p className='text-1xl md:text-2xl lg:2xl'>Bitcoin-based apps and smart contracts</p>
      <div className="flex items-center justify-center min-h-screen  ">
      <div className="w-[450px] md:w-[500px] bg-[#1a1a1a] text-white rounded-xl p-6 shadow-lg">
        {/* Header */}
        <h2 className="text-center text-2xl font-bold">Stage 1 - Buy Satochain Now</h2>
        <p className="text-center text-sm text-gray-400">Until price increase</p>

        {/* Listing Info */}
        <div className="border border-gray-600 rounded-lg p-3 mt-4 flex justify-between">
          <div>
            <p className="text-xs text-gray-400">Listing Date</p>
            <p className="font-semibold">June 30, 2025</p>
          </div>
          <div>
            <p className="text-xs text-gray-400">Listing Price</p>
            <p className="font-semibold">$0.01</p>
          </div>
        </div>

        {/* Price Info */}
        <div className="mt-4">
          <p className="text-sm text-gray-400">Current Price:</p>
          <p className="text-lg font-semibold">$0.002</p>
          <div className="w-full h-1 bg-gray-700 rounded mt-2"></div>
        </div>

        {/* Raised Amount */}
        <p className="mt-4 text-center text-lg font-bold">Raised $50,000</p>
        <p className="text-center text-sm">
          1 $SATO = <span className="text-orange-500 font-semibold">$0.002</span>
        </p>

        {/* Currency Selection */}
        <div className="flex justify-center gap-4 mt-4">
          <button className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
            <span>🪙</span> ETH
          </button>
          <button className="flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-lg">
            <span>💵</span> USDT
          </button>
        </div>

        {/* Balance */}
        <p className="text-center text-sm text-gray-400 mt-2">USDT Balance: 0.00</p>

        {/* Input Fields */}
        <div className="mt-4 space-y-3">
          <div className="flex items-center border border-gray-600 rounded-lg px-4 py-2">
            <input
              type="number"
              placeholder="0"
              className="bg-transparent w-full outline-none text-white"
            />
            <span>💵</span>
          </div>
          <div className="flex items-center border border-gray-600 rounded-lg px-4 py-2">
            <input
              type="number"
              placeholder="0"
              className="bg-transparent w-full outline-none text-white"
            />
            <span>🪙</span>
          </div>
        </div>

        {/* Connect Wallet Button */}
        <button className="w-full bg-orange-500 text-white py-3 mt-4 rounded-lg font-semibold">
          CONNECT WALLET
        </button>

        {/* Footer Link */}
        <p className="text-center mt-3 text-sm text-gray-400">
          <a href="#" className="underline">Refer a friend</a>
        </p>
      </div>
    </div>
    </div>

    </>
    
  )
}

export default HeroSection

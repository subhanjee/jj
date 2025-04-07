 import React from 'react'
 
 export default function Roadmap() {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-12 font-mono flex items-center justify-center flex-col">
        {/* Left Side - Text */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-8xl">

        <div className="max-w-2xl space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white font-mono">
            Roadmap
          </h2>
  
          {/* Phase 1 */}
          <div className="space-y-2">
            <h3 className="text-orange-500 text-lg font-semibold">
              Phase 1: Foundation
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Develop platform architecture and smart contracts.</li>
              <li>Establish partnerships and finalize tokenomics.</li>
              <li>Launch $SATO presale and conduct token audits.</li>
            </ul>
          </div>
  
          {/* Phase 2 */}
          <div className="space-y-2">
            <h3 className="text-orange-500 text-lg font-semibold">
              Phase 2: Fortification
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Beta test the platform with selected users.</li>
              <li>Perform a full platform audit.</li>
              <li>DEX Listing</li>
            </ul>
          </div>
  
          {/* Phase 3 */}
          <div className="space-y-2">
            <h3 className="text-orange-500 text-lg font-semibold">
              Phase 3: Innovation
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Expand globally and focus on institutional adoption.</li>
              <li>Launch new AI-driven DeFi features.</li>
              <li>Develop a decentralized DAO for governance.</li>
            </ul>
          </div>
        </div>
  
        {/* Right Side - Glowing Planet Effect */}
        <div className="relative mt-12 md:mt-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[480px] lg:h-[480px] rounded-full bg-gradient-to-br from-orange-500 to-black shadow-[0_0_120px_60px_rgba(255,115,0,0.3)]" />
      </div>

      <img src='https://satochain.io/images/home/tokenomics-new.webp' alt='tokenomics' className='w-full h-auto mt-10'/>
      </div>
    );
  }
  
 
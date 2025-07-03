import React from 'react'

function Home() {
  return (
    <div className=" text-white flex flex-col lg:flex-row items-center justify-center px-10 py-20 gap-10">
      
      {/* Text Section */}
      <div className="flex-1">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Secure Your Creations <br /> <span className="text-white">with NAXY</span>
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Ensure the safety and authenticity of your digital content with NAXY’s AI-driven verification and blockchain technology. Join the revolution in secure intellectual property management today.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:scale-110">White Paper</button>
          <button className="px-6 py-3 border border-white text-white rounded-full font-semibold hover:scale-110">Light Paper</button>
          <button className="px-6 py-3 bg-[#7ce8eb] text-black rounded-full font-semibold hover:scale-110">Pitch Deck</button>
          <button className="px-6 py-3 bg-[#b6e5e7] text-black rounded-full font-semibold">Certik Audit</button>
          <button className="px-6 py-3 bg-[#7ce8eb] text-black rounded-full font-semibold hover:scale-110">Pinksale Buy</button>
        </div>
      </div>

      {/* Video Section */}
      <div className="flex-1 rounded-3xl overflow-hidden shadow-lg">
        <video
          src="https://www.naxy.ai/Videos/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>  )
}

export default Home
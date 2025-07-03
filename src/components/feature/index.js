// import React from "react";

// const features = [
//   {
//     title: "Smart Contract",
//     description:
//       "The consensus mechanism linking Satochain with Bitcoin, enabling dApp to utilize Bitcoin's security",
//     image: "https://satochain.io/images/home/smart-contract.png", // Update with actual image path
//   },
//   {
//     title: "Bitcoin DeFi",
//     description:
//       "Satochain brings DeFi to Bitcoin, unlocking over $300 billion in capital and setting the stage for activation of the Bitcoin economy",
//     image: "https://satochain.io/images/home/bitcoin-defi.png", // Update with actual image path
//   },
//   {
//     title: "Bitcoin NFTs",
//     description:
//       "Satochain launches DeFi on Bitcoin, releasing over $300 billion in funds and catalyzing the Bitcoin economy's growth",
//     image: "https://satochain.io/images/home/bitcoin-nft.png", // Update with actual image path
//   },
// ];

// const FeaturesSection = () => {
//   return (
//     <div
//     id="featuresSection"

//      className="  py-16 px-6 sm:px-12" >
//         <h1 className="text-3xl text-center md:text-7xl pb-5 font-mono">Feature</h1>
//       <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="relative bg-[#121212]  rounded-xl border border-gray-800 p-14 md:p-3 lg:p-14 text-white shadow-lg group transition-all duration-300 hover:scale-105"
//           >
//             {/* Top Shape Effect */}
//             {/* <div className="absolute top-0 left-0 w-full h-full border border-gray-700 rounded-xl transition-all duration-300 group-hover:border-orange-400" /> */}
            
//             {/* Feature Image */}
//             <div className="flex justify-center">
//               <img src={feature.image} alt={feature.title} className="w-32 h-32 object-contain" />
//             </div>

//             {/* Title */}
//             <h3 className="text-lg font-bold text-center mt-4">{feature.title}</h3>

//             {/* Description */}
//             <p className="text-gray-400 text-center mt-2 text-sm">{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturesSection;
'use client';
import React from 'react';

export default function KeyFeatures() {
  const features = [
    {
      title: 'AI Powered Validation',
      desc: 'Harness the power of artificial intelligence to authenticate your digital content. Our state of the art AI algorithms ensure that your work is original and securely recorded.',
    },
    {
      title: 'Enhanced Security',
      desc: 'Enjoy the benefits of technology’s transparency and immutability. NAXY securely logs your intellectual property rights on a ledger safeguarding them against alterations and fostering trust.',
    },
    {
      title: 'Real Time Monitoring',
      desc: 'Stay proactive with real time monitoring of your assets. Our system continuously scans for infringements promptly alerting you to enable responses.',
    },
    {
      title: 'User Friendly Interface',
      desc: 'Immerse yourself in a smooth and user friendly interface tailored for simplicity. NAXY’s platform is crafted for effortless management and protection of your property.',
    },
  ];

  return (
    <section className="bg-[#031419] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Key Features</h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* Left: Feature Boxes */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          {features.map((item, index) => (
             <div
              key={index}
              className="rounded-2xl border-2 border-white p-8 text-left"
              style={{
                background: 'linear-gradient(to right, #01131a, #3a9da6)',
              }}
            >
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-200">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Right: Feature Image */}
        <div className="w-full lg:w-1/2 max-w-xxl">
          <img
            src="/features.jpg"
            alt="Naxy Device"
            className="rounded-xl w-full shadow-2xl"
          />
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <button className="bg-cyan-300 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-full transition">
          Explore Features
        </button>
      </div>
    </section>
  );
}


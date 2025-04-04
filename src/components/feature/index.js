import React from "react";

const features = [
  {
    title: "Smart Contract",
    description:
      "The consensus mechanism linking Satochain with Bitcoin, enabling dApp to utilize Bitcoin's security",
    image: "https://satochain.io/images/home/smart-contract.png", // Update with actual image path
  },
  {
    title: "Bitcoin DeFi",
    description:
      "Satochain brings DeFi to Bitcoin, unlocking over $300 billion in capital and setting the stage for activation of the Bitcoin economy",
    image: "https://satochain.io/images/home/bitcoin-defi.png", // Update with actual image path
  },
  {
    title: "Bitcoin NFTs",
    description:
      "Satochain launches DeFi on Bitcoin, releasing over $300 billion in funds and catalyzing the Bitcoin economy's growth",
    image: "https://satochain.io/images/home/bitcoin-nft.png", // Update with actual image path
  },
];

const FeaturesSection = () => {
  return (
    <div className="  py-16 px-6 sm:px-12" >
        <h1 className="text-3xl text-center md:text-7xl pb-5 font-mono">Feature</h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-[#121212]  rounded-xl border border-gray-800 p-14 md:p-3 lg:p-14 text-white shadow-lg group transition-all duration-300 hover:scale-105"
          >
            {/* Top Shape Effect */}
            {/* <div className="absolute top-0 left-0 w-full h-full border border-gray-700 rounded-xl transition-all duration-300 group-hover:border-orange-400" /> */}
            
            {/* Feature Image */}
            <div className="flex justify-center">
              <img src={feature.image} alt={feature.title} className="w-32 h-32 object-contain" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-center mt-4">{feature.title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-center mt-2 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

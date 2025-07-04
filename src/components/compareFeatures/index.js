import React from "react";

const features = [
  {
    name: "Ai driven originality verification",
    Naxy: true,
    Chainlink: false,
    Tron: false,
  },
  {
    name: "Real time monitoring",
    Naxy: true,
    Chainlink: false,
    Tron: false,
  },
  {
    name: "Secure storage",
    Naxy: true,
    Chainlink: false,
    Tron: true,
  },
  {
    name: "Smart contract for licencing",
    Naxy: true,
    Chainlink: false,
    Tron: true,
  },
  {
    name: "Blockchain integration",
    Naxy: false,
    Chainlink: false,
    Tron: true,
  },
  {
    name: "Comprehensive audit",
    Naxy: true,
    Chainlink: false,
    Tron: false,
  },
  {
    name: "Decentralized content distribution",
    Naxy: false,
    Chainlink: false,
    Tron: true,
  },
  {
    name: "IP protection",
    Naxy: true,
    Chainlink: false,
    Tron: false,
  },
  {
    name: "External API integration",
    Naxy: false,
    Chainlink: false,
    Tron: false,
  },
];

const FeatureComparison = () => {
  return (
    <div className="min-h-screen  text-white px-10 py-16 font-sans">
      <div className=" bg-[#071E1F] text-white px-10 py-16 font-sans rounded-lg">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-5xl font-bold mb-10">Features</h2>

          <div className="flex justify-center gap-8 mb-10 md:flex-row flex-col">
            <div className="bg-[#0E2A2F] p-6 rounded-xl text-center w-44">
              <img
                src="/Logo-CO9HK8uL.svg"
                alt="Naxy"
                className="mx-auto mb-3 w-10 h-10 md:w-16 md:h-16"
              />
              <p className="text-sm md:text-xl font-semibold">Naxy</p>
            </div>
            <div className="bg-[#0E2A2F] p-6 rounded-xl text-center w-44">
              <img
                src="/chainlink-CAuMJoxV.svg"
                alt="Chainlink"
                className="mx-auto mb-3 w-8 h-8 md:w-16 md:h-16"
              />
              <p className="text-sm md:text-xl font-semibold">Chainlink</p>
            </div>
            <div className="bg-[#0E2A2F] p-6 rounded-xl text-center w-44">
              <img
                src="/tron-dyhEczKm.svg"
                alt="Tron"
                className="mx-auto mb-3 w-10 h-10 md:w-16 md:h-16"
              />
              <p className="text-sm md:text-xl font-semibold">Tron</p>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {features.map((feature, idx) => {
            const isColored = idx % 2 === 0; // only apply background to every other row
            return (
              <div key={idx} className="flex rounded-2xl overflow-hidden">
                <div
                  className={`${
                    isColored ? "bg-[#0D5E4A]" : "bg-transparent"
                  } w-1/2 px-6 py-4 flex items-center`}
                >
                  <p className="text-base font-semibold">{feature.name}</p>
                </div>
                <div
                  className={`${
                    isColored ? "bg-[#1A6667]" : "bg-transparent"
                  } w-2/3 px-6 py-4 flex justify-around items-center`}
                >
                  {["Naxy", "Chainlink", "Tron"].map((key) => (
                    <span
                      key={key}
                      className={`text-2xl ${
                        feature[key] ? "text-white" : "text-white opacity-60"
                      }`}
                    >
                      {feature[key] ? "✓" : "✕"}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureComparison;

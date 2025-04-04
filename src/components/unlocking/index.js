import React from "react";

export default function Unlocking() {
  return (
    <div className="min-h-screen   text-white flex-col flex items-center justify-center p-10">
      <div className="grid md:grid-cols-2 gap-20 items-center max-w-6xl">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-mono">
            <span className="text-orange-500">sBTC:</span> Unlocking <br />
            Bitcoin by Satochain
          </h1>
          <ul className="mt-6 space-y-2 text-lg font-mono">
            <li className="flex items-center space-x-2 ">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>Trust-minimized</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>Decentralized</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
              <span>Censorship resistant</span>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://satochain.io/images/home/sbtc.png" // Replace with actual path
            alt="Blockchain Illustration"
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-20 items-center max-w-6xl pt-16">
        <div className="flex justify-center">
          <img
            src="https://satochain.io/images/home/earn-btc.png" // Replace with actual path
            alt="Blockchain Illustration"
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-orange-500"> Earn BTC </span> <br />
            by participating as validators
          </h1>
          <p className="font-mono text-lg mt-6">
            Hold and temporarily secure BTC, Satochains native currency, to
            bolster the networks security and consensus. Over 2000 $BTC have
            been allocated as consensus rewards
          </p>
        </div>

        {/* Right Image */}
      </div>
      <div className="mt-16">
        <img src="https://satochain.io/images/home/built.png" alt="Blockchain Illustration"   />
      </div>
      <h2 className="text-4xl md:text-6xl font-mono  mt-16">
         
      Build powerful apps,<br/> secured by Bitcoin
      </h2>
    </div>
  );
}

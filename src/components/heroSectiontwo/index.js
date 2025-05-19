"use client";

import React, { useState } from "react";
// import USDTDeposit from "../USDTDeposit";
// import AuthPageWrapper from "@/pages/AuthPageWrapper";

function HeroSectionTwo() {
  const [selectedCurrency, setSelectedCurrency] = useState("ETH");
  const [amount, setAmount] = useState("");
  const [tokenAmount, setTokenAmount] = useState(0);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [showAuthModal, setShowAuthModal] = useState(false);

  const ethToUSD = 3200;
  const usdtToUSD = 1;
  const satoPrice = 0.0007;

  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setAmount("");
    setTokenAmount(0);
  };

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setAmount(e.target.value);

    const usdValue =
      value * (selectedCurrency === "ETH" ? ethToUSD : usdtToUSD);
    setTokenAmount((usdValue / satoPrice).toFixed(0));
  };

  const handleSwapClick = () => {
    if (!isAuthenticated) {
      // setShowAuthModal(true);
    } else {
      alert("You are logged in. Proceed with deposit.");
    }
  };

  return (
    <>
      <div
        id="heroSection"
        className="min-h-screen flex flex-col items-center justify-center text-white"
      
      >
      

        <div className="flex items-center justify-center min-h-screen font-mono ">
          <div className="w-[350px] md:w-[500px] lg:w-[500px] xl:w-[600px] bg-[#262b2d] text-white rounded-xl p-6 shadow-lg">
            <h2 className="text-center text-2xl font-bold">
              Buy Satochain Now
            </h2>
            <p className="text-center text-sm text-gray-400">
              Until price increase
            </p>

            <div className="border border-gray-600 rounded-lg p-3 mt-4 flex justify-between">
              <div>
                <p className="text-xs text-gray-400">Listing Date</p>
                <p className="font-semibold">June 10, 2025</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Listing Price</p>
                <p className="font-semibold">$0.100</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">Current Price:</p>
              <p className="text-lg font-semibold">$0.002</p>
              <div className="w-full h-1 bg-gray-700 rounded mt-2"></div>
            </div>
            <p className="mt-4 text-center text-lg md:text-2xl font-bold">
              Raised $387,972
            </p>
            <p className="text-center text-sm">
              1 $SATO ={" "}
              <span className="text-orange-500 font-semibold">$0.0009</span>
            </p>

            {/* Show only after login */}
            {/* {isAuthenticated && <USDTDeposit />} */}

            <div className="flex justify-center gap-4 mt-4">
              <button
                className={`flex items-center gap-2 px-8 py-2 rounded-full ${
                  selectedCurrency === "ETH" ? "bg-orange-500" : "bg-gray-800"
                }`}
                onClick={() => handleCurrencySelect("ETH")}
              >
                <img
                  src="https://cdn.freelogovectors.net/wp-content/uploads/2020/03/ethereum-logo.png"
                  alt="ETH"
                  className=" w-5 h-5 bg-white rounded-full p-1"
                />
                ETH
              </button>
              <button
                className={`flex items-center gap-2 px-8 py-2 rounded-full ${
                  selectedCurrency === "USDT" ? "bg-orange-500" : "bg-gray-800"
                }`}
                onClick={() => handleCurrencySelect("USDT")}
              >
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/tether-usdt-coin-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cryptocurrency-pack-science-technology-icons-6044470.png"
                  alt="USDT"
                  className="w-5 h-5"
                />
                USDT
              </button>
            </div>

            <p className="text-center text-sm text-gray-400 mt-2">
              {selectedCurrency} Balance: 0.00
            </p>

            <div className="mt-4 flex justify-between items-center gap-2">
              {/* Input for ETH/USDT */}
              <div>
                <p className="text-sm text-gray-400">
                  Pay with {selectedCurrency}
                </p>
                <div className="flex items-center border border-gray-600 rounded-lg px-4 py-2">
                  <input
                    type="number"
                    placeholder="0"
                    value={amount}
                    onChange={handleAmountChange}
                    className="bg-transparent w-[6rem] md:w-[10rem] outline-none text-white"
                  />
                  <span>
                    <img
                      src={
                        selectedCurrency === "ETH"
                          ? "https://cdn.freelogovectors.net/wp-content/uploads/2020/03/ethereum-logo.png"
                          : "https://cdn3d.iconscout.com/3d/premium/thumb/tether-usdt-coin-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cryptocurrency-pack-science-technology-icons-6044470.png"
                      }
                      alt={selectedCurrency}
                      className=" w-5 h-5 bg-white rounded-full p-1"
                    />
                  </span>
                </div>
              </div>

              {/* Output Satochain tokens */}
              <div>
                <p className="text-sm text-gray-400">Receive SATO</p>
                <div className="flex items-center border border-gray-600 rounded-lg px-4 py-2">
                  <input
                    type="text"
                    placeholder="0"
                    value={tokenAmount}
                    readOnly
                    className="bg-transparent w-[6rem] md:w-[10rem] outline-none text-white"
                  />
                  <span>
                    <img
                      src="https://satochain.io/images/minNft/chain.svg"
                      alt="SATO"
                      className="w-5 h-5"
                    />
                  </span>
                </div>
              </div>
            </div>

            <button
              // onClick={handleSwapClick}
              className="w-full bg-orange-500 text-white py-3 mt-4 rounded-lg font-semibold"
            >
              Swap
            </button>
          </div>
        </div>
      </div>

     
    </>
  );
}

export default HeroSectionTwo;

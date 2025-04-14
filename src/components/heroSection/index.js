"use client";

import React, { useState } from "react";
// import USDTDeposit from "../USDTDeposit";
// import AuthPageWrapper from "@/pages/AuthPageWrapper";

function HeroSection() {
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
            <h2 className="text-center text-3xl font-bold">
              Buy Satochain Now
            </h2>
            <p className="text-center text-sm text-gray-400">
              Until price increase
            </p>

            <div className="border border-gray-600 rounded-lg p-3 mt-4 flex justify-between">
              <div>
                <p className="text-xs text-gray-400">Listing Date</p>
                <p className="font-semibold">April 20, 2025</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Listing Price</p>
                <p className="font-semibold">$0.100</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-400">Current Price:</p>
              <p className="text-lg font-semibold">$0.0007</p>
              <div className="w-full h-1 bg-gray-700 rounded mt-2"></div>
            </div>

            <p className="mt-4 text-center text-lg font-bold">
              Raised $500,360
            </p>
            <p className="text-center text-sm">
              1 $SATO ={" "}
              <span className="text-orange-500 font-semibold">$0.0007</span>
            </p>        
          </div>
        </div>
      </div>
 
    </>
  );
}

export default HeroSection;

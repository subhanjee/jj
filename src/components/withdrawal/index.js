"use client";
import React, { useState } from "react";

const WithdrawUSDT = () => {
  const [amount, setAmount] = useState("");
  const [wallet, setWallet] = useState("");
  const handleConfirm = () => {
    alert("Your withdrawal is successful. Please be patient.");
    // You can also reset the form or perform other actions here
  };
  // 🔥 Make sure this line is here
  const isFormValid = amount && wallet;

  return (
    <div className="  rounded-lg text-white space-y-4 shadow-lg  font-mono">
      <div className="flex justify-between items-center text-sm">
        <label className="text-gray-400 font-medium  ">Withdraw USDT</label>
        <span className="text-gray-400">Available Balance: 0.000 USDT</span>
      </div>

      <div className="relative">
        <input
          type="number"
          className="w-full bg-[#1e1e1e] border border-gray-600 rounded-lg px-4 py-3 pr-16 text-white placeholder-gray-500"
          placeholder="0.000"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-500 font-semibold text-sm">
          MAX
        </button>
      </div>

      <div className="text-sm text-gray-400 space-y-1">
        <p>
          Withdrawal Fee -- <span className="text-orange-500 ">USDT</span>
        </p>
        <p>
          Amount Actually Received --{" "}
          <span className="text-orange-500 ">USDT</span>
        </p>
      </div>

      <div className="bg-[#1e1e1e] border border-gray-600 rounded-lg  px-4 py-3 flex justify-between items-center cursor-pointer">
        <span className="flex items-center gap-2">
          <img
            src="https://alphawallet.com/wp-content/uploads/2021/02/BNB.png"
            alt="bnb"
            className="w-5 h-5"
          />{" "}
          Binance Smart Chain (BEP20)
        </span>
        <span className="text-gray-400">{">"}</span>
      </div>

      <div>
        <label className="text-sm text-gray-400">
          Your Wallet Address for Receiving Funds
        </label>
        <input
          type="text"
          className="w-full p-3 mt-1 text-white bg-[#1e1e1e] border border-gray-600 rounded-lg px-4 py-3"
          placeholder="Enter your wallet address"
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
        />
      </div>

      <button
        onClick={handleConfirm}
        disabled={!isFormValid}
        className={`w-full rounded-lg py-3 font-semibold transition-all ${
          isFormValid
            ? "bg-orange-500 text-white hover:bg-orange-300"
            : "bg-[#2a2a2a] text-gray-500 cursor-not-allowed"
        }`}
      >
        Confirm
      </button>
      <div className="grid grid-cols-5 gap-1 text-[.5rem] md:text-[1rem] text-gray-400 border-b border-gray-700 pb-2">
        <span>#</span>
        <span>USDT Deposited</span>
        <span>Transaction</span>
        <span>Receiving Wallet</span>
        <span>Status</span>
      </div>
    </div>
  );
};

export default WithdrawUSDT;

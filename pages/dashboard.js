// pages/dashboard.js
import React from "react";
// import DashboardCard from "@/components/DashboardCard";
// import ReferralTierBox from "@/components/ReferralTierBox";
import Sidebar from "@/src/components/sidebar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#071015] text-white">
      <Sidebar />

      <main className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-8">Dashboard</h2>

        {/* Supported Wallets */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Supported Wallet</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center p-4 bg-[#071a1a] rounded-lg border border-cyan-400">
              <img src="/meta.webp" alt="MetaMask" className="w-8 h-8 mr-3" />
              <span>MetaMask</span>
            </div>
            <div className="flex items-center p-4 bg-[#071a1a] rounded-lg border border-cyan-400">
              <img src="/trust.webp" alt="Trust Wallet" className="w-8 h-8 mr-3" />
              <span>Trust Wallet</span>
            </div>
            <div className="flex items-center p-4 bg-[#071a1a] rounded-lg border border-cyan-400">
              <img src="/wallet3.png" alt="Coinbase Wallet" className="w-8 h-8 mr-3" />
              <span>Coinbase Wallet</span>
            </div>
          </div>
        </div>

        {/* Referral Link */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Referral Link</h3>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {/* <DashboardCard title="Total Contributors" value="0" /> */}
            {/* <DashboardCard title="Total Referral Amount" value="0 NAXY" /> */}
            <div className="flex items-center p-4 bg-[#071a1a] rounded-lg border border-cyan-400">
              <input
                type="text"
                className="flex-1 bg-transparent border-none outline-none text-white mr-2"
                value="https://naxy.ai/"
                readOnly
              />
              <button className="px-4 py-2 rounded bg-cyan-400 text-black">Connect</button>
            </div>
          </div>
        </div>

        {/* Referral Tiers */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Referral Tiers</h3>
          <div className="grid grid-cols-3 gap-4">
            {/* <ReferralTierBox image="/tier1.png" tier="Tier 1" percentage="10%" /> */}
            {/* <ReferralTierBox image="/tier2.png" tier="Tier 2" percentage="5%" /> */}
            {/* <ReferralTierBox image="/tier3.png" tier="Tier 3" percentage="3%" /> */}
          </div>
        </div>

        {/* Referral Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Referral Details</h3>
          <div className="p-4 bg-[#071a1a] rounded-lg border border-cyan-400">
            <p>No data available</p>
          </div>
        </div>
      </main>
    </div>
  );
}

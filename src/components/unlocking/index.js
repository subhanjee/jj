"use client";

import { Copy } from "lucide-react";

export default function TokenContract() {
  const contractAddress = "0x864817e3071a1da8d2c6917ee1301e5a92e6b373";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    alert("Copied to clipboard!");
  };

  return (
    <div className=" py-16 px-6 text-white min-h-screen\ flex flex-col items-center">
      <h2 className="text-5xl font-bold mb-4">Token Contract</h2>
      <p className="text-gray-300 text-lg mb-12 text-center max-w-xl">
        Use the contract information below to add the Naxy token to your wallet.
      </p>

      <div className="flex flex-wrap gap-6 justify-center max-w-7xl">
        <div className="border border-[#7ce8ec] rounded-xl p-6  min-w-[300px] relative overflow-hidden">
          <h3 className="text-xl font-semibold mb-2">Contract Address</h3>
          <div className="flex items-center gap-2">
            <p className="text-gray-300 break-all">{contractAddress}</p>
            <button onClick={copyToClipboard}>
              <Copy size={18} className="text-gray-400 hover:text-white" />
            </button>
          </div>
        </div>

        <div className="border border-[#7ce8ec] rounded-xl p-6  min-w-[200px]">
          <h3 className="text-xl font-semibold mb-2">Token Name</h3>
          <p className="text-gray-300">Naxy</p>
        </div>

        <div className="border border-[#7ce8ec] rounded-xl p-6 min-w-[200px]">
          <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
          <p className="text-gray-300">Binance Smart Chain</p>
        </div>

        <div className="border border-[#7ce8ec] rounded-xl p-6  min-w-[200px]">
          <h3 className="text-xl font-semibold mb-2">Decimal</h3>
          <p className="text-gray-300">18</p>
        </div>

        <div className="border border-[#7ce8ec] rounded-xl p-6  min-w-[200px]">
          <h3 className="text-xl font-semibold mb-2">Token Symbol</h3>
          <p className="text-gray-300">NAXY</p>
        </div>
      </div>
    </div>
  );
}

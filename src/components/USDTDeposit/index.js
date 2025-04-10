'use client';

import { useState } from 'react';
import { Copy, QrCode } from 'lucide-react';
import QRCode from 'react-qr-code';

export default function USDTDeposit() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const depositAddress = '0x864817e3071a1da8d2c6917ee1301e5a92e6b373';

  const handleCopy = () => {
    navigator.clipboard.writeText(depositAddress);
    alert('Address copied to clipboard!');
  };

  return (
    <div className=" text-white flex justify-center items-start ">
      <div className="w-full rounded-xl  p-6 space-y-6">
        {/* Tabs */}
        <div className="flex space-x-4">
          {['Deposit USDT', 'Withdraw USDT', 'Reward'].map((tab, i) => (
            <button
              key={tab}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                i === 0
                  ? 'bg-orange-500 text-white'
                  : 'bg-[#3b3f42] hover:bg-[#505458]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Network Selector */}
        <div className="space-y-2">
          <p className="text-sm text-gray-300">Select Network</p>
          <div className="bg-[#3b3f42] flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer">
            <div className="flex items-center gap-3">
              <img
                src="https://alphawallet.com/wp-content/uploads/2021/02/BNB.png"
                alt="bnb"
                className="w-5 h-5"
              />
              <span className="font-semibold">Binance Smart Chain (BEP20)</span>
            </div>
            <span className="text-gray-400">{'>'}</span>
          </div>
        </div>

        {/* Deposit Address */}
        <div className="space-y-2">
          <p className="text-sm text-gray-300">Your Deposit Address</p>
          <div className="flex items-center justify-between bg-[#1e1e1e] border border-gray-600 rounded-lg px-4 py-3">
            <span className="text-sm break-all text-orange-500">
              {depositAddress}
            </span>
            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                className="bg-orange-500 text-black px-2 py-1 rounded-md text-xs hover:bg-orange-500"
              >
                <Copy size={14} />
              </button>
              <button
                onClick={() => setIsQRModalOpen(true)}
                className="bg-orange-500 text-black px-2 py-1 rounded-md text-xs hover:bg-orange-500"
              >
                <QrCode size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <p className="text-yellow-400 text-sm leading-relaxed">
          You can transfer a minimum of <strong>1 USDT</strong> (or more) to the
          specified address on the Binance Smart Chain (BEP20). The system will
          automatically detect the transaction and credit the amount to your
          account. This process usually takes a few minutes, but may vary depending
          on network conditions.
        </p>

        {/* Deposit History */}
        <div>
          <h3 className="text-md font-semibold mb-2 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h11M9 21V3M16 17l5-5-5-5"
              />
            </svg>
            Deposit History
          </h3>
          <div className="grid grid-cols-5 gap-2 text-sm text-gray-400 border-b border-gray-700 pb-2">
            <span>#</span>
            <span>USDT Deposited</span>
            <span>Transaction Hash</span>
            <span>Receiving Wallet</span>
            <span>Status</span>
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      {isQRModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-lg p-6 w-80 text-center relative">
            <h2 className="text-lg font-bold mb-4">Scan QR Code</h2>
            <QRCode value={depositAddress} size={200} />
            <p className="mt-3 text-sm break-words">{depositAddress}</p>
            <button
              onClick={() => setIsQRModalOpen(false)}
              className="absolute top-2 right-2 text-sm px-2 py-1 rounded-full bg-red-500 text-white hover:bg-red-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

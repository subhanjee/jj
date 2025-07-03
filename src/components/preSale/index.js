import { useState } from 'react';

export default function Home() {
  const rates = {
    ETH: 0.004,
    BNB: 0.004,
    USDC: 0.004,
    USDT: 0.004,
  };

  const [selectedCurrency, setSelectedCurrency] = useState('ETH');
  const [payAmount, setPayAmount] = useState('');
  const [naxyAmount, setNaxyAmount] = useState('');

  const handleCurrencyClick = (currency) => {
    setSelectedCurrency(currency);
    setPayAmount('');
    setNaxyAmount('');
  };

  const handlePayChange = (value) => {
    const num = parseFloat(value);
    setPayAmount(value);
    if (!isNaN(num)) {
      setNaxyAmount((num / rates[selectedCurrency]).toFixed(4));
    } else {
      setNaxyAmount('');
    }
  };

  return (
    <div className="min-h-screen  text-white px-6 lg:px-16 py-12 flex flex-col lg:flex-row items-center justify-center gap-10">

      {/* Left: Buy $NAXY */}
      <div className=" border-2 border-[#7ce8eb] rounded-3xl p-6 w-full max-w-lg shadow-lg">
        <h2 className="text-5xl font-bold mb-2 text-center">Buy $NAXY</h2>
        <p className="text-center font-bold text-2xl text-gray-300 mb-4">Next Price = 0.005 USD</p>
        <p className="text-center font-bold text-2xl mb-4">Next Round Starts in</p>

        <div className="flex justify-center gap-4 mb-4">
          {["Days", "Hours", "Min", "Sec"].map((label) => (
            <button
              key={label}
              className="bg-gradient-to-br from-[#7ce8eb] to-[#136673] text-white rounded-lg px-5 py-2 md:px-8 md:py-3 text-lg font-semibold"
            >
              {label}
            </button>
          ))}
        </div>

        <p className="text-center mb-2">
          USDT RAISED: <span className="font-bold text-cyan-300">$107592.1853</span>
        </p>
        <div className="w-full h-2 bg-white/20 rounded mb-4">
          <div className="h-full bg-white rounded w-[75%]" />
        </div>

        <p className="text-center text-sm mb-2">Your purchased $NAXY: 0.0000</p>

        <div className="text-center text-sm text-gray-400 mb-4">
          1 $NAXY = <span className="text-white font-semibold">$0.004</span>
        </div>

        {/* Currency Buttons */}
        <div className="flex justify-between gap-2 mb-4">
          {["ETH", "BNB", "USDC", "USDT"].map((coin) => (
            <button
              key={coin}
              className={`${
                selectedCurrency === coin
                  ? 'bg-gradient-to-br from-[#7ce8eb] to-[#136673]'
                  : 'border border-cyan-500'
              } text-white px-4 py-2 rounded-md w-full font-semibold`}
              onClick={() => handleCurrencyClick(coin)}
            >
              {coin}
            </button>
          ))}
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-4 mb-4">
          <div>
            <label className="block text-sm mb-1">{selectedCurrency} You Pay:</label>
            <input
              type="number"
              min="0"
              value={payAmount}
              onChange={(e) => handlePayChange(e.target.value)}
              className="w-full px-4 py-2 rounded bg-[#06262e] text-white border border-white/20 focus:outline-none"
              placeholder="0.0"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">$NAXY You Receive:</label>
            <input
              type="text"
              readOnly
              value={naxyAmount}
              className="w-full px-4 py-2 rounded bg-[#06262e] text-white border border-white/20 focus:outline-none"
              placeholder="0.0"
            />
          </div>
        </div>

        {/* Connect Buttons */}
        <div className="flex flex-col gap-4">
          <button className="bg-[#7ce8ec] text-black py-2 rounded-md font-semibold">
            Connect
          </button>
          <button className="bg-[#7ce8ec] text-black py-2 rounded-md font-semibold">
            Connect
          </button>
        </div>
      </div>

      {/* Right Text CTA */}
      <div className="flex-1 max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">Invest in Naxy, Today</h2>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Unlock the potential of decentralized finance with $NAXY. Join thousands of investors in a promising new digital currency that's shaping the future of financial transactions. Don’t miss out on this opportunity to be a part of the next big thing in crypto.
        </p>
        <button className="px-6 py-2 bg-white text-black rounded-full font-semibold">
          White Paper
        </button>
      </div>
    </div>
  );
}

"use client";
import React from "react";
const data = [
  {
    email: "ai***1@gmail.com",
    auctioned: "20.350",

    time: "2 sec ago",
  },
  {
    email: "ui***bc@gmail.com",
    auctioned: "167.95",

    time: "4 sec ago",
  },
  {
    email: "rp***n@gmail.com",
    auctioned: "158.761",

    time: "5 min ago",
  },
  {
    email: "dq***4@gmail.com",
    auctioned: "54.995",

    time: "10 min ago",
  },
  {
    email: "bi***o@gmail.com",
    auctioned: "594.65",

    time: "20 min ago",
  },
  {
    email: "mu***1@gmail.com",
    auctioned: "20.000",

    time: "30 min ago",
  },
  {
    email: "rt***n@gmail.com",
    auctioned: "20,000.00",

    time: "50 min ago",
  },
  {
    email: "kl***o@gmail.com",
    auctioned: "830.36 ",

    time: "1 hour ago",
  },
  {
    email: "qw***e@outlook.com",
    auctioned: "81.264",

    time: "2 hour ago",
  },
];

export default function InvestingTable() {
  return (
    <div className="overflow-x-auto p-4 text-white bg-[#262b2d] border border-gray-600 rounded-2xl shadow-2xl ">
      <h1 className="font-mono text-2xl text-center font-bold">Recent Transactions</h1>
      <table className="min-w-[20rem] md:min-w-[20rem] lg:min-w-[20rem] xl:min-w-[40rem]   ">
        <thead className="  text-sm">
          <tr>
            <th className="px-4 py-3 text-left border-b border-gray-600">#</th>
            <th className="px-4 py-3 text-left border-b border-gray-600">
              Investing Users
            </th>
            <th className="px-4 py-3 text-left border-b border-gray-600">
              USDT Deposited{" "}
            </th>
            <th className="px-4 py-3 text-left border-b border-gray-600">
              Time
            </th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {data.map((item, idx) => (
            <tr key={idx} className="hover:bg-gray-700 transition duration-150">
              <td className="px-4 py-3 border-b border-gray-700 text-gray-400">
                {idx + 1}
              </td>
              <td className="px-4 py-3 border-b border-gray-700">
                {item.email}
              </td>
              <td className="px-4 py-3 text-orange-500 border-b border-gray-700">
                {item.auctioned}
              </td>
              <td className="px-4 py-3 text-gray-400 border-b border-gray-700">
                {item.time}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

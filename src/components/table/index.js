"use client";
import React from "react";
const data = [
  {
    email: "ao***1@gmail.com",
    auctioned: "2000.39",

    time: "2 sec ago",
  },
  {
    email: "uv***bc@gmail.com",
    auctioned: "230.67",

    time: "4 sec ago",
  },
  {
    email: "rr***n@gmail.com",
    auctioned: "906.26",

    time: "5 min ago",
  },
  {
    email: "dw***4@gmail.com",
    auctioned: "5000.49",

    time: "10 min ago",
  },
  {
    email: "fg***o@gmail.com",
    auctioned: "894.15",

    time: "20 min ago",
  },
  {
    email: "mt***1@gmail.com",
    auctioned: "80.30",

    time: "30 min ago",
  },
  {
    email: "rv***n@gmail.com",
    auctioned: "60,500.00",

    time: "50 min ago",
  },
  {
    email: "ku***o@gmail.com",
    auctioned: "330.16",

    time: "1 hour ago",
  },
  {
    email: "er***e@outlook.com",
    auctioned: "91.26",

    time: "2 hour ago",
  },
];

export default function InvestingTable() {
  return (
    <div className="overflow-x-auto p-4 text-white bg-[#262b2d] border border-gray-600 rounded-2xl shadow-2xl ">
      <h1 className="font-mono text-2xl md:text-4xl text-center font-bold mb-2">Recent Transactions</h1>
      <table className="w-[10rem] md:w-[20rem] lg:w-[20rem] xl:w-[40rem]   ">
        <thead className="  text-[.7rem] md:text-[1rem]">
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
        <tbody  className="  text-[.7rem] md:text-[1rem]">
          {data.map((item, idx) => (
            <tr key={idx} className="hover:bg-gray-700 transition duration-150">
              <td className="px-4 py-3 border-b border-gray-700 text-gray-400">
                {idx + 1}
              </td>
              <td className="px-4 py-3 border-b border-gray-700">
                {item.email}
              </td>
              <td className="px-4 py-3 text-green-500 border-b border-gray-700">
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

'use client';
import React from 'react';

const roadmapData = [
  {
    quarter: 'Q3 2024',
    items: [
      'Project Launch',
      'Token Launch',
      'Website Launch',
      'Whitepaper Publication',
    ],
  },
  {
    quarter: 'Q4 2024',
    items: [
      'Platform Beta Start',
      'User Onboarding',
      'Community Building',
      'Initial Feedback Collection',
    ],
  },
  {
    quarter: 'Q1 2025',
    items: [
      'Beta Feedback Integration',
      'Security Audits',
      'Partnership Announcements',
      'Enhanced User Support',
    ],
  },
  {
    quarter: 'Q2 2025',
    items: [
      'Full Platform Launch',
      'Marketing Campaign',
      'First Exchange Listings',
      'User Training Programs',
    ],
  },
  {
    quarter: 'Q3 2025',
    items: [
      'Feature Enhancements',
      'Mobile App Release',
      'Global Outreach',
      'Developer Tools Release',
    ],
  },
  {
    quarter: 'Q4 2025',
    items: [
      'Advanced Analytics Integration',
      'Additional Exchange Listings',
      'Community Events',
      'Strategic Partnerships Expansion',
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="bg-[#031419] text-white py-16 px-4">
      <div className="max-w-[1400px] mx-auto">
        {/* Headings with connectors */}
        <div className="hidden md:flex justify-between items-end relative px-4 md:px-8">
          {roadmapData.map((phase, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center">
              <div className="bg-[#65e0db] text-[#031419] font-semibold rounded-full px-6 py-2 text-sm sm:text-base shadow-md z-10">
                {phase.quarter}
              </div>
              <div className="h-6 w-1 bg-white mt-1" />
            </div>
          ))}
          {/* Horizontal timeline */}
          <div className="absolute top-[48px] left-0 right-0 h-[2px] bg-white/10 z-0" />
        </div>

        {/* For Mobile: stacked timeline */}
        <div className="md:hidden flex flex-col gap-10 items-center text-center mb-10">
          {roadmapData.map((phase, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-[#65e0db] text-[#031419] font-semibold rounded-full px-6 py-2 text-sm shadow-md z-10">
                {phase.quarter}
              </div>
              <div className="h-6 w-1 bg-white mt-1 mb-4" />
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 px-4 md:px-8">
          {roadmapData.map((phase, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-xl border border-[#65e0db] h-full"
            >
              <ul className="list-decimal list-inside text-white/90 space-y-3 text-sm sm:text-base">
                {phase.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

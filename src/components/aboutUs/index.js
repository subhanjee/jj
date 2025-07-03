'use client';
import React from 'react';

export default function AboutNaxy() {
  return (
    <section className="relative bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="/aboutus.jpg"
          alt="About Naxy Background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl px-6 py-24 mx-auto">
        <h2 className="text-5xl font-bold mb-6">About Naxy</h2>
        <p className="text-lg leading-8 mb-8 max-w-3xl">
          NAXY is a platform that aims to transform the protection and management of intellectual
          property. Through utilizing cutting-edge AI technology for verifying content and
          blockchain for establishing records, NAXY presents a strong solution to protect your
          artistic creations. Our goal is to equip creators, artists, and visionaries with the
          resources to maintain the authenticity and safety of their assets in today's digital
          landscape.
        </p>
        <button className="bg-cyan-300 text-black px-6 py-3 rounded-full text-base font-semibold hover:bg-cyan-400 transition">
          Learn More
        </button>
      </div>
    </section>
  );
}

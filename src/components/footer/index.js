'use client';
import React from 'react';
import {
  Twitter,
  Youtube,
  Send, // for Telegram
  FileText, // for Medium
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#041725]  text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src="/Logo-CO9HK8uL.svg" alt="Naxy Logo" className="h-16 w-16" />
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-10 text-sm md:text-base">
          <div>
            <h4 className="font-semibold mb-2">Quick Link</h4>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1 text-gray-300">
              <li><a href="#">Whitepaper</a></li>
            </ul>
          </div>
        </div>

        {/* Email */}
        <div className="flex-shrink-0">
          <h4 className="text-xl md:text-2xl font-semibold">info@naxy.ai</h4>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6 text-sm text-gray-300">
        <p>©2024 NAXY. All rights reserved</p>
        <div className="flex space-x-4 mt-4 md:mt-0 text-white">
          <a href="#" aria-label="Medium" className="hover:text-teal-300 transition">
            <FileText size={20} />
          </a>
          <a href="#" aria-label="Telegram" className="hover:text-teal-300 transition">
            <Send size={20} />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-teal-300 transition">
            <Youtube size={20} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-teal-300 transition">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

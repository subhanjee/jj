"use client";

import Link from "next/link";
import { useState } from "react";
// import { ChevronDown, Download, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-black py-3 px-6   flex items-center justify-between shadow-lg shadow-white">
      {/* Left - Logo */}
      <div className="flex items-center space-x-2 ">
        <img
          src="https://satochain.io/images/logo.svg"
          alt="Athene"
          className="h-10 w-10"
        />
        <span className="text-white font-semibold text-xl">Satochain</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6 text-white font-medium">
      <a href="#heroSection" className="text-orange-500 cursor-pointer">$Presale</a>
        <a className="hover:text-orange-500 cursor-pointer">Feature</a>
        <a className="hover:text-orange-500 cursor-pointer">Tokenomics</a>
        <a className="hover:text-orange-500 cursor-pointer">Roadmap</a>
        <a className="hover:text-orange-500 cursor-pointer">FAQs</a>
        <a className="hover:text-orange-500 cursor-pointer">Bridge</a>

        {/* Dropdown */}
        <li
          className="relative cursor-pointer flex items-center"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          {/* More <ChevronDown className="ml-1 h-4 w-4" /> */}
          {isDropdownOpen && (
            <ul className="absolute left-0 top-full mt-2 w-40 bg-[#12291F] text-white rounded-md shadow-lg">
              <li className="px-4 py-2 hover:bg-[#1A3A2A]">Option 1</li>
              <li className="px-4 py-2 hover:bg-[#1A3A2A]">Option 2</li>
            </ul>
          )}
        </li>
      </ul>

      {/* CTA Button */}
      <Link href="AuthPageWrapper">
      <button className="hidden md:flex bg-orange-500 text-white px-5 py-2 rounded-full flex items-center font-medium hover:bg-orange-500">
        Join Satochain
      </button>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? "X" : "Menu"}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0D1E16] p-6   flex flex-col space-y-4 text-white border-t border-[#1A3A2A] md:hidden">
              <a className="text-orange-500 cursor-pointer">$Presale</a>
        <a className="hover:text-orange-500 cursor-pointer">Feature</a>
        <a className="hover:text-orange-500 cursor-pointer">TOKENOMICS</a>
        <a className="hover:text-orange-500 cursor-pointer">ROADMAP</a>
        <a className="hover:text-orange-500 cursor-pointer">FAQ</a>

          {/* Dropdown for Mobile */}
          <div className="relative">
            <button
              className="flex items-center hover:text-orange-500 w-full"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              {/* More <ChevronDown className="ml-1 h-4 w-4" /> */}
            </button>
            {isDropdownOpen && (
              <div className="mt-2 pl-4 space-y-2">
                <a href="#" className="block hover:text-[#00FFAA]">
                  Option 1
                </a>
                <a href="#" className="block hover:text-[#00FFAA]">
                  Option 2
                </a>
              </div>
            )}
          </div>

          {/* CTA Button in Mobile */}
          <button className="bg-orange-500 text-[#0D1E16] px-5 py-2  rounded-full flex justify-center items-center font-medium hover:bg-[#00D996]">
            Join Satochain
          </button>
        </div>
      )}
    </nav>
  );
}

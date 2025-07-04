"use client";

import Link from "next/link";
import { useState } from "react";
// import { ChevronDown, Download, Menu, X } from "lucide-react";

export default function Navbar({ onJoinClick }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#02131a] py-5 px-6   flex items-center justify-between ">
      {/* Left - Logo */}
      <div className="flex items-center space-x-2 ">
        <img
          src="/Logo-CO9HK8uL.svg"
          alt="Athene"
          className="h-15 w-15"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6 text-white font-medium">
        <a href="#heroSection" className="text-[#7ce8eb] cursor-pointer">
          Home
        </a>
        <a
          href="#featuresSection"
          className="hover:text-[#7ce8eb] cursor-pointer"
        >
          About Us
        </a>
        <a href="#tokenomics" className="hover:text-[#7ce8eb] cursor-pointer">
          Services
        </a>
        <a href="#roadmap" className="hover:text-[#7ce8eb] cursor-pointer">
          Contact Us
        </a>
        <a href="/dashboard" className="hover:text-[#7ce8eb] cursor-pointer">
          Dashboard
        </a>
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

      <button
        onClick={onJoinClick}
        className="hidden md:flex bg-[#7ce8eb] text-black px-10 py-3 rounded-full flex items-center font-medium hover:bg-[#b6e5e7]"
      >
        Join NAXY
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          "X"
        ) : (
          <img
            src="https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png"
            alt="abc"
            className="w-10 h-10 bg-[#7ce8eb] p-2 rounded-md"
          />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-24 left-0 w-full bg-[#02131a] p-6   flex flex-col space-y-4 text-white border-t border-[#1A3A2A] md:hidden">
             <a href="#heroSection" className="text-[#7ce8eb] cursor-pointer">
          Home
        </a>
        <a
          href="#featuresSection"
          className="hover:text-[#7ce8eb] cursor-pointer"
        >
          About Us
        </a>
        <a href="#tokenomics" className="hover:text-[#7ce8eb] cursor-pointer">
          Services
        </a>
        <a href="#roadmap" className="hover:text-[#7ce8eb] cursor-pointer">
          Contact Us
        </a>
        <a href="#faqs" className="hover:text-[#7ce8eb] cursor-pointer">
          Dashboard
        </a>

          {/* Dropdown for Mobile */}
          <div className="relative">
            <button
              className="flex items-center hover:text-[#7ce8eb] w-full"
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
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onJoinClick();
            }}
            className="bg-[#7ce8eb] text-black px-5 py-2  rounded-full flex justify-center items-center font-medium hover:bg-[#b6e5e7]"
          >
            Join NAXY
          </button>
        </div>
      )}
    </nav>
  );
}

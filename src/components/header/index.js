"use client";

import { useState } from "react";
// import { ChevronDown, Download, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#0D1E16] py-3 px-6 rounded-full flex items-center justify-between border border-[#1A3A2A]">
      {/* Left - Logo */}
      <div className="flex items-center space-x-4">
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/ethena-cryptocurrency-3d-icon-download-in-png-blend-fbx-gltf-file-formats--ena-digital-crypto-coins-v1-pack-science-technology-icons-9544597.png?f=webp" alt="Athene" className="h-10 w-10" />
        <span className="text-white font-semibold text-lg">ATHENE</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-6 text-white font-medium">
        <li className="text-[#00FFAA] cursor-pointer">Home</li>
        <li className="hover:text-[#00FFAA] cursor-pointer">Roadmap</li>
         <li className="hover:text-[#00FFAA] cursor-pointer">Partner & Community</li>
        <li className="hover:text-[#00FFAA] cursor-pointer">About Us</li>

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
      <button className="hidden md:flex bg-[#00FFAA] text-[#0D1E16] px-5 py-2 rounded-full flex items-center font-medium hover:bg-[#00D996]">
      Join Athene Apps
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? "X" :  "Menu"}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0D1E16] p-5 flex flex-col space-y-4 text-white border-t border-[#1A3A2A] md:hidden">
          <a href="#" className="hover:text-[#00FFAA]">Home</a>
          <a href="#" className="hover:text-[#00FFAA]">Roadmap</a>
           <a href="#" className="hover:text-[#00FFAA]">Partner & Community</a>
          <a href="#" className="hover:text-[#00FFAA]">About Us</a>
          
          {/* Dropdown for Mobile */}
          <div className="relative">
            <button
              className="flex items-center hover:text-[#00FFAA] w-full"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              {/* More <ChevronDown className="ml-1 h-4 w-4" /> */}
            </button>
            {isDropdownOpen && (
              <div className="mt-2 pl-4 space-y-2">
                <a href="#" className="block hover:text-[#00FFAA]">Option 1</a>
                <a href="#" className="block hover:text-[#00FFAA]">Option 2</a>
              </div>
            )}
          </div>

          {/* CTA Button in Mobile */}
          <button className="bg-[#00FFAA] text-[#0D1E16] px-5 py-2  rounded-full flex justify-center items-center font-medium hover:bg-[#00D996]">
            Join Athene Apps
          </button>
        </div>
      )}
    </nav>
  );
}

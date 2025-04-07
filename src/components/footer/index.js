"use client";

// import { DiscordLogoIcon } from "@radix-ui/react-icons";
// import { SiX } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600 text-white p-10 overflow-hidden">
      {/* Custom notched corners */}
      <div className="absolute inset-x-0 top-0 h-10 bg-black">
        <div className="w-full h-10 bg-[linear-gradient(to_right,transparent_49%,black_49%,black_51%,transparent_51%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
        
          <h1 className="text-3xl md:text-5xl font-bold font-mono p-5">
            Make Bitcoin Mass Adopt
          </h1>
          <p className="text-sm md:text-base">
            Engage, collaborate, and connect with thousands of Satochainer globally
          </p>
        </div>

        {/* Right Section - Icons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="bg-gradient-to-br from-orange-600 to-yellow-400 p-3 rounded-lg shadow-md"
          >
            {/* <SiX className="text-white text-xl" /> */}
          </a>
          <a
            href="#"
            className="bg-gradient-to-br from-orange-600 to-yellow-400 p-3 rounded-lg shadow-md"
          >
            {/* <DiscordLogoIcon className="text-white w-5 h-5" /> */}
          </a>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="relative z-10 mt-10 text-sm flex flex-col md:flex-row justify-between items-center border-t border-white/20 pt-4 gap-4">
        <p>© 2025 Satochain. All right reserved
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">
            Privacy policy
          </a>
          <a href="#" className="hover:underline">
            Explorer
          </a>
          <a href="#" className="hover:underline">
            Satochain Bounty Program
          </a>
        </div>
      </div>
    </footer>
  );
}

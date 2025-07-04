// components/Sidebar.js
import React from "react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#071a1a] p-5 flex flex-col">
      <div className="flex items-center mb-10">
        <img src="/Logo-CO9HK8uL.svg" alt="Logo" className="w-12 h-12 mr-3" />
        <h1 className="text-xl font-bold">Naxy</h1>
      </div>
      <nav className="flex flex-col gap-5">
        <Link href="/" className="flex items-center gap-2 hover:text-cyan-400">
          🏠 Home
        </Link>
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-cyan-400"
        >
          📊 Dashboard
        </Link>
        <Link
          href="/about"
          className="flex items-center gap-2 hover:text-cyan-400"
        >
          ℹ️ About Us
        </Link>
        <Link
          href="/services"
          className="flex items-center gap-2 hover:text-cyan-400"
        >
          💼 Services
        </Link>
        <Link
          href="/referral"
          className="flex items-center gap-2 hover:text-cyan-400"
        >
          👥 Referral
        </Link>
        <Link
          href="/contact"
          className="flex items-center gap-2 hover:text-cyan-400"
        >
          📞 Contact Us
        </Link>
      </nav>
    </aside>
  );
}

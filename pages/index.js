import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import LandingPage from "@/src/pages/landingPage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
    // className="bg-[#262b2d] "
      className={`bg-[#181818] min-h-screen * ${geistSans.variable} ${geistMono.variable} font-sans`}
    >
    <LandingPage/>
   
    </div>
  );
}

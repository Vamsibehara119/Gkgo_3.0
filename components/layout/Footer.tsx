"use client";
import { Facebook, Youtube, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    /* bg-[#0A0A0A] provides the deep black, w-full ensures it hits both screen edges */
    <footer className="bg-[#0A0A0A] text-white py-12 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-8">
        
        {/* Navigation & Info Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 text-[11px] font-medium text-gray-400">
          <span>© GK Insurance</span>
          <span className="text-gray-700">|</span>
          <span>All Rights Reserved</span>
          <span className="text-gray-700">|</span>
          <span className="text-white font-bold">gkginfo@gkco.com</span>
          <span className="text-gray-700">|</span>
          <span>888-429-5GKI</span>
          <span className="text-gray-700">|</span>
          <span className="text-white font-bold cursor-pointer hover:text-[#EE1C25] transition-colors">Terms of use</span>
          <span className="text-gray-700">|</span>
          <span className="cursor-pointer hover:text-white transition-colors">Privacy Notice</span>
        </div>

        {/* Social Icons matching your footer screenshot */}
        <div className="flex items-center gap-8 text-white">
          <Facebook className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
          <Youtube className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
          <Instagram className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
          <Twitter className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
        </div>

        {/* Brand Attribution at the bottom */}
        <div className="text-[10px] text-gray-500 font-medium tracking-wide">
          Site created by <span className="font-bold text-white">zipteq</span>
        </div>
      </div>
    </footer>
  );
}
"use client";
import { Bell, Menu, Search } from 'lucide-react';
import { useState } from 'react';
import MobileDrawer from './MobileDrawer';

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <header className="bg-white border-b border-zinc-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="bg-[#EE1C25] text-white font-black px-2 py-1 rounded text-xl italic">GK</div>
          <div className="hidden lg:block leading-tight">
            <p className="font-bold text-zinc-800 text-sm">GraceKennedy</p>
            <p className="text-[10px] text-zinc-500 font-medium">General Insurance</p>
          </div>
        </div>

        {/* Desktop Navigation - Exact match to Image 1 */}
        <nav className="hidden lg:flex items-center gap-2">
          <a href="#" className="bg-[#EE1C25] text-white px-6 py-2.5 rounded-lg font-bold text-sm">Home</a>
          {['Products', 'Payments', 'Claims', 'Settings', 'Log Out'].map((item) => (
            <a key={item} href="#" className="text-zinc-500 px-4 py-2 font-bold text-sm hover:text-zinc-900">{item}</a>
          ))}
        </nav>

        {/* User Profile & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer">
            <Bell className="w-6 h-6 text-[#EE1C25]" strokeWidth={2.5} />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#EE1C25] rounded-full border-2 border-white"></span>
          </div>
          
          <div className="flex items-center gap-2 bg-zinc-50 pl-1 pr-4 py-1.5 rounded-full border border-zinc-100">
            <div className="w-8 h-8 bg-[#EE1C25] rounded-full flex items-center justify-center text-white text-xs font-bold">J</div>
            <span className="hidden sm:block text-[13px] font-bold text-zinc-700 italic">Welcome back, Jane Doe</span>
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsDrawerOpen(true)}>
            <Menu className="w-7 h-7 text-zinc-600" />
          </button>
        </div>
      </div>
      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </header>
  );
}
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Install lucide-react if you haven't

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 mb-6 w-full transition-all duration-300 border-b border-white/20 bg-transparent backdrop-blur-md">
      
      <div className="bg-[#8DC645] flex flex-col sm:flex-row justify-between items-center w-full px-4 py-1 sm:h-[2.5rem] text-xs md:text-sm text-white font-medium">
        <div className="flex items-center justify-center gap-2 text-center">
          <Image src="/speak.png" alt="Announcement" width={18} height={18} />
          <Link
            href="/"
            className="underline decoration-1 underline-offset-4 hover:opacity-80 transition-opacity"
          >
            No hidden fees | Scale your practice with clear pricing and package
          </Link>
          <Image src="/right-arrows.svg" alt="Arrow" width={16} height={16} className="hidden md:block" />
        </div>
        
        <div className="flex items-center gap-2 mt-1 sm:mt-0">
          <Image src="/phone.png" alt="Phone" width={14} height={14} />
          <h3>(855) 938-3272</h3>
        </div>
      </div>

      <div className="w-full px-4 md:px-8 py-4 flex items-center justify-between">
       
        <Link href="/" className="shrink-0">
          <Image 
            src="/healentra.png" 
            alt="Healentra Logo" 
            width={160} 
            height={40} 
            className="w-32 md:w-40 lg:w-48 object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center justify-center gap-8">
          <Link href="/" className="text-sm font-semibold text-[#2CA8E0] hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/" className="text-sm font-semibold text-white hover:text-[#2CA8E0] transition-colors">
            Join as doctor
          </Link>
          <Link href="/" className="text-sm font-semibold text-white hover:text-[#2CA8E0] transition-colors">
            About us
          </Link>
          <Link href="/" className="text-sm font-semibold text-white hover:text-[#2CA8E0] transition-colors">
            Blogs
          </Link>
          <Link href="/" className="text-sm font-semibold text-white hover:text-[#2CA8E0] transition-colors">
            Contact Us
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center justify-center rounded-lg bg-[#2CA8E0] w-10 h-10 hover:bg-blue-500 transition-colors"
          >
            <Image src="/bell.svg" alt="Notifications" width={20} height={20} />
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-lg border border-white px-4 py-2 hover:bg-white/10 transition-colors"
          >
            <Image src="/bell.svg" alt="User" width={18} height={18} className="brightness-0 invert" />
            <span className="text-white text-sm font-bold">Kiara</span>
          </Link>
        </div>

        <button 
          className="lg:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#001439] border-t border-white/10 w-full flex flex-col p-6 gap-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-[#2CA8E0] text-lg font-bold">Services</Link>
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-white text-lg">Join as doctor</Link>
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-white text-lg">About us</Link>
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-white text-lg">Blogs</Link>
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-white text-lg">Contact Us</Link>
          </nav>
          
          <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
            <Link
              href="/"
              className="flex items-center justify-center gap-3 rounded-lg bg-[#2CA8E0] w-full py-3"
            >
              <Image src="/bell.svg" alt="Notifications" width={20} height={20} />
              <span className="text-white font-bold">Notifications</span>
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center gap-3 rounded-lg border border-white w-full py-3"
            >
              <Image src="/bell.svg" alt="User" width={20} height={20} className="brightness-0 invert" />
              <span className="text-white font-bold">Kiara Profile</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
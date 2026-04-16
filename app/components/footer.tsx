import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-[4rem] flex flex-col w-full bg-[#001439]">
      
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        <div className="flex flex-col items-start justify-start gap-4">
          <Image src="/healentra.png" alt="Logo" width={180} height={50} className="object-contain" />
          <p className="text-white text-sm leading-relaxed mt-2 opacity-90">
            At Healentra, we provide the best online doctor consultation
            tailored to your needs. Our platform connects you with trusted
            healthcare professionals.
          </p>
          <button className="w-full sm:w-[80%] h-10 flex border-white border-[1px] items-center justify-between px-4 mt-2 text-white rounded hover:bg-white/10 transition-colors">
            <span>Email</span>
            <Image
              src="/arrow-right.png"
              alt="Email Icon"
              width={20}
              height={20}
            />
          </button>
        </div>

        <div className="flex flex-col items-start gap-3 lg:pl-8">
          <h3 className="text-white text-lg font-bold mb-2">Our Services</h3>
          <Link href="/" className="text-sm text-[#C9CBD3] hover:text-white transition-colors">
            Urgent care
          </Link>
          <Link href="/" className="text-sm text-[#C9CBD3] hover:text-white transition-colors">
            Primary care
          </Link>
          <Link href="/" className="text-sm text-[#C9CBD3] hover:text-white transition-colors">
            Chronic Care
          </Link>
          <Link href="/" className="text-sm text-[#C9CBD3] hover:text-white transition-colors">
            Stress and Mental Health
          </Link>
          <Link href="/" className="text-sm text-[#C9CBD3] hover:text-white transition-colors">
            Prescriptions
          </Link>
        </div>

        <div className="flex flex-col items-start gap-3">
          <h3 className="text-white text-lg font-bold mb-2">Quick Links</h3>
          <Link href="/" className="text-sm text-[#C9CBD3] hover:text-white transition-colors">
            About Us
          </Link>
          <Link href="/" className="text-sm text-[#C9CBD3] hover:text-white transition-colors">
            Support
          </Link>
          <Link href="/" className="text-sm text-[#C9CBD3] hover:text-white transition-colors">
            Our Team
          </Link>
          <Link href="/" className="text-sm text-[#C9CBD3] hover:text-white transition-colors">
            Terms & Conditions
          </Link>
          <Link href="/" className="text-sm text-[#C9CBD3] hover:text-white transition-colors">
            FAQs
          </Link>
        </div>

        <div className="flex flex-col items-start gap-3">
          <h3 className="text-white text-lg font-bold mb-2">Contact</h3>
          <Link href="/" className="text-sm text-[#C9CBD3] hover:text-white transition-colors">
            +923041234567
          </Link>
          <Link href="/" className="text-sm text-[#C9CBD3] hover:text-white transition-colors">
            favorite@doctor.com
          </Link>
          <Link href="/" className="text-sm text-[#C9CBD3] hover:text-white transition-colors leading-relaxed">
            Glassplace, Near Cool Avenue, Boson
          </Link>
          
          <div className="flex gap-3 mt-4 flex-wrap">
            <div className="w-10 h-10 border-[#8DC645] border-2 flex items-center justify-center rounded-full hover:bg-[#8DC645] cursor-pointer transition-colors">
              <Image src="/Facebook.png" alt="Facebook Icon" width={18} height={18} />
            </div>
            <div className="w-10 h-10 border-[#8DC645] border-2 flex items-center justify-center rounded-full hover:bg-[#8DC645] cursor-pointer transition-colors">
              <Image src="/twitter.png" alt="Twitter Icon" width={18} height={18} />
            </div>
            <div className="w-10 h-10 border-[#8DC645] border-2 flex items-center justify-center rounded-full hover:bg-[#8DC645] cursor-pointer transition-colors">
              <Image src="/instagram.png" alt="Instagram Icon" width={18} height={18} />
            </div>
            <div className="w-10 h-10 border-[#8DC645] border-2 flex items-center justify-center rounded-full hover:bg-[#8DC645] cursor-pointer transition-colors">
              <Image src="/instagram.png" alt="Instagram Icon" width={18} height={18} />
            </div>
          </div>
        </div>
        
      </div>

      <div className="bg-[#8DC645] w-full py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <p className="text-white text-sm text-center md:text-left">
          © 2025 TeleMedLine. All rights reserved.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/" className="text-white text-sm hover:underline">
            Privacy Policy
          </Link>
          <span className="text-white text-sm opacity-60">|</span>
          <Link href="/" className="text-white text-sm hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
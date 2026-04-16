import React from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className=" mt-[4rem] flex flex-col top-0 w-full h-[16rem] bg-[#001439]">
      <div className="w-full h-[80%]  flex items-center justify-around">
        <div className="w-[20%] h-[80%] flex flex-col items-center justify-center">
          <Image src="/healentra.png" alt="Logo" width={200} height={200} />
          <p className="text-white text-sm mt-2">
            At Healentra, we provide the best online doctor consultation
            tailored to your needs. Our platform connects you with trusted
            healthcare professionals
          </p>
          <button className="w-full h-9 flex border-white border-[1px] items-center justify-between mt-2  text-white rounded">
            <h3 className="ml-2">Email</h3>
            <Image
              src="/arrow-right.png"
              alt="Email Icon"
              width={20}
              height={20}
            />{" "}
          </button>
        </div>
        <div className="w-[20%] flex flex-col  items-start gap-1 h-[80%]">
          <Link href="/" className="text-white text-base">
            Our Services
          </Link>
          <Link href="/" className=" text-sm text-[#C9CBD3]">
            Urgent care
          </Link>
          <Link href="/" className="text-[#C9CBD3] text-sm">
            Primary care
          </Link>
          <Link href="/" className="text-[#C9CBD3] text-sm">
            Chronic Care
          </Link>
          <Link href="/" className="text-[#C9CBD3] text-sm">
            Stress and Mental Health
          </Link>
          <Link href="/" className="text-[#C9CBD3] text-sm">
            Prescriptions
          </Link>
        </div>

        <div className="w-[20%] flex flex-col  items-start gap-1 h-[80%]">
          <Link href="/" className="text-white text-base">
            Quick Links
          </Link>
          <Link href="/" className=" text-sm text-[#C9CBD3]">
            About Us
          </Link>
          <Link href="/" className="text-[#C9CBD3] text-sm">
            Support
          </Link>
          <Link href="/" className="text-[#C9CBD3] text-sm">
            Our Team
          </Link>
          <Link href="/" className="text-[#C9CBD3] text-sm">
            Terms & Conditions
          </Link>
          <Link href="/" className="text-[#C9CBD3] text-sm">
            FAQs
          </Link>
        </div>
        <div className="w-[20%] flex flex-col  items-start gap-2 h-[80%]">
          <Link href="/" className="text-white text-base">
            Contact
          </Link>
          <Link href="/" className=" text-sm text-[#C9CBD3]">
            +923041234567
          </Link>
          <Link href="/" className="text-[#C9CBD3] text-sm">
            favorite@doctor.com
          </Link>
          <Link href="/" className="text-[#C9CBD3] text-sm">
            Glassplace, Near Cool Avenue, Boson
          </Link>
          <div className="w-full h-[2rem] justify-around flex">
            <div className="w-[15%] border-[#8DC645] border-2 aspect-square flex items-center justify-center rounded-full">
              <Image
                src="/Facebook.png"
                alt="Facebook Icon"
                width={20}
                height={20}
              />
            </div>

            <div className="w-[15%] border-[#8DC645] border-2 aspect-square flex items-center justify-center rounded-full">
              <Image
                src="/twitter.png"
                alt="Twitter Icon"
                width={20}
                height={20}
              />
            </div>
            <div className="w-[15%] border-[#8DC645] border-2 aspect-square flex items-center justify-center rounded-full">
              <Image
                src="/instagram.png"
                alt="Instagram Icon"
                width={20}
                height={20}
              />
            </div>
            <div className="w-[15%] border-[#8DC645] border-2 aspect-square flex items-center justify-center rounded-full">
              <Image
                src="/instagram.png"
                alt="Instagram Icon"
                width={20}
                height={20}
              />
            </div>
            <div className="w-[15%] border-[#8DC645] border-2 aspect-square flex items-center justify-center rounded-full">
              <Image
                src="/instagram.png"
                alt="Instagram Icon"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#8DC645] flex justify-around items-center w-full h-[20%]">
        <div className="w-[40%] h-full flex items-center justify-start">
          <p className="text-white text-sm">
            © 2025 TeleMedLine. All rights reserved.
          </p>
        </div>
        <div className=" w-[40%] h-full flex items-center justify-end gap-4 pr-4">
            <Link href="/" className="text-white text-sm">
              Privacy Policy
            </Link>
            <span className="text-white text-sm mx-2">|</span>
            <Link href="/" className="text-white text-sm">
              Terms of Service
            </Link>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;

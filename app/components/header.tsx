import Link from "next/link";
import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 bg-transparent transition-all duration-300 border-white fixed border-b-[1px] w-full mb-8 flex-col  flex justify-between ">
      <div className="bg-[#8DC645] relative flex justify-around items-center w-full h-[2.5rem]">
        <div className=" w-[80%]  h-full flex items-center justify-center">
          <Image src="/speak.png" alt="Logo" width={20} height={20} />
          <Link
            href="/"
            className="ml-2 underline decoration-1 underline-offset-4 mr-2 "
          >
            No hidden fees | Scale your practice with clear pricing and package
          </Link>
          <Image src="/right-arrows.svg" alt="Logo" width={20} height={20} />
        </div>
        <div className=" absolute top-0 right-0 w-[20%]  h-full flex items-center justify-center">
          <Image src="/phone.png" alt="Logo" width={15} height={15} />
          <h3 className="ml-2 mr-2 ">(855)938-3272</h3>
        </div>
      </div>
      <div className=" w-full mt-2 mb-8 flex items-center h-[2rem] justify-between">
        <Link href="/" className="text-white text-base">
          <Image src="/healentra.png" alt="Logo" width={200} height={200} />
        </Link>

        <nav className="w-[40%] flex items-center justify-between">
          <Link href="/" className=" text-sm text-[#2CA8E0]">
            Services
          </Link>
          <Link href="/" className="text-white text-sm">
            Join as doctor
          </Link>
          <Link href="/" className="text-white text-sm">
            About us
          </Link>
          <Link href="/" className="text-white text-sm">
            Blogs
          </Link>
          <Link href="/" className="text-white text-sm">
            Contact Us
          </Link>
        </nav>
        <div className="w-[20%] justify-around items-center flex h-full">
          <Link
            href="/"
            className="flex items-center justify-center rounded-lg text-white w-[2.5rem] h-[2.5rem] aspect-square bg-[#2CA8E0] text-sm"
          >
            <Image src="/bell.svg" alt="Logo" width={20} height={20} />
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center rounded-lg text-white   border-white border-[1px] h-[70%] w-[50%] "
          >
            <Image src="/bell.svg" alt="Logo" width={20} height={20} />
            <h3>Kiara</h3>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

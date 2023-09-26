"use client";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  return (
      <div className="max-w-[1440px] mx-auto p-4 px-5 md:px-20">
        <nav className="lg:flex items-center justify-between ">
          <div className="w-44">
            <Link href="/">
              <Image
                src="/images/DesignAGENCY.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </Link>
          </div>
          <div className="lg:flex flex items-center justify-center gap-5 text-[15px] font-medium hidden lg:block">
            <Link
              href="/"
              className="hover:text-[#20B15A] transition ease-in-out delay-150"
            >
              Home
            </Link>
            <Link
              href="/"
              className="hover:text-[#20B15A] transition ease-in-out delay-150"
            >
              Team
            </Link>
            <Link
              href="/"
              className="hover:text-[#20B15A] transition ease-in-out delay-150"
            >
              Service
            </Link>
            <Link
              href="/"
              className="hover:text-[#20B15A] transition ease-in-out delay-150"
            >
              Projects
            </Link>
            <Link
              href="/"
              className="hover:text-[#20B15A] transition ease-in-out delay-150"
            >
              Testimonials
            </Link>

            <div className="border border-[#20B15A] px-3 py-2 rounded-lg hover:bg-[#20B15A] hover:text-white transition ease-in-out delay-150 cursor-pointer">
              <Link href="/">Login</Link>
            </div>
            <div className="bg-[#20B15A] text-white px-3 py-2 rounded-lg cursor-pointer">
              <Link href="/">Register</Link>
            </div>
          </div>

          <div className="flex justify-end -mt-5 lg:hidden" onClick={toggleNavbar}>
            {isClick ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div>

          {isClick && (
            <div className="flex flex-col items-center justify-center gap-6 text-[15px] font-medium min-h-[91vh] ">
              <Link
                href="/"
                className="hover:text-[#20B15A] transition ease-in-out delay-150"
              >
                Home
              </Link>
              <Link
                href="/"
                className="hover:text-[#20B15A] transition ease-in-out delay-150"
              >
                Team
              </Link>
              <Link
                href="/"
                className="hover:text-[#20B15A] transition ease-in-out delay-150"
              >
                Service
              </Link>
              <Link
                href="/"
                className="hover:text-[#20B15A] transition ease-in-out delay-150"
              >
                Projects
              </Link>
              <Link
                href="/"
                className="hover:text-[#20B15A] transition ease-in-out delay-150"
              >
                Testimonials
              </Link>

              <div className="border border-[#20B15A] px-3 py-2 rounded-lg hover:bg-[#20B15A] hover:text-white transition ease-in-out delay-150 cursor-pointer">
                <Link href="/">Login</Link>
              </div>
              <div className="bg-[#20B15A] text-white px-3 py-2 rounded-lg cursor-pointer">
                <Link href="/">Register</Link>
              </div>
            </div>
          )}
        </nav>
      </div>
  );
};

export default Navbar;

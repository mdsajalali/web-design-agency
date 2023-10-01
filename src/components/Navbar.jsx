"use client";
import { usePathname } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);
  const currentRoute = usePathname();
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  return (
    <div className="fixed left-0 right-0 bg-[#D7F5DC]  z-[1000] ">
      <div className="max-w-[1440px] mx-auto p-4 px-5 md:px-20 ">
        <nav className="lg:flex items-center justify-between">
          <div className="w-44">
            <Link href="/">
              <Image
                src="/images/agency-logo.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </Link>
          </div>
          <div className="flex lg:flex  items-center justify-center gap-5 text-[15px] font-medium hidden lg:block">
            <Link
              href="/"
              className={
                currentRoute === "/"
                  ? "text-[#20B15A]"
                  : "hover:text-[#20B15A] transition ease-in-out delay-150"
              }
            >
              Home
            </Link>

            <Link
              href="/team"
              className={
                currentRoute === "/team"
                  ? "text-[#20B15A]"
                  : "hover:text-[#20B15A] transition ease-in-out delay-150"
              }
            >
              Team
            </Link>

            <Link
              href="/services"
              className={
                currentRoute === "/services"
                  ? "text-[#20B15A]"
                  : "hover:text-[#20B15A] transition ease-in-out delay-150"
              }
            >
              Services
            </Link>
            <Link
              href="/projects"
              className={
                currentRoute === "/projects"
                  ? "text-[#20B15A]"
                  : "hover:text-[#20B15A] transition ease-in-out delay-150"
              }
            >
              Projects
            </Link>
            <Link
              href="/testimonials"
              className={
                currentRoute === "/testimonials"
                  ? "text-[#20B15A]"
                  : "hover:text-[#20B15A] transition ease-in-out delay-150"
              }
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

          <div
            className="flex justify-end -mt-5 lg:hidden "
            onClick={toggleNavbar}
          >
            {isClick ? (
              <AiOutlineClose size={20} className="z-[9999]   cursor-pointer" />
            ) : (
              <AiOutlineMenu size={20} className="z-[9999] cursor-pointer" />
            )}
          </div>

          {isClick && (
            <div className="flex flex-col items-start pl-5 justify-center gap-7 text-[15px] font-medium min-h-[91vh] absolute bg-[#fff] text-black  right-0 h-screen w-[70%] -mt-[42px]  ">
              <Link
                href="/"
                className="hover:text-[#20B15A] transition ease-in-out delay-150 -mt-56"
                onClick={() => setIsClick(!isClick)}
              >
                Home
              </Link>
              <Link
                href="/team"
                className="hover:text-[#20B15A] transition ease-in-out delay-150"
                onClick={() => setIsClick(!isClick)}
              >
                Team
              </Link>
              <Link
                href="/services"
                className="hover:text-[#20B15A] transition ease-in-out delay-150"
                onClick={() => setIsClick(!isClick)}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="hover:text-[#20B15A] transition ease-in-out delay-150"
                onClick={() => setIsClick(!isClick)}
              >
                Projects
              </Link>
              <Link
                href="/testimonials"
                className="hover:text-[#20B15A] transition ease-in-out delay-150"
                onClick={() => setIsClick(!isClick)}
              >
                Testimonials
              </Link>

              <div
                className="border w-[90%] border-[#20B15A] px-3 py-2 rounded-lg hover:bg-[#20B15A] hover:text-white transition ease-in-out delay-150 cursor-pointer"
                onClick={() => setIsClick(!isClick)}
              >
                <Link href="/">Login</Link>
              </div>
              <div
                className="bg-[#20B15A]  w-[90%] text-white px-3 py-2 rounded-lg cursor-pointer"
                onClick={() => setIsClick(!isClick)}
              >
                <Link href="/">Register</Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

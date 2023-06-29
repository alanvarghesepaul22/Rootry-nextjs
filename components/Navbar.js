"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LoginButton from "./buttons/LoginButton";
import SignupButton from "./buttons/SignupButton";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const { data: session, loading } = useSession();
  const [isNavShadow, setNavShadow] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleMenu1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleMenu2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleMenu3 = () => {
    setIsOpen3(!isOpen3);
  };

  useEffect(() => {
    const setShadow = () => {
      if (window.pageYOffset > 0) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };
    window.addEventListener("scroll", setShadow);
    return () => {
      window.removeEventListener("scroll", setShadow);
    };
  }, []);
  
  if (!session && !loading) {
    return (
      <>
        <nav
          className={`bg-white flex items-center justify-between px-7 py-4 w-full fixed top-0 z-[100] ${
            isNavShadow ? "shadow-md" : null
          }`}
        >
          <div className="w-32 h-auto">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={200}
                height={200}
                priority={false}
                placeholder="blur"
                blurDataURL={"/logo.png"}
                className="h-auto w-auto"
              />
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <LoginButton />
            <SignupButton />
          </div>
        </nav>
      </>
    );
  }
  return (
    <>
      <nav
        className={`bg-white flex items-center justify-between px-7 py-4 w-full fixed top-0 z-[100] ${
          isNavShadow ? "shadow-md" : null
        }`}
      >
        <div className="w-32 h-auto">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={200}
              priority={false}
              placeholder="blur"
              blurDataURL={"/logo.png"}
              className="h-auto w-auto"
            />
          </Link>
        </div>

        <div>
          <div className="flex">
            <Link
              href="/search-tree"
              className="text-black px-9 py-2 text-lg font-medium hover:text-blue-600"
            >
              Search
            </Link>
            <div className="relative">
              <button
                onClick={toggleMenu1}
                className="flex items-center text-black px-3 py-2 text-lg font-medium focus:outline-none hover:text-blue-600"
              >
                Family Tree
                <RiArrowDropDownLine className="text-2xl mt-1" />
              </button>
              {isOpen1 && (
                <div className="absolute z-10 mt-4 w-56 shadow-lg overflow-hidden rounded border-2 border-slate-100 bg-white">
                  <div className="w-full ">
                    <Link
                      href="/create-tree"
                      className="px-5 py-3 flex items-start hover:bg-light-white border-b-2 border-slate-100 rounded"
                    >
                      Create Tree
                    </Link>
                    <Link
                      href="/tree"
                      className="px-5 py-3 flex items-start  hover:bg-light-white border-b-2 border-slate-100 rounded"
                    >
                      Your Trees
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={toggleMenu2}
                className="flex items-center text-black px-3 py-2 text-lg font-medium focus:outline-none hover:text-blue-600"
              >
                Help & More
                <RiArrowDropDownLine className="text-2xl mt-1" />
              </button>
              {isOpen2 && (
                <div className="absolute z-10 mt-4 w-56 shadow-lg overflow-hidden rounded border-2 border-slate-100 bg-white">
                  <div className="w-full ">
                    <Link
                      href="#"
                      className="px-5 py-3 flex items-start hover:bg-light-white border-b-2 border-slate-100 rounded"
                    >
                      What's New?
                    </Link>
                    <Link
                      href="#"
                      className="px-5 py-3 flex items-start  hover:bg-light-white border-b-2 border-slate-100 rounded"
                    >
                      Family Records
                    </Link>
                    <Link
                      href="#"
                      className="px-5 py-3 flex items-start  hover:bg-light-white border-b-2 border-slate-100 rounded"
                    >
                      Build your family tree
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative">
            <button
              onClick={toggleMenu3}
              className="flex items-center text-black px-3 py-2 text-lg font-medium focus:outline-none hover:text-blue-600"
            >
              My Account
              <RiArrowDropDownLine className="text-2xl mt-1" />
            </button>
            {isOpen3 && (
              <div className="absolute z-10 mt-4 w-fit shadow-lg overflow-hidden rounded border-2 border-slate-100 bg-white">
                <div className="w-full ">
                  <Link
                    href="/profile"
                    className="px-5 py-3 flex items-start hover:bg-light-white border-b-2 border-slate-100 rounded"
                  >
                    {session.user.name}
                  </Link>
                  <Link
                    href="#"
                    className="px-5 py-3 flex items-start  hover:bg-light-white border-b-2 border-slate-100 rounded"
                    onClick={() => {
                      signOut();
                    }}
                  >
                    Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

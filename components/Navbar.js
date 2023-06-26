"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LoginButton from "./buttons/LoginButton";
import SignupButton from "./buttons/SignupButton";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar = async () => {
  const { data } = useSession();
  const [isNavShadow, setNavShadow] = useState(false);

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

  return (
    <nav
      className={`bg-white flex items-center justify-between px-7 py-4 w-full fixed top-0 z-[100] ${
        isNavShadow ? "shadow-md" : null
      }`}
    >
      <div className="w-32 h-auto">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={200} height={200} />
        </Link>
      </div>
      {data?.user ? (
        <>
          <p>Hi,{data.user?.name}</p>
          <p
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </p>
        </>
      ) : (
        <div className="flex items-center justify-center">
          <LoginButton />
          <SignupButton />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

"use client";
import Image from "next/image";
import React from "react";
import { signIn, useSession } from "next-auth/react";

const GoogleButton = () => {
  const handleClick = () => {
    signIn("google");
  };
  return (
    <button
      onClick={handleClick}
      className="bg-white flex items-center justify-center w-4/5 py-2 rounded hover:bg-hover-white shadow-md my-2"
    >
      <Image
        src="/googlelogo.png"
        alt="googlelogo"
        width={30}
        height={30}
        priority={false}
        blurDataURL={"/googlelogo.png"}
        className="h-auto w-auto"
      />
      <p className="mx-4 font-medium">Continue with google</p>
    </button>
  );
};

export default GoogleButton;

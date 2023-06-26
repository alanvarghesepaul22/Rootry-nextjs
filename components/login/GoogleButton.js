"use client"
import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

const GoogleButton = () => {
  const handleClick = () => {
    signIn("google");
  };
  return (
    <button onClick={handleClick} className="bg-white flex items-center justify-center w-4/5 py-2 rounded hover:bg-hover-white shadow-md my-2">
      <Image src="/googlelogo.png" width={30} height={30} />
      <p className="mx-4 font-medium">Continue with google</p>
    </button>
  );
};

export default GoogleButton;

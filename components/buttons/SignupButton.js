"use client"
import Link from "next/link";
import React from "react";

const SignupButton = () => {
  return (
    <>
      <Link href="/signup" className="bg-primary text-white px-4 py-1 rounded mx-3 font-medium text-lg text-center hover:bg-blue-600">
        <p>SIGNUP</p>
      </Link>
    </>
  );
};

export default SignupButton;

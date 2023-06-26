import React from "react";
import GoogleButton from "../login/GoogleButton";
import SignUpCredentialsForm from "./SignUpCredentialsForm";
import { redirect } from "next/navigation";
import { NextAuthOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const SignUpForm = async () => {
  const session = await getServerSession(NextAuthOptions);
  if (session) return redirect("/home");
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center h-auto bg-light-white w-1/3 px-5 rounded-md mt-24 text-center shadow-md py-10 mb-20">
        <div>
          <h1 className="text-black font-semibold text-2xl mt-1">
            Register your Account
          </h1>
          <p className="text-gray my-2">
            Signup now and gey full access to our website
          </p>
        </div>
        <SignUpCredentialsForm />
        <div className="my-1">
          <p>OR</p>
        </div>
        <GoogleButton />
      </div>
    </div>
  );
};

export default SignUpForm;

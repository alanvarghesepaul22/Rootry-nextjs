import React from "react";
import CredentialsForm from "./CredentialsForm";
import GoogleButton from "./GoogleButton";
import { redirect } from "next/navigation";
import { NextAuthOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const LoginForm = async () => {
  const session = await getServerSession(NextAuthOptions);
  if (session) return redirect("/home");
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center h-auto bg-light-white w-1/3 px-5 rounded-md mt-24 text-center shadow-md py-10 mb-20">
        <div>
          <h1 className="text-black font-semibold text-2xl mt-1">
            Login to your Account
          </h1>
          <p className="text-gray my-2">
            Get started with our app, just create an account and enjoy the
            experience
          </p>
        </div>
        <CredentialsForm />
        <div className="my-1">
          <p>OR</p>
        </div>
        <GoogleButton />
      </div>
    </div>
  );
};

export default LoginForm;

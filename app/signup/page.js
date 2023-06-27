import SignUpForm from "@/components/signup/SignUpForm";
import React from "react";
import { getServerSession } from "next-auth";
import { NextAuthOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

const SignUp = async () => {
  const session = await getServerSession(NextAuthOptions);
  if (session) {
    redirect("/home");
  }
  return (
    <div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;

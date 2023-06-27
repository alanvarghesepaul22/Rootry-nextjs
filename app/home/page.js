import React from "react";
import { getServerSession } from "next-auth";
import { NextAuthOptions, loginIsRequiredServer } from "@/lib/auth";
import Navbar from "@/components/Navbar";
const HomePage = async () => {
  await loginIsRequiredServer();
  const session = await getServerSession(NextAuthOptions);
  return (
    <div className="h-screen flex items-center justify-center">
      <h1>{session?.user?.name}</h1>
    </div>
  );
};

export default HomePage;

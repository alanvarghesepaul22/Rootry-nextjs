import { NextAuthOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(NextAuthOptions)

export {handler as GET, handler as POST};
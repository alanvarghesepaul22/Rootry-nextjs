import HomeBanner from "@/components/homePage/HomeBanner";
import HomeTreeAnimation from "@/components/homePage/HomeTreeAnimation";
import { redirect } from "next/navigation";
import { NextAuthOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(NextAuthOptions);
  if (session) {
    redirect("/home");
  }

  return (
    <div className="mt-24">
      <HomeBanner />
      <HomeTreeAnimation />
    </div>
  );
}

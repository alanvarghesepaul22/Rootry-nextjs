"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CredentialsForm = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const signInResponse = await signIn("credentials", {
      email: data.get("email"),
      password: data.get("password"),
      redirect: false,
    });

    if (signInResponse && !signInResponse.error) {
      router.push("/home");
    } else {
      // console.log('login error');

      setError("log error");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full m-3">
      <form onSubmit={handleSubmit}>
        {error && (
          <span className="p-2  px-5 my-2 text-base text-white font-normal bg-red-500 rounded">
            {error}
          </span>
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="px-4 py-2 my-2 mt-5 w-4/5 outline-0 shadow-sm rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="px-4 my-2 py-2 w-4/5 outline-0 shadow-sm rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-primary w-4/5 text-white shadow-sm rounded py-2 my-2 hover:bg-blue-700"
        >
          Sign In
        </button>
        <div className="text-center">
          <p>
            Not a member?{" "}
            <Link href="/signup" as={"/signup"}>
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default CredentialsForm;

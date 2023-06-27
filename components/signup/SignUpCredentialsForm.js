"use client";
import React, { useState } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation";

const SignUpCredentialsForm = () => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/register", {
        name,
        email,
        password,
      });

      console.log(data);
      if (data) {
       router.push("/login");
      }
    } catch (error) {
      console.log(error);
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
          type="text"
          name="name"
          placeholder="Full Name"
          required
          className="px-4 py-2 my-2 mt-5 w-4/5 outline-0 shadow-sm rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="px-4 py-2 my-2 w-4/5 outline-0 shadow-sm rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="passwoord"
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpCredentialsForm;

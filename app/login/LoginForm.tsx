"use client";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ email, password });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-90"
    >
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-600">Email Address</label>
        <input
          type="email"
          className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-600">Password</label>
        <input
          type="password"
          className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition"
      >
        Sign in
      </button>
       <button
        className="w-full bg-gray-300 text-white py-3 rounded-md font-medium hover:bg-gray-900 transition"
      >
        Get a quote
      </button>
    </form>
  );
}

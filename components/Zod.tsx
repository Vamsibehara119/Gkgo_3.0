"use client";

import { useState } from "react";
import { z } from "zod";

// 1️⃣ Define Zod Schema
const FormSchema = z.object({
  email: z.string().email("Invalid email format"),
  age: z
    .string()
    .refine((val) => !isNaN(Number(val)), "Age must be a number")
    .refine((val) => Number(val) >= 18, "Age must be at least 18"),
});

export default function Zod() {
  const [errors, setErrors] = useState<any>({});
  const [data, setData] = useState<any>(null);

  // 2️⃣ Handle form submit
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const formData = {
      email: e.target.email.value,
      age: e.target.age.value,
    };

    // 3️⃣ Validate using Zod
    const validation = FormSchema.safeParse(formData); //safeparse

    if (!validation.success) {
      // Return only error messages
      setErrors(validation.error.flatten().fieldErrors);
      setData(null);
      return;
    }

    // 4️⃣ Success
    setErrors({});
    setData(validation.data);
    console.log("Validated Data:", validation.data);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Zod Only Form Example</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        {/* Email */}
        <div>
          <label>Email</label>
          <input
            name="email"
            type="text"
            className="border p-2 w-full"
            placeholder="Enter email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email[0]}</p>
          )}
        </div>

        {/* Age */}
        <div>
          <label>Age</label>
          <input
            name="age"
            type="text"
            className="border p-2 w-full"
            placeholder="Enter age"
          />
          {errors.age && <p className="text-red-500">{errors.age[0]}</p>}
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded"
        >
          Validate using Zod
        </button>
      </form>

      {/* Show Validated Data */}
      {data && (
        <div className="mt-6 p-4 bg-gray-100 border rounded">
          <h3 className="font-bold mb-2">Validated Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

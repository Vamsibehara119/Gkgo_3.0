"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface FormValues {
  email: string;
  age: string;
}

export default function Formik1() {
  // Typed state (Fixes your TypeScript error)
  const [submittedData, setSubmittedData] =
    useState<FormValues | null>(null);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Formik Form Example</h2>

      <Formik<FormValues>
        initialValues={{
          email: "",
          age: "",
        }}
        validate={(values) => {
          const errors: Partial<FormValues> = {};

          // Email validation
          if (!values.email) {
            errors.email = "Email is required";
          } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = "Invalid email address";
          }

          // Age validation
          if (!values.age) {
            errors.age = "Age is required";
          } else if (isNaN(Number(values.age))) {
            errors.age = "Age must be a number";
          } else if (Number(values.age) < 18) {
            errors.age = "Age must be at least 18";
          }

          return errors;
        }}
        onSubmit={(values) => {
          setSubmittedData(values); // ✔ FIXED
          console.log("Formik Submitted Data:", values);
        }}
      >
        {/* Formik Form */}
        {() => (
          <Form className="flex flex-col gap-4 max-w-md">
            {/* Email */}
            <div>
              <label>Email</label>
              <Field
                name="email"
                type="text"
                className="border p-2 w-full"
                placeholder="Enter email"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500"
              />
            </div>

            {/* Age */}
            <div>
              <label>Age</label>
              <Field
                name="age"
                type="text"
                className="border p-2 w-full"
                placeholder="Enter age"
              />
              <ErrorMessage
                name="age"
                component="p"
                className="text-red-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded"
            >
              Submit (Formik)
            </button>
          </Form>
        )}
      </Formik>

      {/* Display submitted data */}
      {submittedData && (
        <div className="mt-6 p-4 bg-gray-100 border rounded">
          <h3 className="font-bold mb-2">Submitted Data:</h3>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

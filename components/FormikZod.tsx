"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useState } from "react";

// 1️⃣ Zod schema (with coercion for number fields)
const SignupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  age: z.coerce.number().min(18, "You must be at least 18"),
});

// 2️⃣ Inferred TypeScript type
type FormValues = z.infer<typeof SignupSchema>;

export default function FormikZod() {
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Formik + Zod Example</h2>

      <Formik<FormValues>
        initialValues={{
          name: "",
          email: "",
          age: 18,
        }}
        validationSchema={toFormikValidationSchema(SignupSchema)}
        onSubmit={(values) => {
          setSubmitted(values);
          console.log("Submitted:", values);
        }}
      >
        {() => (
          <Form className="flex flex-col gap-4 max-w-md">
            {/* NAME */}
            <div>
              <label>Name</label>
              <Field
                name="name"
                className="border p-2 w-full"
                placeholder="Enter your name"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label>Email</label>
              <Field
                name="email"
                type="email"
                className="border p-2 w-full"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500"
              />
            </div>

            {/* AGE */}
            <div>
              <label>Age</label>
              <Field
                name="age"
                type="number"
                className="border p-2 w-full"
                placeholder="Enter age"
              />
              <ErrorMessage
                name="age"
                component="p"
                className="text-red-500"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>

      {/* Display Submitted Data */}
      {submitted && (
        <div className="mt-6 bg-gray-100 border p-4 rounded">
          <h3 className="font-semibold mb-2">Submitted Data:</h3>
          <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

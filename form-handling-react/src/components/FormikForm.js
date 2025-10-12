// src/components/FormikForm.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    console.log("Submitted values:", values);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log("User registered:", data);
      alert("Registration successful!");
      resetForm();
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-xl mt-10 shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Formik Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="space-y-4">
            <div>
              <Field
                type="text"
                name="username"
                placeholder="Username"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage name="username" component="p" className="text-red-500" />
            </div>

            <div>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage name="email" component="p" className="text-red-500" />
            </div>

            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
              />
              <ErrorMessage name="password" component="p" className="text-red-500" />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
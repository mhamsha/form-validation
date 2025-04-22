import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("email is required"),
  password: Yup.string()
    .min(8, "password must be atleast 8 character")
    .required("password is required"),
});

const Login = () => {
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {/* {
            ({isSubmitting}) => (
                
            )
        } */}

      </Formik>

      <div className="flex items-center justify-center h-screen bg-gray-800">
        <div className="w-full p-8 lg:p-36 md:p-52 sm:20 lg:w-1/2">
          <h1 className="mb-4 text-2xl font-semibold text-white">Login</h1>
          <form>
            <div className="mb-4">
              <label for="gmail" className="block text-gray-600">
                E-Mail
              </label>
              <input
                type="text"
                id="gmail"
                name="username"
                className="w-full px-3 py-2 text-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                autocomplete="off"
                placeholder="write your gmail"
              />
            </div>
            <div className="mb-4">
              <label for="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 text-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                autocomplete="off"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

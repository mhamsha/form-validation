// import React from "react";
// import * as Yup from "yup";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// const validationSchema = Yup.object({
//   email: Yup.string().email("Invalid Email").required("email is required"),
//   password: Yup.string()
//     .min(8, "password must be atleast 8 character")
//     .required("password is required"),
// });
// const validateUser = (email, password) => {
//   const verifiedEmail = "hamza@gmail.com";
//   const verifiedPass = "12345678";
//   if (verifiedEmail === email && verifiedPass === password) {
//     console.log("You are now authorized to manage records");
//     return true;
//   } else {
//     console.log("you are not authorized");
//     return false;
//   }
// };

// const Login = () => {
//   return (
//     <>
//       <div className="flex items-center justify-center h-screen bg-gray-800">
//         <div className="w-full p-8 lg:p-36 md:p-52 sm:20 lg:w-1/2 bg-gray-700 rounded-lg shadow-md">
//           <h1 className="mb-4 text-2xl font-semibold text-white">Login</h1>
//           <Formik
//             initialValues={{
//               email: "",
//               password: "",
//             }}
//             validationSchema={validationSchema}
//             onSubmit={(values, actions) => {
//               console.log(values.email);
//               validateUser(values.email, values.password);
//               actions.setSubmitting(false);
//               actions.resetForm();
//             }}
//           >
//             {({ isSubmitting }) => (
//               <Form>
//                 <div className="mb-4">
//                   <label htmlFor="gmail" className="block text-gray-600">
//                     E-mail
//                   </label>
//                   <Field
//                     type="text"
//                     id="gmail"
//                     name="email"
//                     className="w-full px-3 py-2 text-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                     // autoComplete="off"
//                     placeholder="write your gmail"
//                   />
//                   <ErrorMessage name="email" />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="password" className="block text-gray-600">
//                     Password
//                   </label>
//                   <Field
//                     type="password"
//                     id="password"
//                     name="password"
//                     className="w-full px-3 py-2 text-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                     // autoComplete="off"
//                     placeholder="Enter your password"
//                   />
//                   <ErrorMessage name="password" />
//                 </div>
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 hover:cursor-pointer"
//                 >
//                   Login
//                 </button>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Login;

// now managing using useFormik
import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email").required("email is required"),
  password: Yup.string()
    .min(8, "password must be atleast 8 character")
    .required("password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const validateUser = (email, password) => {
    const verifiedEmail = "hamza@gmail.com";
    const verifiedPass = "12345678";
    if (verifiedEmail === email && verifiedPass === password) {
      // console.log("You are now authorized to manage records");
      setAuthStatus(true);
      setTimeout(() => {
        navigate("/user/details");
      }, 500);
    } else {
      console.log("you are not authorized");
      setAuthStatus(false);
    }
    setTimeout(() => {
      setAuthStatus(null);
    }, 2000);
  };
  const [authStatus, setAuthStatus] = useState(null);
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, actions) => {
      // console.log(values.email);
      actions.setSubmitting(false);
      actions.resetForm()
      validateUser(values.email, values.password);
    },
  });
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-800">
        <div className="w-full p-8 lg:p-36 md:p-52 sm:20 lg:w-1/2 bg-gray-700 rounded-lg shadow-md">
          <h1 className="mb-4 text-2xl font-semibold text-white">Login</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-600">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 text-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                autoComplete="off"
                placeholder="write your gmail"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email ? <div>{errors.email}</div> : null}
              {/* <ErrorMessage name="email" /> */}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 text-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                autoComplete="off"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password ? <div>{errors.password}</div> : null}
              {/* <ErrorMessage name="password" /> */}
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 hover:cursor-pointer"
            >
              Login
            </button>
            {authStatus === null ? (
              ""
            ) : authStatus ? (
              <div>You Have successfully logged in</div>
            ) : (
              <div>Unauthorized Request</div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

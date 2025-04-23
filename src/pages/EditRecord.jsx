import { useFormik } from "formik";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EditRecord = () => {
  const location = useLocation();
  const { record } = location.state; 
  const navigate = useNavigate();
  //   console.log(record);
  // {
  //     productName: 'Apple MacBook Pro 17"',
  //     color: "Silver",
  //     category: "Laptop",
  //     price: "$2999",
  //   },

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: record.product,
    onSubmit: (values) => {
      navigate("/user/details", { state: values });
    },
  });
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="w-full p-8 lg:p-36 md:p-52 sm:20 lg:w-1/2 bg-gray-700 rounded-lg shadow-md">
        <h1 className="mb-4 text-2xl font-semibold text-white">Edit Form</h1>

        <form onSubmit={handleSubmit}>
          {/* <div className="mb-4">
            <label htmlFor="productName" className="block text-gray-600">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              className="w-full px-3 py-2 text-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={handleChange}
              value={values.productName}
            />
          </div> */}
          {Object.keys(record.product).map((column) => {
            return (
              column !== "id" && (
                <div key={column} className="mb-4">
                  <label htmlFor="productName" className="block text-gray-600">
                    {column}
                  </label>
                  <input
                    type="text"
                    id={column}
                    name={column}
                    className="w-full px-3 py-2 text-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    onChange={handleChange}
                    value={values[column]}
                  />
                </div>
              )
            );
          })}
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 hover:cursor-pointer"
          >
            Edit Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditRecord;

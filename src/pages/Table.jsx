import React from "react";
import { Link, useLocation } from "react-router-dom";
const mockProducts = [
  {
    id: 1,
    productName: 'Apple MacBook Pro 17"',
    color: "Silver",
    category: "Laptop",
    price: "$2999",
  },
  {
    id: 2,
    productName: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    price: "$1999",
  },
  {
    id: 3,
    productName: "Magic Mouse 2",
    color: "Black",
    category: "Accessories",
    price: "$99",
  },
  {
    id: 4,
    productName: "Google Pixel Phone",
    color: "Gray",
    category: "Phone",
    price: "$799",
  },
  {
    id: 5,
    productName: "Apple Watch 5",
    color: "Red",
    category: "Wearables",
    price: "$999",
  },
  {
    id: 6,
    productName: "Samsung Galaxy S21",
    color: "Phantom Black",
    category: "Phone",
    price: "$899",
  },
  {
    id: 7,
    productName: "Dell XPS 13",
    color: "Platinum Silver",
    category: "Laptop",
    price: "$1299",
  },
  {
    id: 8,
    productName: "Logitech MX Master 3",
    color: "Graphite",
    category: "Accessories",
    price: "$99.99",
  },
  {
    id: 9,
    productName: "Sony WH-1000XM4",
    color: "Midnight Blue",
    category: "Audio",
    price: "$349",
  },
  {
    id: 10,
    productName: 'iPad Pro 12.9"',
    color: "Space Gray",
    category: "Tablet",
    price: "$1099",
  },
];
const mockColumns = [" Product name", "Color", "Category", "Price", "Action"];

const Table = () => {
  const location = useLocation();
  const editData = location.state;
  // console.log(editData);
  let filteredItem = [...mockProducts];
  if (editData) {
    // filteredItem = mockProducts.filter((product) => product.id !== editData.id);
    // filteredItem.push(editData);
    filteredItem = filteredItem.map((product) => {
      if (product.id === editData.id) {
        return { ...editData };
        // return editData
      }
      return product;
    });
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {mockColumns.map((column) => (
                <th key={column} scope="col" className="px-6 py-3">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredItem.map((product, index) => (
              <tr
                key={product.productName + String(index)}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700
                 border-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {product.productName}
                </th>
                <td className="px-6 py-4">{product.color}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">{product.price}</td>
                <td className="px-6 py-4">
                  <Link
                    to={"/edit-record"}
                    state={{ record: { product } }}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Table from "./pages/Table.jsx";
import EditRecord from "./pages/EditRecord.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/user/details",
    element: <Table />,
  },
  {
    path: "/edit-record",
    element: <EditRecord />,
  },

  {
    path: "*",
    element: <h1>Page not Found</h1>,
  },
]);
createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // </StrictMode>
);

import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Login from "../pages/Login&Registration/Login";
import Register from "../pages/Login&Registration/Register";
import AdminLandingPage from "../pages/adminPage/AdminLandingPage";
import DashBoard from "../pages/adminPage/DashBoard";
import AddProduct from "../pages/adminPage/AddProduct";
import AllProducts from "../pages/adminPage/AllProducts";
import ProductsType from "../pages/productsData/ProductsType";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/adminpage",
        element: <AdminLandingPage />,
      },
      {
        path: "/category/:id",
        element: <ProductsType />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "/dashboard",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/allproducts",
        element: <AllProducts />,
      },
    ],
  },
]);

export default router;

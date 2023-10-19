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
import ProductDetails from "../pages/products/ProductDetails";
import Wishlist from "../pages/wishlist/Wishlist";
import PrivateRoute from "./PrivateRoute";
import AdminPrivateRoute from "./AdminPrivateRoute";

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
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist />
          </PrivateRoute>
        ),
      },
      {
        path: "/adminpage",
        element: (
          <AdminPrivateRoute>
            <AdminLandingPage />
          </AdminPrivateRoute>
        ),
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
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
    element: (
      <AdminPrivateRoute>
        <DashBoard />
      </AdminPrivateRoute>
    ),
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

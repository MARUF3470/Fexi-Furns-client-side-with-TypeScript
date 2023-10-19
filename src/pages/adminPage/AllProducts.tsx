/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/products/productApi";
import Loading from "../../component/reuseable/Loading/Loading";
import Error from "../../component/reuseable/Error/Error";
import ProductListUI from "../sharedPages/ProductListUI";
type ProductType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: object[];
};

const AllProducts = () => {
  const { pathname } = useLocation();
  const query = {
    size: 0,
    page: 0,
    keyword: "",
  };
  const { data, isError, isLoading } = useGetProductQuery(query);
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  const handleDelete = (id: string) => {
    console.log(id);
  };
  return (
    <div>
      <div className="text-center bg-slate-100 py-14">
        <h1 className="text-xl font-semibold text-slate-950">CONTACT US</h1>
        <p className="text-xs mt-3">
          <Link
            to="/"
            className="text-slate-950 hover:text-violet-700 transition duration-300"
          >
            HOME<span> </span>
          </Link>
          /{" "}
          <Link
            to="/adminpage"
            className="text-slate-950 hover:text-violet-700 transition duration-300"
          >
            ADMIN PAGE{" "}
          </Link>
          / PRODUCT LIST
        </p>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th className="rounded-none border bg-transparent">Image</th>
            <th className="border bg-transparent">Product</th>
            {pathname.includes("cart") && (
              <th className="rounded-none border bg-transparent">Quantity</th>
            )}
            {pathname.includes("allproducts") && (
              <th className="rounded-none border bg-transparent">Quantity</th>
            )}
            {pathname.includes("wishlist") && (
              <th className="rounded-none border bg-transparent">
                Add To Cart
              </th>
            )}
            <th className="border bg-transparent">Price</th>
            <th className="rounded-none border bg-transparent">Remove</th>
          </tr>
        </thead>
        <tbody>
          {data?.products?.map((product: ProductType) => (
            <ProductListUI
              handledelete={handleDelete}
              key={product._id}
              product={product}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProducts;

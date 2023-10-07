/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Link } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/products/productApi";
import Loading from "../../component/reuseable/Loading/Loading";
import Error from "../../component/reuseable/Error/Error";
type ProductType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: object[];
};

const AllProducts = () => {
  const { data, isError, isLoading } = useGetProductQuery(null);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
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
      <ul>
        {data?.map((product: ProductType) => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <div>
              {product?.images?.map((image: any) => (
                <img
                  key={image._id}
                  src={`http://localhost:5000/uploads/${image.filename}`}
                  alt={image.filename}
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProducts;

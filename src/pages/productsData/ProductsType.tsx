/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLoaderData } from "react-router-dom";
import ProductCard from "../products/ProductCard";
type ProductType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: object[];
};
const ProductsType = () => {
  const products: any = useLoaderData();
  return (
    <div>
      <div className="text-center bg-slate-100 py-14">
        <h1 className="text-xl font-semibold text-slate-950">PRODUCT TYPE</h1>
        <p className="text-xs mt-3">
          <Link
            to="/"
            className="text-slate-950 hover:text-violet-700 transition duration-300"
          >
            HOME<span> </span>
          </Link>
          / PRODUCT TYPE
        </p>
      </div>
      {products?.length ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 w-3/4 gap-3 mx-auto my-10">
          {products.map((product: ProductType) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-zinc-950 text-center my-20">
          No Product available in this category
        </p>
      )}
    </div>
  );
};

export default ProductsType;

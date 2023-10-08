/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLoaderData } from "react-router-dom";
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
      {products?.length ? (
        <div className="grid grid-cols-4 w-3/4 mx-auto my-10">
          <div>
            {products.map((product: ProductType) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
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

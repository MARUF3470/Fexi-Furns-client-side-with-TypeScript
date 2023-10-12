import React from "react";
import { useLocation } from "react-router-dom";

const ProductListUI = ({ product, handledeleteFormWishlist }) => {
  const { pathname } = useLocation();
  return (
    <tr className="h-40 w-full">
      <td className="border">
        <div>
          <img
            className="w-40 h-full mx-auto"
            src={`http://localhost:5000/uploads/${product.images[0].filename}`}
            alt=""
          />
        </div>
      </td>
      <td className="border">
        {product.name}
        <br />
        <span className="badge badge-ghost badge-sm">{product?.type}</span>
      </td>
      {pathname.includes("cart") ? (
        <th className="border">
          <div className="border p-3 flex">
            <button>-</button>
            <div className="divider divider-horizontal"></div>
            <div>{product.quantity}</div>
            <div className="divider divider-horizontal"></div>
            <button>+</button>
          </div>
        </th>
      ) : (
        <th className="border ">
          <button className="w-full bg-black text-white hover:bg-violet-600 text-xs py-2">
            ADD TO CART
          </button>
        </th>
      )}
      <td className="border">{product.price}$</td>
      <th className="border">
        <button
          onClick={() => handledeleteFormWishlist(product._id)}
          className="btn btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
    </tr>
  );
};

export default ProductListUI;

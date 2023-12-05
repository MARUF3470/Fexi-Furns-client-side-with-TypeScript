/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsEye, BsHeart, BsLink } from "react-icons/bs";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Card.css";
import toast from "react-hot-toast";
import {
  useGetCartPItemsQuery,
  usePostCartItemMutation,
} from "../../features/api/products/productApi";
import { AuthContext } from "../../Authentication/AuthProvider";
const ProductCard = ({ product }: any) => {
  const navigate = useNavigate();
  const { user }: any = useContext(AuthContext);
  const [addToCart] = usePostCartItemMutation();
  const { data, refetch } = useGetCartPItemsQuery(user?.email);
  const handleAddProductWishlist = (id: string) => {
    const wishlistData = localStorage.getItem("wishlist");
    if (wishlistData) {
      const retrievedWishlist = JSON.parse(wishlistData);
      retrievedWishlist.push(id);
      localStorage.setItem("wishlist", JSON.stringify(retrievedWishlist));
      toast.success("Product added to your wishlist");
    } else {
      const retrievedWishlist = [];
      retrievedWishlist.push(id);
      localStorage.setItem("wishlist", JSON.stringify(retrievedWishlist));
      toast.success("Product added to your wishlist");
    }
  };
  const handleAddToCart = (id: string) => {
    const cartData = {
      id,
      email: user.email,
    };
    if (user?.email) {
      const allreadyAdded = data.find(
        (item: { _id: string; id: string }) => item.id === id
      );
      if (allreadyAdded) {
        return toast.error("This product is already added to your cart");
      } else {
        refetch();
        addToCart(cartData);
        return toast.success("This product is added to your cart");
      }
    } else {
      toast.error("You need to login first to add product to your cart");
      return navigate("/login");
    }
  };
  return (
    <div>
      <div className="advertiseProduct h-full shadow-md">
        <div className="product-card geek">
          <img
            src={`https://fexi-furn-api.onrender.com/uploads/${product.images[0].filename}`}
            alt="Product"
            className="h-48"
          />
          <button
            onClick={() => handleAddToCart(product?._id)}
            className="add-to-cart-btn text-xs bg-white text-zinc-950 w-3/4 mx-auto h-6 mb-2 hover:bg-zinc-950 hover:text-white transition duration-300"
          >
            Add to Cart
          </button>
          <div className="flex flex-col gap-1 mini-buttons">
            <div
              onClick={() => handleAddProductWishlist(product?._id)}
              className="tooltip tooltip-left"
              data-tip="Add To Wishlist"
            >
              <button className="bg-white text-zinc-950 shadow-sm rounded-full flex justify-center items-center w-8 h-8 hover:bg-zinc-950 hover:text-white">
                <BsHeart className="w-4 h-4"></BsHeart>{" "}
              </button>
            </div>
            <div className="tooltip tooltip-left" data-tip="Quick View">
              <label
                htmlFor="booking-modal"
                className="btn bg-white text-zinc-950 shadow-sm btn-circle hover:bg-zinc-950 hover:text-white btn-ghost btn-sm"
              >
                <BsEye className="w-4 h-4"></BsEye>
              </label>
            </div>
            <div className="tooltip tooltip-left" data-tip="Product Details">
              <button className="p-1 bg-white text-zinc-950 shadow-sm flex justify-center items-center w-8 h-8 rounded-full hover:bg-zinc-950 transition duration-300 hover:text-white">
                <Link to={`/products/${product?._id}`}>
                  <BsLink className="w-4 h-4"></BsLink>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="p-3">
          <h2 className="font-semibold text-sm">{product?.name}</h2>
          <p className="font-semibold text-sm">Price: ${product?.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

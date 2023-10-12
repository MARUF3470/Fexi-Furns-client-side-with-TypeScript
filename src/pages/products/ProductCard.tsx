/* eslint-disable @typescript-eslint/no-explicit-any */
import { BsEye, BsHeart, BsLink } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Card.css";
import toast from "react-hot-toast";
const ProductCard = ({ product }: any) => {
  const handleAddProductWishlist = (id: string) => {
    const wishlistData = localStorage.getItem("wishlist");
    if (wishlistData) {
      // Parse the JSON string into an array
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
  return (
    <div>
      {/* <h1>{product.name}</h1>
      <div>
        {product?.images?.map((image: ImageType) => (
          <img
            key={image._id}
            src={`http://localhost:5000/uploads/${image.filename}`}
            alt={image.filename}
            style={{ maxWidth: "200px", maxHeight: "200px" }}
          />
        ))}
      </div> */}
      <div className="advertiseProduct shadow-md">
        <div className="product-card geek">
          <img
            src={`http://localhost:5000/uploads/${product.images[0].filename}`}
            alt="Product"
            className="h-48"
          />
          <button className="add-to-cart-btn text-xs bg-white text-zinc-950 w-3/4 mx-auto h-6 mb-2 hover:bg-zinc-950 hover:text-white transition duration-300">
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

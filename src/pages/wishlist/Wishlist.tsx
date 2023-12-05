/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../component/reuseable/Loading/Loading";
import {
  useGetCartPItemsQuery,
  useGetProductQuery,
  usePostCartItemMutation,
} from "../../features/api/products/productApi";
import ProductListUI from "../sharedPages/ProductListUI";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
type ProductType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  type: string;
  pictures: string;
};
const Wishlist = () => {
  const navigate = useNavigate();
  const { user }: any = useContext(AuthContext);
  const { data: userCartProduct = [] } = useGetCartPItemsQuery(user?.email);
  const { pathname } = useLocation();
  const query = {
    page: 0,
    size: 0,
    keyword: "",
  };
  const { data, isLoading, refetch } = useGetProductQuery(query, {
    refetchOnMountOrArgChange: true,
  });
  const [addToCart] = usePostCartItemMutation();

  const handleAddToCart = (id: string) => {
    const cartData = {
      id,
      email: user.email,
    };
    if (user?.email) {
      const allreadyAdded = userCartProduct.find(
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
  if (isLoading) {
    return <Loading />;
  }
  const ids = localStorage.getItem("wishlist");

  if (ids) {
    const wishlistproducts = data?.products.filter((product: ProductType) =>
      ids?.includes(product._id)
    );
    const handledeleteFormWishlist = (id: string) => {
      const wishlistIds = JSON.parse(ids);
      const updatedArray = wishlistIds.filter((aId: string) => aId !== id);
      localStorage.setItem("wishlist", JSON.stringify(updatedArray));
      refetch();
      toast.success("Removed From Your WishList");
    };
    return (
      <div>
        <div>
          {wishlistproducts?.length ? (
            <table className="table w-full">
              <thead>
                <tr>
                  <th className="rounded-none border bg-transparent">Image</th>
                  <th className="border bg-transparent">Product</th>
                  {pathname.includes("cart") ? (
                    <th className="rounded-none border bg-transparent">
                      Quantity
                    </th>
                  ) : (
                    <th className="rounded-none border bg-transparent">
                      Add to Cart
                    </th>
                  )}
                  <th className="border bg-transparent">Price</th>
                  <th className="rounded-none border bg-transparent">Remove</th>
                </tr>
              </thead>
              <tbody>
                {wishlistproducts?.map((product: ProductType) => (
                  <ProductListUI
                    key={product._id}
                    product={product}
                    handledelete={handledeleteFormWishlist}
                    handleAddToCart={handleAddToCart}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <h1 className="text-center my-20">
              You didn't add any product to your wishlist
            </h1>
          )}
        </div>
      </div>
    );
  }
};

export default Wishlist;

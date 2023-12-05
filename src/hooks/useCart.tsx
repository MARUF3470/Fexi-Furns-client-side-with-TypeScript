import { useGetProductQuery } from "../features/api/products/productApi";

const query = {
  page: 0,
  size: 0,
  keyword: "",
};
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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useCart = (ids: any) => {
  const { data } = useGetProductQuery(query);
  const cartItemIds = ids.map((id: { _id: string; id: string }) => id.id);
  const cartProducts = data?.products.filter((product: ProductType) =>
    cartItemIds?.includes(product._id)
  );
  return cartProducts;
};

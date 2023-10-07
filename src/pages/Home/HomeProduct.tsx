import { useDispatch, useSelector } from "react-redux";
import { useGetProductQuery } from "../../features/api/products/productApi";
import ProductCard from "../products/ProductCard";
import Loading from "../../component/reuseable/Loading/Loading";
import { toggle, toggleCategories } from "../../features/filter/filterSlice";

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
const HomeProduct = () => {
  const { data, isLoading } = useGetProductQuery(null);
  console.log(data);
  const filter = useSelector((state) => state.filter);
  console.log(filter);
  const { stock, categories } = filter;
  console.log(categories);
  const dispatch = useDispatch();
  const activeClass = "text-white bg-indigo-500 border-white";
  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (data?.length) {
    content = data.map((product: ProductType) => (
      <ProductCard key={product._id} product={product} />
    ));
  }
  if (
    data?.length &&
    (filter.stock || filter.categories.length || filter.keyword)
  ) {
    content = data
      .filter((product: ProductType) => {
        if (stock) {
          return product.quantity > 0;
        }
        return product;
      })
      .filter((product: ProductType) => {
        if (filter.categories.length) {
          return filter.categories.includes(product.category);
        }
        return product;
      })
      .filter((product: ProductType) => {
        if (filter.keyword) {
          return product.name
            .toLowerCase()
            .includes(filter.keyword.toLowerCase());
        }
        return product;
      })
      .map((product: ProductType) => (
        <ProductCard key={product._id} product={product} />
      ));
  }
  return (
    <div>
      <div className="mt-20 text-center">
        <h3 className="text-3xl font-bold text-slate-950 mb-5">Our Product</h3>
        <p className="text-sm text-slate-950">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Animi
          nostrum repudiandae molestias rem nisi quis a eum corrupti porro
          optio!
        </p>
      </div>
      <div className="flex justify-center gap-4 my-10">
        <button
          onClick={() => dispatch(toggle())}
          className={`text-slate-950 transition duration-200 border px-3 py-2 rounded-full font-semibold ${
            stock ? activeClass : null
          } `}
        >
          Stock
        </button>
        <button
          onClick={() => dispatch(toggleCategories("new arrival"))}
          className={`text-slate-950 transition duration-200 border px-3 py-2 rounded-full font-semibold ${
            categories.includes("new arrival") ? activeClass : null
          } `}
        >
          New Arrival
        </button>
        <button
          onClick={() => dispatch(toggleCategories("featured"))}
          className={`text-slate-950 transition duration-200 border px-3 py-2 rounded-full font-semibold ${
            categories.includes("featured") ? activeClass : null
          } `}
        >
          Featured
        </button>
        <button
          onClick={() => dispatch(toggleCategories("tending"))}
          className={`text-slate-950 transition duration-200 border px-3 py-2 rounded-full font-semibold ${
            categories.includes("tending") ? activeClass : null
          } `}
        >
          Tending
        </button>
        <button
          onClick={() => dispatch(toggleCategories("on sale"))}
          className={`text-slate-950 transition duration-200 border px-3 py-2 rounded-full font-semibold ${
            categories.includes("on sale") ? activeClass : null
          } `}
        >
          On Sale
        </button>
      </div>
      <div>{content}</div>
    </div>
  );
};

export default HomeProduct;

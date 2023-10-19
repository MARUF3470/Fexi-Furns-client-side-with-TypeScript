import { useDispatch, useSelector } from "react-redux";
import { useGetProductQuery } from "../../features/api/products/productApi";
import ProductCard from "../products/ProductCard";
import Loading from "../../component/reuseable/Loading/Loading";
import { toggle, toggleCategories } from "../../features/filter/filterSlice";
import { useState } from "react";
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
type QueryType = {
  page: number;
  size: string;
  keyword: string;
};

const HomeProduct = () => {
  const [page, setPage] = useState<number>(0);
  const [size, setSize] = useState<string>("1");
  const filter = useSelector((state) => state.filter);
  const { stock, categories, keyword } = filter;
  const query: QueryType = {
    page,
    size,
    keyword,
  };
  const { data, isLoading } = useGetProductQuery(query, {
    refetchOnMountOrArgChange: true,
  });
  const products = data?.products;
  const count = data?.count;
  const pages: number = Math.ceil(count / parseInt(size));
  const buttons = Array.from({ length: pages }, (_, index) => index);
  const dispatch = useDispatch();
  const activeClass = "text-white bg-indigo-500 border-white";
  let content;
  if (isLoading) {
    content = <Loading />;
  }
  if (products?.length) {
    content = products.map((product: ProductType) => (
      <ProductCard key={product._id} product={product} />
    ));
  }

  if (products?.length && (filter.stock || filter.categories.length)) {
    content = products
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
      .map((product: ProductType) => (
        <ProductCard key={product._id} product={product} />
      ));
  }
  return (
    <div>
      <div className="mt-20 sm:w-11/12 mx-auto text-center">
        <h3 className="text-3xl font-bold text-slate-950 mb-5">Our Product</h3>
        <p className="text-sm text-slate-950">
          We manufacture all kind home and office furniture <br /> We are a
          well-known furniture making company in Bangladesh. Our products have a
          greate value all over the country.
        </p>
      </div>
      <div className="w-3/4 mx-auto flex justify-center flex-wrap gap-4 my-10">
        <button
          onClick={() => dispatch(toggle())}
          className={`text-slate-950 transition duration-200 border px-3 py-2 rounded-full font-semibold ${
            stock ? activeClass : null
          }`}
        >
          Stock
        </button>
        <button
          onClick={() => dispatch(toggleCategories("new arrival"))}
          className={`text-slate-950 transition duration-200 border px-3 py-2 rounded-full font-semibold ${
            categories.includes("new arrival") ? activeClass : null
          }`}
        >
          New Arrival
        </button>
        <button
          onClick={() => dispatch(toggleCategories("featured"))}
          className={`text-slate-950 transition duration-200 border px-3 py-2 rounded-full font-semibold ${
            categories.includes("featured") ? activeClass : null
          }`}
        >
          Featured
        </button>
        <button
          onClick={() => dispatch(toggleCategories("tending"))}
          className={`text-slate-950 transition duration-200 border px-3 py-2 rounded-full font-semibold ${
            categories.includes("tending") ? activeClass : null
          }`}
        >
          Tending
        </button>
        <button
          onClick={() => dispatch(toggleCategories("on sale"))}
          className={`text-slate-950 transition duration-200 border px-3 py-2 rounded-full font-semibold ${
            categories.includes("on sale") ? activeClass : null
          }`}
        >
          On Sale
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 w-3/4 mx-auto gap-4">
        {content}
      </div>
      <div className="w-3/4 mx-auto my-10 flex flex-wrap">
        <div>
          {buttons.map((buttonNumber) => (
            <button
              onClick={() => setPage(buttonNumber)}
              className={`btn btn-circle m-1 ${
                page === buttonNumber && "bg-violet-500 text-white"
              }`}
              key={buttonNumber}
            >
              {buttonNumber + 1}
            </button>
          ))}
        </div>
        <div>
          <span>Size:</span>
          <select
            onChange={(e) => setSize(e.target.value)}
            className="ml-3 select select-primary rounded-sm"
          >
            <option value="1">1</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HomeProduct;

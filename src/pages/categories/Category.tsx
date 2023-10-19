/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
const Category = ({ category }: any) => {
  return (
    <div className="flex justify-center items-center">
      <Link
        to={`category/${category?.name}`}
        className="spin-button border-zinc-950 hover:border-violet-700 hover:border-dashed flex justify-center items-center border rounded-full w-36 h-36"
      >
        <div>
          <img
            src={category.img}
            className="text-slate-950 w-14 h-14 mx-auto"
          />
          <p className="text-center text-violet-700 mt-1 text-xs">
            {category.name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Category;

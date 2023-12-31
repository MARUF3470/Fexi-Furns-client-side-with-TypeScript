import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { keywordSearch } from "../../features/filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";

type ToggleDrawerType = {
  toggleDrawer2: () => void;
};
type FilterType = {
  stock: boolean;
  categories: string[];
  keyword: string;
};
type StateType = {
  api: object;
  filter: FilterType;
};

const SearchDrawer = ({ toggleDrawer2 }: ToggleDrawerType) => {
  const dispatch = useDispatch<Dispatch>();
  const filter = useSelector((state: StateType) => state.filter);
  const { keyword } = filter;
  const { reset, handleSubmit, register } = useForm<FilterType>();
  const handleformSubmit = (data: FilterType) => {
    if (data.keyword.length) {
      dispatch(keywordSearch(data.keyword));
      reset();
      toggleDrawer2();
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleformSubmit)}
        className="flex rounded-full bg-white mx-auto w-1/2 shadow-md"
      >
        <input
          type="text"
          {...register("keyword")}
          placeholder="Enter Your Search Keyword..."
          className="input text-xs input-bordered w-full py-2 px-4 rounded-l-full mt-3 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
        />
        <button className="bg-violet-600 mt-3 hover:bg-violet-700 text-white py-2 px-4 rounded-r-full">
          <BsSearch className="text-2xl" />
        </button>
      </form>
      <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
      <ul className="menu bg-base-100 text-base-content">
        <div className="absolute bottom-10 right-1/2">
          <motion.label
            onClick={toggleDrawer2}
            whileHover={{ rotate: 60 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
            htmlFor="my-drawer-4"
            className="drawer-button"
          >
            <IoMdClose className="w-8 h-8"></IoMdClose>
          </motion.label>
        </div>
        {keyword.length ? (
          <div className="flex justify-center items-center gap-3 bg-slate-200 w-16 mx-auto px-20 py-2">
            <p>{keyword.toUpperCase()}</p>
            <button
              onClick={() => dispatch(keywordSearch(""))}
              className="btn btn-circle btn-xs btn-outline"
            >
              X
            </button>
          </div>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default SearchDrawer;

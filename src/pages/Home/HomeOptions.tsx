import { Link } from "react-router-dom";
import "./HomeOption.css";

const HomeOptions = () => {
  return (
    <div className="grid grid-cols-5 gap-12 mx-auto mt-20">
      <Link
        to={"/"}
        className="spin-button border-zinc-950 hover:border-violet-700 hover:border-dashed flex justify-center items-center border rounded-full w-36 h-36"
      >
        {/* <div>
          <img src={bedImage} className="text-slate-950 w-14 h-14 mx-auto" />
          <p className="text-center text-violet-700 mt-1 text-xs">Bedroom</p>
        </div> */}
      </Link>
    </div>
  );
};

export default HomeOptions;

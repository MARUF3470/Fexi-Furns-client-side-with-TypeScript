import { PiOfficeChair, PiArmchair } from "react-icons/pi";

import { GiRockingChair } from "react-icons/gi";
import { BsInboxes } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./HomeOption.css";
import bedImg from "../../assets/75.png";
import chairImg from "../../assets/75 (1).png";
import dinnigImg from "../../assets/75 (2).png";
import loungeImg from "../../assets/75 (3).png";
import officeChairImg from "../../assets/75 (4).png";

const HomeOptions = () => {
  const categories = [
    {
      id: 1,
      name: "Bedroom",
      img: bedImg,
    },
    {
      id: 2,
      name: "Chair",
      img: chairImg,
    },
    {
      id: 1,
      name: "Dinning",
      img: dinnigImg,
    },
    {
      id: 1,
      name: "Lounge",
      img: loungeImg,
    },
    {
      id: 1,
      name: "Office Chair",
      img: officeChairImg,
    },
  ];
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

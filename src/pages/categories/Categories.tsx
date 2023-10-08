import bedImg from "../../assets/75.png";
import chairImg from "../../assets/75 (1).png";
import dinnigImg from "../../assets/75 (2).png";
import loungeImg from "../../assets/75 (3).png";
import officeChairImg from "../../assets/75 (4).png";
import "./Categories.css";
import Category from "./Category";

const Categories = () => {
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
      {categories?.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;

import { Link, useParams } from "react-router-dom";
import { useGetSingProductQuery } from "../../features/api/products/productApi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../Home/Home.css";
import { EffectFade, Navigation, Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";

type ImageType = {
  _id: string;
  path: string;
  filename: string;
};
const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { data } = useGetSingProductQuery(id);
  const [count, setCount] = useState(1);
  return (
    <div>
      <div className="text-center bg-slate-100 py-14">
        <h1 className="text-xl font-semibold text-slate-950">CONTACT US</h1>
        <p className="text-xs mt-3">
          <Link
            to="/"
            className="text-slate-950 hover:text-violet-700 transition duration-300"
          >
            HOME<span> </span>
          </Link>
          <Link
            to="/"
            className="text-slate-950 hover:text-violet-700 transition duration-300"
          >
            <span> / PRODUCTS </span>
          </Link>
          / <span className="uppercase">{data?.name}</span>
        </p>
      </div>
      <div className="flex w-3/4 justify-center items-center mx-auto gap-10 my-10">
        <div>
          <Swiper
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            effect={"fade"}
            loop={true}
            navigation={true}
            pagination={true}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            className="mySwiper w-[400px] h-[350px] z-0"
          >
            {data?.images?.map((image: ImageType) => (
              <SwiperSlide key={image._id}>
                <img
                  key={image._id}
                  src={`http://localhost:5000/uploads/${image.filename}`}
                  alt={image.filename}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <p className="text-zinc-950 text-xs">
            Availability: {data?.quantity} in Stock
          </p>
          <p className="text-zinc-950 text-3xl">{data?.name}</p>
          <p className="text-zinc-950 my-2">${data?.price}</p>
          <p className="text-sm text-zinc-950">{data?.description}</p>
          <div className="flex h-12 gap-4 my-5">
            <div className="flex w-fit">
              <div className="border border-violet-700 border-r-0 h-12 w-8 flex justify-center items-center">
                <button
                  onClick={() => {
                    if (count > 1) {
                      return setCount(count - 1);
                    }
                  }}
                  className={`w-full h-full text-zinc-950 ${
                    count > 1 &&
                    " hover:bg-violet-600 transition duration-300 hover:text-white"
                  }`}
                >
                  -
                </button>
              </div>
              <div className="border border-violet-700 h-12 flex justify-center items-center w-14">
                {count}
              </div>
              <div className="border border-violet-700 border-l-0 h-12 w-8 flex justify-center items-center">
                <button
                  onClick={() => setCount(count + 1)}
                  className="w-full h-full text-zinc-950 hover:bg-violet-600 transition duration-300 hover:text-white"
                >
                  +
                </button>
              </div>
            </div>
            <button className="bg-black text-white hover:bg-violet-600 duration-300 px-6 text-xs">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

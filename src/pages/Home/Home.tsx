import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Home.css";
import { EffectFade, Navigation, Autoplay, Pagination } from "swiper/modules";
import HomeOptions from "./HomeOptions";
import HomeProduct from "./HomeProduct";
import HomeBanner from "./HomeBanner";
import HomeNews from "./HomeNews";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [remount, setRemount] = useState<boolean>(false);
  useEffect(() => {
    window.onload = () => {
      setLoading(true);
    };
  }, []);
  useEffect(() => {
    setRemount(true);
  }, []);
  return (
    <>
      <Swiper
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        loop={true}
        navigation={true}
        pagination={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper w-[1349px] h-[550px] z-0"
      >
        <SwiperSlide>
          <div className=" text-center ">
            <div data-swiper-parallax={-300}>
              <h3
                className={`absolute ${
                  loading || remount
                    ? "transition-text text-center text-fixed"
                    : "noElement"
                }  w-full  font-semibold text-xl text-white`}
              >
                New Products
              </h3>
            </div>
            <div className="subtitle" data-swiper-parallax={-200}>
              <h2
                className={`absolute ${
                  loading || remount
                    ? "transition-text-sub text-fixed-sub"
                    : "noElement"
                } w-full text-center font-bold text-5xl text-white`}
              >
                Flexible Chair
              </h2>
            </div>
            <div
              className={`text absolute ${
                loading || remount
                  ? "transition-text-text text-fixed-text"
                  : "noElement"
              } w-full text-center text-white text-sm `}
              data-swiper-parallax={-100}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                nec.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              className={`hover:bg-black hover:border-black transition duration-500 border border-purple-700 px-8 py-3 text-white bg-purple-700 rounded-none text-xs  absolute ${
                loading || remount
                  ? "transition-btn slideDown-btn btn-fixed"
                  : "noElement"
              }`}
            >
              Shop Now
            </button>
          </div>
          <img src="https://furns-react.netlify.app/images/slider-image/slider-2-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <div className=" text-center ">
            <div data-swiper-parallax={-300}>
              <h3
                className={`absolute ${
                  loading || remount
                    ? "transition-text text-center text-fixed"
                    : "noElement"
                }  w-full  font-semibold text-xl text-white`}
              >
                Best Seller
              </h3>
            </div>
            <div className="subtitle" data-swiper-parallax={-200}>
              <h2
                className={`absolute ${
                  loading || remount
                    ? "transition-text-sub text-fixed-sub"
                    : "noElement"
                } w-full text-center font-bold text-5xl text-white`}
              >
                Creative
              </h2>
            </div>
            <div
              className={`text absolute ${
                loading || remount
                  ? "transition-text-text text-fixed-text"
                  : "noElement"
              } w-full text-center text-white text-sm `}
              data-swiper-parallax={-100}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                nec.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button
                className={`hover:bg-black hover:border-black transition duration-500 border border-purple-700 px-8 py-3 text-white bg-purple-700 rounded-none text-xs  absolute ${
                  loading || remount
                    ? "transition-btn slideDown-btn btn-fixed"
                    : "noElement"
                }`}
              >
                Shop Now
              </button>
            </div>
          </div>
          <img src="https://furns-react.netlify.app/images/slider-image/slider-2-2.jpg" />
        </SwiperSlide>
      </Swiper>
      <HomeOptions />
      <HomeProduct />
      <HomeBanner />
      <HomeNews />
    </>
  );
};

export default Home;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/image/BM-removebg-preview.png";
import slide2 from "../../assets/image/Jamuna-Lp-Gas-removebg-preview.png";
import slide3 from "../../assets/image/uni-removebg-preview.png";
import slide4 from "../../assets/image/basumdara-removebg-preview.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const Catalog = () => {
  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => {
        setCatalog(data);
        setLoading(false);
      });
  }, []);
  console.log(catalog);
  return (
    <div className="mt-8 py-12 font-sans">
      <h2 className="text-2xl font-bold mt-8">RELATED PRODUCTS</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {loading ? (
          <h2>loading---</h2>
        ) : (
          catalog?.map((cata, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-xs p-6 rounded-md shadow-md bg-slate-400 h-auto dark:bg-gray-900 dark:text-gray-50">
                <img
                  src={cata.img}
                  alt=""
                  className="object-cover h-52 object-center w-full rounded-md dark:bg-gray-500 hover:bg-red-400"
                />
                <div className="mt-6 mb-2">
                  <div className="flex justify-between">
                    <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">
                      LP_GAS[এলপিজি গ্যাস]
                    </span>
                    <h2>{cata.price}TK</h2>
                  </div>
                  <h2 className="text-xl font-semibold tracki">
                    {cata.name} Cylinder-12Kg
                  </h2>
                </div>
                <p className="dark:text-gray-100">
                  Mauris et lorem at elit tristique dignissim et ullamcorper
                </p>
                <button className="btn btn-success flex justify-end">
                  Details
                </button>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default Catalog;

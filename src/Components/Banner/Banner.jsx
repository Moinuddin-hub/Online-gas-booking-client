// import banner from '../../assets/Online.webp'

// const Banner = () => {
//     return (
//         <>
//             <div className="carousel w-full  mb-16">
//   <div id="slide1" className="carousel-item relative w-full">
//     {/* <img src="https://i.ibb.co/2SSRdMn/banner-1.jpg" className="w-full h-96" /> */}
//     <img src={banner} className="w-full h-96" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide4" className="btn btn-circle">❮</a>
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide2" className="carousel-item relative w-full">
//     <img src="https://i.ibb.co/whbKsB7/banner-2.png" className="w-full h-96" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide1" className="btn btn-circle">❮</a>
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide3" className="carousel-item relative w-full">
//     <img src="https://i.ibb.co/4JwV3pv/banner-3.png" className="w-full h-96" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide2" className="btn btn-circle">❮</a>
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//   </div>
//   <div id="slide4" className="carousel-item relative w-full">
//     <img src="https://i.ibb.co/f9L3Hkb/banner-4.jpg" className="w-full h-96" />
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide3" className="btn btn-circle">❮</a>
//       <a href="#slide1" className="btn btn-circle">❯</a>
//     </div>
//   </div>
// </div>
//         </>
//     );
// };

// export default Banner;



import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from '../../assets/image/banner-1.jpg'
import img2 from '../../assets/image/banner2.jpg'
import img3 from '../../assets/image//banner3.jpeg'
import img4 from '../../assets/image/Banner-4.jpg'
import img5 from '../../assets/image/Banner5.jpg'
import img6 from '../../assets/image/Banner6.jpg'
const Banner = () => {
  return (
    <Carousel className="">
      <div>
        <img src={img1}  className=""/>
     
      </div>
      <div>
        <img src={img2} />
   
      </div>
      <div>
        <img src={img3} />
      
      </div>
      <div>
        <img src={img4} />
      
      </div>
      <div>
        <img src={img5} />
      
      </div>
      <div>
        <img src={img6} />
      
      </div>
    </Carousel>
  );
};

export default Banner;

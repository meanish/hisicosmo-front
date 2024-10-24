"use client";

import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageWithFallback } from "../ui/imageWithFallBack";
import imageOne from "@/public/images/carousel-image/imageOne.jpg";
import imageTwo from "@/public/images/carousel-image/imageTwo.jpg";
import imageThree from "@/public/images/carousel-image/imageThree.jpg";
import imageFour from "@/public/images/carousel-image/imageFour.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        " max-md:hidden  absolute right-1 top-1/2 bg-white/15 text-white grid place-items-center  rounded-full size-10 z-50 cursor-pointer hover:text-gray-400 shadow-lg "
      }
      onClick={onClick}
    >
      <IoArrowForward size={24} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        " max-md:hidden absolute left-1 top-1/2 bg-white/15 text-white border grid place-items-center  rounded-full size-10 z-50 cursor-pointer hover:text-gray-400 shadow-lg "
      }
      onClick={onClick}
    >
      <IoArrowBack size={24} />
    </div>
  );
}

const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div className="">
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <>
      <div className="slider-carausel min-h-fit slide-container w-full relative 2xl:container ">
        <Slider {...settings}>
          <div className="slide-one relative w-full h-[420px] bg-fixed bg-no-repeat overflow-hidden">
            <ImageWithFallback
              src={imageOne}
              fill
              sizes="100vw"
              alt="background-image"
              className="object-cover z-10 bg-fixed object-center"
            ></ImageWithFallback>
          </div>
          <div className="slide-one relative w-full h-[420px] bg-fixed bg-no-repeat overflow-hidden">
            <ImageWithFallback
              src={imageTwo}
              fill
              sizes="100vw"
              alt="background-image"
              className="object-cover z-10 bg-fixed object-center"
            ></ImageWithFallback>
          </div>{" "}
          <div className="slide-one relative w-full h-[420px] bg-fixed bg-no-repeat overflow-hidden">
            <ImageWithFallback
              src={imageThree}
              fill
              sizes="100vw"
              alt="background-image"
              className="object-cover z-10 bg-fixed object-center"
            ></ImageWithFallback>
          </div>{" "}
          <div className="slide-one relative w-full h-[420px] bg-fixed bg-no-repeat overflow-hidden">
            <ImageWithFallback
              src={imageFour}
              fill
              sizes="100vw"
              alt="background-image"
              className="object-cover z-10 bg-fixed object-center"
            ></ImageWithFallback>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default HeroCarousel;

// export const FullWidthBackground = ({
//   title,
//   description,
//   link_text,
//   link,
//   featured_image,
//   slider_type,
// }) => {
//   return (
//     <>
//       {isImage(featured_image) ? (
//         <div className="slide-one relative w-full h-[500px] lg:h-[600px] bg-fixed bg-no-repeat overflow-hidden">
//           <div className="bg-black/60 z-20 absolute top-0 left-0 w-full h-full"></div>
//           <ImageWithFallback
//             src={`https://outrightnepal.com.np/vumiCore/public${featured_image}`}
//             fill
//             sizes="100vw"
//             alt="background-image"
//             className="object-cover z-10 bg-fixed object-center"
//           ></ImageWithFallback>
//           <div className="container flex flex-col gap-2 z-30 w-full justify-center items-center h-full">
//             <h1 className="text-white z-30 w-full lg:w-10/12 text-center text-xl md:text-4xl">
//               {title}
//             </h1>
//             <p className="text-white text-pretty w-full max-md:text-[14px] lg:w-10/12 text-center z-30">
//               {description}
//             </p>
//             {link && link_text ? (
//               <Link className="z-30" href={link}>
//                 <Button className="hover:bg-gradientMix bg-primaryBtnBg">
//                   {link_text}
//                 </Button>
//               </Link>
//             ) : null}
//           </div>
//         </div>
//       ) : isVideo(featured_image) ? (
//         <div className="video-container relative w-full h-[500px] lg:h-[600px]">
//           <div className="bg-black/60 z-30 absolute top-0 left-0 w-full h-full"></div>

//           <video
//             autoPlay
//             muted
//             loop
//             className="w-full z-40 h-full object-cover"
//           >
//             <source
//               src={`https://outrightnepal.com.np/vumiCore/public${featured_image}`}
//               type="video/mp4"
//             />
//           </video>
//           <div className="container  absolute inset-0 z-50 flex flex-col gap-2 justify-center items-center">
//             <h1 className="text-white z-30 w-full lg:w-10/12 text-center text-xl md:text-4xl">
//               {title}
//             </h1>
//             <p className="text-white w-full text-pretty lg:w-10/12 max-md:text-[14px] text-center z-30">
//               {description}
//             </p>
//             {link && link_text ? (
//               <Link href={link}>
//                 <Button className="z-30 hover:bg-gradientMix  bg-primaryBtnBg">
//                   {link_text}
//                 </Button>
//               </Link>
//             ) : null}
//           </div>
//         </div>
//       ) : null}
//     </>
//   );
// };
// export const HalfImageRight = ({
//   title,
//   description,
//   link_text,
//   link,
//   featured_image,
//   slider_type,
// }) => {
//   return (
//     <div className="half-image-right container !p-0 bg-gradient-to-r from-gradientPurple to-gradientPink w-full !grid md:grid-cols-2 place-items-center gap-4  h-[500px] lg:h-[600px]">
//       <div className="my-10 h-full max-md:px-2 max-md:my-4 pl-4 text-center flex flex-col gap-2 justify-center items-center">
//         <h1 className="text-white  text-xl md:text-4xl">{title} </h1>
//         <p className="text-white md:pl-6 text-pretty line-clamp-[11] max-md:text-[14px]">
//           {description}
//         </p>
//         {link && link_text ? (
//           <Link href={link}>
//             <Button className="z-30 hover:bg-gradientMix  bg-primaryBtnBg">
//               {link_text}
//             </Button>
//           </Link>
//         ) : null}
//       </div>

//       <div className="max-md:hidden relative h-full w-full">
//         {isImage(featured_image) ? (
//           <ImageWithFallback
//             // src={joe}
//             src={`https://outrightnepal.com.np/vumiCore/public${featured_image}`}
//             fill
//             sizes="100vw"
//             alt="background-image"
//             className="object-cover"
//           ></ImageWithFallback>
//         ) : isVideo(featured_image) ? (
//           <video
//             autoPlay
//             muted
//             loop
//             className="w-full z-40 h-full object-cover"
//           >
//             <source
//               src={`https://outrightnepal.com.np/vumiCore/public${featured_image}`}
//               type="video/mp4"
//             />
//           </video>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export const HalfImageLeft = ({
//   title,
//   description,
//   link_text,
//   link,
//   featured_image,
//   slider_type,
// }) => {
//   return (
//     <div className="half-image-left container !p-0 bg-gradient-to-r from-gradientMix to-gradientPink !grid md:grid-cols-2 place-items-center w-full gap-4 h-[500px] lg:h-[600px]">
//       <div className="max-md:hidden relative h-full w-full">
//         {isImage(featured_image) ? (
//           <ImageWithFallback
//             // src={joe}
//             src={`https://outrightnepal.com.np/vumiCore/public${featured_image}`}
//             fill
//             sizes="100vw"
//             alt="background-image"
//             className="object-cover"
//           ></ImageWithFallback>
//         ) : isVideo(featured_image) ? (
//           <video
//             autoPlay
//             muted
//             loop
//             className="w-full z-40 h-full object-cover"
//           >
//             <source
//               src={`https://outrightnepal.com.np/vumiCore/public${featured_image}`}
//               type="video/mp4"
//             />
//           </video>
//         ) : null}
//       </div>
//       <div className="h-full my-10 max-md:px-2 max-md:my-4 text-center pr-4 flex flex-col gap-2 justify-center items-center">
//         <h1 className="text-white text-xl md:text-4xl">{title} </h1>
//         <p className="text-white md:pr-6 text-pretty  line-clamp-[11] max-md:text-[14px]">
//           {description}
//         </p>
//         {link && link_text ? (
//           <Link className="z-30" href={link}>
//             <Button className="hover:bg-gradientMix  bg-primaryBtnBg">
//               {link_text}
//             </Button>
//           </Link>
//         ) : null}
//       </div>
//     </div>
//   );
// };

import React from "react";
import hero_image from "@/public/images/hero-image.png";
import Image from "next/image";
import truck from "@/public/images/Truck.png";
import truck_logo from "@/public/images/truck-logo.png";
import family from "@/public/images/family.png";
import Best_Seller_Product from "./best_seller_product";
import Flash_Sales from "./flash_sales";
import Price_varaint from "./price_variant";
import Best_Deal_On_Brands from "./best_deal_on_brands";
import CarousalSection from "./carousal_section";
import ad1 from "../../public/images/ads/2.png"
import ad2 from "../../public/images/ads/1.png"
import CatSliderAds from "./catSliderads";

const HomePage = ({ token }) => {
  return (
    <div className="flex flex-col gap-10">
      <HeroSection />
      <Best_Seller_Product />
      <Flash_Sales token={token} />
      <Price_varaint />
      <StaticAds />
      <CatSliderAds />
      <CarousalSection />
      <Flash_Sales token={token} />
      <Best_Deal_On_Brands />
    </div>
  );
};

export default HomePage;

export const HeroSection = () => {
  return (
    <div className="">
      <div className="container">
        <div className="flex justify-between mb-2">
          <div className="text-section w-[430px] my-auto flex items-end">
            <h1 className="text-primary_blue font-bold text-4xl">
              Care For Your Skin, Care For Your Beauty
            </h1>
          </div>
          <div className="image-section w-[60%]">
            <Image
              src={hero_image}
              width={914}
              height={573}
              alt="hero-section-image"
            />
          </div>
        </div>
      </div>

      {/* <div className="ad-section flex justify-between gap-3 bg-ad_bg_gray h-[98px] w-11/12 rounded mx-auto my-10 overflow-hidden">
        <div className="truck-image relative overflow-hidden px-[50px]">
          <Image src={truck} width={109} height={170} alt="truck-image" />
          <div className="rectangle-blue w-[112px] h-[112px] bg-ad_blue_circle rounded-full absolute -top-[60px] -left-[60px]">
            {" "}
          </div>

          <div className="rectangle-blue w-[50px] h-[50px] bg-cyan-200 rounded-full absolute -top-[25px] right-0">
            {" "}
          </div>
          <div className="rectangle-ligh-blue"></div>
        </div>

        <div className="truck-logo-text flex items-center gap-3">
          <Image
            src={truck_logo}
            width={50}
            height={50}
            style={{ height: "50px" }}
            alt="truck-image"
          />
          <div>
            <p className="font-semibold text-xl">Free delivery on next day</p>
            <span className="text-text_gray text-sm font-normal">
              Spend only $25 on your purchase
            </span>
          </div>
        </div>
        <div className="shop-now-btn flex items-center gap-3">
          <button className="w-[89px] h-[31px] hover:bg-opacity-20 active:bg-opacity-100 active:scale-90 bg-white rounded-2xl shadow  text-[10px] font-semibold ">
            SHOP NOW
          </button>

          <div className="flex items-center gap-1">
            <p className="text-text_gray text-sm font-normal ">
              We are available
            </p>
            <span className="text-black text-xl font-semibold">24/7</span>
          </div>
        </div>
        <div className="family-pic relative overflow-hidden pr-10 mr-5">
          <Image
            className="w-[209px] h-[98px] z-[2] relative"
            src={family}
            width={209}
            height={98}
            alt="family-image"
          />
          <div className="rectangle-blue w-[300px] z-[1] h-[300px] bg-cyan-200 rounded-full absolute top-[15px] -right-4">
            {" "}
          </div>
        </div>
      </div> */}
    </div>
  );
};


const StaticAds = () => {
  return (
    <div className="container">
      <div className="static_images_ads relative grid grid-cols-2 gap-10 h-[40vh] overflow-hidden">
        <div className="relative overflow-hidden">
          <Image src={ad1} fill alt="ad1" className="object-cover transition-transform  duration-300 ease-in-out transform hover:scale-110" />
        </div>
        <div className="relative overflow-hidden">
          <Image src={ad2} fill alt="ad2" className="object-cover transition-transform overflow-hidden duration-300 ease-in-out transform hover:scale-110" />
        </div>
      </div>
    </div>
  )

}

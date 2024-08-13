import React from "react";
import hero_image from "@/public/images/hero-image.png";
import Image from "next/image";
import truck from "@/public/images/Truck.png";
import truck_logo from "@/public/images/truck-logo.png";
import family from "@/public/images/family.png";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default HomePage;

export const HeroSection = () => {
  return (
    <div className="container">
      <div className="flex justify-between mb-14">
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

      <div className="ad-section flex justify-between gap-3 bg-ad_bg_gray h-[98px] w-11/12 rounded mx-auto my-10 overflow-hidden">
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
      </div>
    </div>
  );
};

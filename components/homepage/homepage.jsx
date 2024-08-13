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

      <div className="ad-section flex justify-between bg-ad_bg_gray h-[98px] w-10/12 mx-auto my-10">
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

        <div className="truck-logo-text flex">
          <Image src={truck_logo} width={40} height={40} alt="truck-image" />
          <div>
            <p>Free delivery on next day</p>
            <span>Spend only $25 on your purchase</span>
          </div>
        </div>
        <div className="shop-now-btn">
          <button>SHOP NOW</button>
          <p>
            We are available <span>24/7</span>{" "}
          </p>
        </div>
        <div className="family-pic">
          <Image src={family} width={100} height={100} alt="family-image" />
        </div>
      </div>
    </div>
  );
};

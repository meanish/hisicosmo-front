import Image from "next/image";
import React from "react";
import banner from "@/public/images/banner_image.png";

const BannerImage = () => {
  return (
    <div className="relative w-full h-56">
      <Image src={banner} fill sizes="100vw" alt="banner-image"/>
    </div>
  );
};

export default BannerImage;

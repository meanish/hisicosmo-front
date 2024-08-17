import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import deal_product_image from "@/public/images/best-deal-brand.png";
import Image from "next/image";

const Best_Deal_On_Brands = () => {
  return (
    <div className="p-5 bg-ad_bg_gray">
      <div className="container">
        <div className="header flex items-center justify-between">
          <h3 className="text-bg_footer text-nowrap text-xl font-bold">
            Best Deals On The Brands
          </h3>
          <Link
            href={"#"}
            className="flex ml-auto gap-2 justify-end items-center"
          >
            <span className="text-bg_footer font-normal peer hover:text-primary_gold">
              Explore all
            </span>
            <FaArrowRightLong className="text-bg_footer peer-hover:text-primary_gold" />
          </Link>
        </div>
        <div className="cards-container my-7 flex items-center justify-center gap-4">
          {Array(4)
            .fill(null)
            .map((item, index) => {
              return (
                <div key={index} className="card ">
                  <div className="w-[231px] h-[312px] bg-white relative overflow-hidden rounded-t-lg">
                    <Image
                      src={deal_product_image}
                      fill
                      size="100vw"
                      style={{ objectFit: "cover" }}
                      alt="deal-product-image"
                    />
                  </div>
                  <div className="text-title p-5 bg-white rounded-b-lg w-[231px]">
                    <p className="text-primary_blue font-extrabold  mb-2">
                      Al ziba
                    </p>
                    <span className="text-sm line-clamp-2">
                      Grab a deal on Le Tan Asap.
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Best_Deal_On_Brands;

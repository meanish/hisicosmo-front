"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import deal_product_image from "@/public/images/best-deal-brand.png";
import Image from "next/image";
import { getBrandBasedProducts } from "@/app/api/brands/route";

const Best_Deal_On_Brands = () => {
  const [productList, setProductList] = useState();
  useEffect(() => {
    const getProduct = async () => {
      const res = await getBrandBasedProducts();
      setProductList(res?.data);
    };

    getProduct();
  }, []);

  return (
    <div className="p-5 bg-ad_bg_gray">
      <div className="container">
        <div className="header flex items-center justify-start">
          <h3 className="text-bg_footer text-nowrap text-xl font-bold">
            Best Deals On The Brands
          </h3>
          <Link
            href={"/filters"}
            className="flex ml-auto gap-2 justify-end items-center"
          >
            <span className="text-bg_footer font-normal peer hover:text-primary_gold">
              Explore all
            </span>
            <FaArrowRightLong className="text-bg_footer peer-hover:text-primary_gold" />
          </Link>
        </div>
        <div className="cards-container my-7 flex items-center justify-start gap-6">
          {productList?.slice(0, 4).map((item, index) => {
            return (
              <div key={index} className="card ">
                <div className="w-[231px] h-[290px] bg-white relative overflow-hidden rounded-t-lg">
                  <Image
                    src={item.featured_image}
                    fill
                    size="100vw"
                    style={{ objectFit: "fit" }}
                    alt="deal-product-image"
                  />
                </div>
                <div className="text-title p-5 bg-white rounded-b-lg w-[231px] h-[107px]">
                  <p className="text-primary_blue font-extrabold  mb-2">
                    {item.name}
                  </p>
                  <span className="text-sm line-clamp-2">
                    {item.description}
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

"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import deal_product_image from "@/public/images/best-deal-brand.png";
import Image from "next/image";
import { getBrandBasedProducts } from "@/app/api/brands/route";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../ui/imageWithFallBack";

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
    <div className="md:p-5 bg-ad_bg_gray">
      <div className="container">
        <div className="header flex flex-wrap gap-2 items-center justify-between">
          <h3 className="text-bg_footer md:text-nowrap text-xl md:text-3xl font-bold">
            Best Deals On The Brands
          </h3>
          <Link href={`/filters}`}>
            <div className="explore flex items-center hover:underline text-primary_blue ">
              <div className="to_explore cursor-pointer font-bold text-sm ">
                Explore More
              </div>
              <ArrowRight size={20} />
            </div>
          </Link>
        </div>
        <div className="cards-container my-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-6">
          {productList?.slice(0, 5).map((item, index) => {
            return (
              <div key={index} className="card w-full min-w-48">
                <div className="w-full h-[290px] bg-white relative overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={item.featured_image}
                    fill
                    size="100vw"
                    style={{ objectFit: "fit" }}
                    alt="deal-product-image"
                  />
                </div>
                <div className="text-title p-5 bg-white rounded-b-lg w-full h-[107px]">
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

import Image from "next/image";
import React from "react";
import productSeller from "@/public/images/flash-sales.png";
import HeadingTitle from "../ui/header";
import { ArrowRight } from "lucide-react";

const Best_Seller_Product = () => {
  return (
    <div className="">
      <div className="title_section flex justify-between items-center container" >
        <HeadingTitle title="Bestseller products" />
        <div className="explore flex items-center hover:underline ">
          <div className="to_explore cursor-pointer ">Explore More</div>
          <ArrowRight size={20} />
        </div>
      </div>


      <div className="w-full py-8 bg-primary_blue/40 flex-col justify-start items-center">
        <div className="container flex  justify-between gap-4">
          {Array(8)
            .fill(null)
            .map((item, index) => {
              return (
                <div className="flex flex-col items-center gap-3">
                  <div
                    key={index}
                    className="bg-white p-3 flex justify-center items-center rounded-full w-28 h-28"
                  >
                    <Image
                      className="w-24 h-24 object-cover rounded-full"
                      src={productSeller}
                      alt="product-image"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="flex-col justify-start items-center flex">
                    <p className=" text-center text-sm font-normal">
                      Skincare
                    </p>
                  </div>
                </div>

              );
            })}
        </div>
      </div>
    </div >
  );
};

export default Best_Seller_Product;

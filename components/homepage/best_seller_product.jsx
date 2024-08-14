import Image from "next/image";
import React from "react";
import productSeller from "@/public/images/best-seller-product.png";

const Best_Seller_Product = () => {
  return (
    <div className="text-center  mt-20">
      <h3 className="text-bg_footer mb-3 text-2xl font-bold">
        Bestseller products
      </h3>
      <div className="w-full h-[219px] px-[72px] py-[30px] bg-primary_blue/40 flex-col justify-start items-center inline-flex">
        <div className="h-[159px] justify-end items-start inline-flex">
          {Array(8)
            .fill(null)
            .map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-[144.98px] self-stretch pr-2.5 flex-col justify-center items-start inline-flex"
                >
                  <div className="w-[134.98px] h-[159px] flex-col justify-start items-start flex">
                    <div className="self-stretch h-[159px] flex-col justify-start items-center gap-[13px] flex">
                      <div className="w-[130px] h-[130px] px-[35.50px] pt-[6.06px] pb-[19.07px] bg-white rounded-[130px] flex-col justify-center items-center flex">
                        <Image
                          className="w-[59px] h-[104.87px] relative"
                          src={productSeller}
                          alt="product-image"
                          width={60}
                          height={105}
                        />
                      </div>
                      <div className="self-stretch h-4 pl-[41.06px] pr-[41.07px] flex-col justify-start items-center flex">
                        <p className="self-stretch text-center text-[13px] font-normal">
                          Skincare
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Best_Seller_Product;

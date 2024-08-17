"use client";
import React, { useState } from "react";
import product_image from "@/public/images/flash-sales.png";
import express_delivery from "@/public/images/express-delivery.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FaHeart, FaStar } from "react-icons/fa";
import { LuBadgePercent } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";

const Flash_Sales = () => {
  const [isFav, setIsFav] = useState(false);
  return (
    <div className="h-fit my-20">
      <div className="w-full container flex-col justify-start items-start gap-3 inline-flex relative">
        <div className=" top-section w-full justify-start items-center inline-flex">
          <div className="flex justify-between items-center">
            <h3 className="text-bg_footer text-nowrap text-xl font-bold">
              Flash Sale
            </h3>

            <div className="timer-container ml-20 h-[46.99px] gap-4 p-4 bg-primary_blue rounded-[5px] justify-between items-center inline-flex">
              <div className="day flex items-center gap-2">
                <span className="h-8 w-8 grid place-items-center border-white text-white rounded border">
                  0
                </span>
                <span className="h-8 w-8 grid place-items-center border-white text-white rounded border">
                  0
                </span>
                <span className="text-white text-sm">Day</span>
              </div>
              <div className="day flex items-center gap-2">
                <span className="h-8 w-8 grid place-items-center border-white text-white rounded border">
                  0
                </span>
                <span className="h-8 w-8 grid place-items-center border-white text-white rounded border">
                  0
                </span>
                <span className="text-white text-sm">Hour</span>
              </div>{" "}
              <div className="day flex items-center gap-2">
                <span className="h-8 w-8 grid place-items-center border-white text-white rounded border">
                  0
                </span>
                <span className="h-8 w-8 grid place-items-center border-white text-white rounded border">
                  0
                </span>
                <span className="text-white text-sm">Minute</span>
              </div>{" "}
              <div className="day flex items-center gap-2">
                <span className="h-8 w-8 grid place-items-center border-white text-white rounded border">
                  0
                </span>
                <span className="h-8 w-8 grid place-items-center border-white text-white rounded border">
                  0
                </span>
                <span className="text-white  text-sm">Second</span>
              </div>
            </div>
          </div>

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

        <div className="cards-container w-full overflow-hidden h-fit justify-start items-start gap-[19px] inline-flex">
          {Array(6)
            .fill(null)
            .map((item, index) => {
              return (
                <div key={index} className="card ">  
                  <div className="image-container py-6 w-44 px-3  border-2 grid gap-4 rounded-md">
                    <Image
                      src={express_delivery}
                      width={40}
                      height={40}
                      alt="delivery-logo"
                    />

                    <Image
                      src={product_image}
                      width={200}
                      height={400}
                      alt="product-image"
                    />
                    <div className="rating flex items-center gap-1 text-text_gray mt-4">
                      <span>5</span>
                      <FaStar className="text-primary_blue" />
                      <span>/5</span>
                      <span>(1)</span>
                    </div>
                  </div>
                  <div className="text-des grid gap-2 mt-4">
                    <span className="text-primary_blue">15% off</span>
                    <div className="flex gap-2 text-black">
                      <span className="price"> Rs.1,445 </span>
                      <span className="price line-through"> Rs.2,445 </span>
                    </div>
                    <div className="offer flex text-sm items-center gap-2 text-primary_blue">
                      <LuBadgePercent size={20} />
                      <span>More Offer Inside</span>
                    </div>
                    <p className="line-clamp-2 text-sm">
                      4 ALZIBA CAFFIEN & KERATIN SHAMPOO 500ML bhasdj
                    </p>
                  </div>
                  <div className="add-to-cart flex items-center gap-2 mt-12">
                    <button className="w-[152px] h-[30px] hover:bg-opacity-80 active:scale-90 active:bg-opacity-100 rounded text-sm bg-primary_blue text-white">
                      Add To Cart
                    </button>
                    {isFav ? (
                      <button onClick={() => setIsFav(false)}>
                        <FaHeart
                          size={25}
                          className="text-primary_blue cursor-pointer"
                        />
                      </button>
                    ) : (
                      <button onClick={() => setIsFav(true)}>
                        <FiHeart
                          size={25}
                          className="text-primary_blue cursor-pointer"
                        />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
        </div>

        <div className="next-arrow absolute right-10 hover:bg-gray-100 top-[50%] -translate-y-[50%]  grid place-items-center cursor-pointer h-12 w-12 rounded-full bg-white border shadow">
          <MdArrowForwardIos />
        </div>

        <div className="prev-arrow absolute left-4 top-[50%] hover:bg-gray-100 -translate-y-[50%]  grid place-items-center cursor-pointer h-12 w-12 rounded-full bg-white border shadow">
          <MdArrowBackIos />
        </div>
      </div>
    </div>
  );
};

export default Flash_Sales;

"use client";
import React, { useEffect, useState } from "react";
import product_image from "@/public/images/flash-sales.png";
import express_delivery from "@/public/images/express-delivery.png";
import Image from "next/image";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FaHeart, FaStar } from "react-icons/fa";
import { LuBadgePercent } from "react-icons/lu";
import { FiHeart } from "react-icons/fi";
import { getAllProducts } from "@/app/api/all_products/route";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ImageWithFallback } from "../ui/imageWithFallBack";

const Flash_Sales = () => {
  const [isFav, setIsFav] = useState(false);
  const [allProducts, setAllProducts] = useState();

  useEffect(() => {
    const getProductLists = async () => {
      const res = await getAllProducts();
      setAllProducts(res?.data);
    };

    getProductLists();
  }, []);

  console.log(allProducts, "allproduct");
  return (
    <div className="my-20">
      <Carousel
        opts={{
          align: "start",
        }}
        className="container  px-8"
      >
        <CarouselContent>
          {allProducts?.map((item, index) => {
            const {
              featured_image,
              name,
              id,
              description,
              product_description,
              price,
            } = item;
            return (
              <CarouselItem
                key={index}
                className="md:basis-1/3 lg:basis-1/5 flex flex-col gap-4"
              >
                <div className="image-container pb-6 pt-2 w-[13rem] px-3  border-2 grid gap-4 rounded-md">
                  <Image
                    className="ml-auto w-10 h-10"
                    src={express_delivery}
                    width={40}
                    height={40}
                    alt="delivery-logo"
                  />

                  <ImageWithFallback
                    src={featured_image}
                    width={175}
                    className="w-[175px] h-[200px] justify-self-center"
                    height={200}
                    alt="product-image"
                  />
                  <div className="rating flex items-center gap-1 text-text_gray mt-4">
                    <span>5</span>
                    <FaStar className="text-primary_blue" />
                    <span>/5</span>
                    <span>(1)</span>
                  </div>
                </div>
                <div className="text-des w-44 h-36 grid gap-2 ">
                  <span className="text-primary_blue">15% off</span>
                  <div className="flex gap-2 text-black">
                    <span className="price">Rs. {price} </span>
                    <span className="price line-through"> Rs.2,445 </span>
                  </div>
                  <div className="offer flex text-sm items-center gap-2 text-primary_blue">
                    <LuBadgePercent size={20} />
                    <span>More Offer Inside</span>
                  </div>
                  <p className="line-clamp-2 text-sm">{description} </p>
                </div>
                <div className="add-to-cart flex w-44 items-center gap-2">
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
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious className="left-5" />
        <CarouselNext className="right-12" />
      </Carousel>
    </div>
  );
};

export default Flash_Sales;

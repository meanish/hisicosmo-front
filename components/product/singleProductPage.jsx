"use client";
import React from "react";
import { Blue_Service_Section } from "../login_and_register/commonComponents";
import Image from "next/image";
import product_image from "@/public/images/flash-sales.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const SingleProductPage = ({ data }) => {
  return (
    <div>
      <ProductImageSection data={data} />
      <ProductDescriptionSection data={data} />
      <Blue_Service_Section />
    </div>
  );
};

export default SingleProductPage;

export const ProductImageSection = ({ data }) => {
  const {
    name,
    id,
    price,
    featured_image,
    product_gallery,
    brand_id,
    ratings,
  } = data;

  return (
    <div className="bg-gray-100 w-full pb-9">
      <div className="main-product-section container flex bg-white gap-4">
        <div className="left-image-section  pb-20 select-none w-1/3">
          <Image
            src={product_image}
            width={327}
            height={340}
            className="w-[327px] h-[340px]"
            alt="product-preview-image"
          />

          <Carousel
            opts={{
              align: "start",
            }}
            className="px-10"
          >
            <CarouselContent>
              {/* <div className="product-image-gallery flex gap-4"> */}
              {Array(9)
                .fill(null)
                .map((item, index) => {
                  return (
                    <CarouselItem key={index} className="basis-1/4">
                      <Image
                        src={product_image}
                        width={56}
                        height={56}
                        className="w-14 h-14 border cursor-pointer"
                        alt="product-image"
                      />
                    </CarouselItem>
                  );
                })}
              {/* </div> */}
            </CarouselContent>
            <CarouselPrevious className="left-0 border-none shadow-none w-6 h-6 p-0" />
            <CarouselNext className="right-0 border-none shadow-none w-6 h-6 " />
          </Carousel>
        </div>

        <div className="right-text-des bg-green-300 w-full p-4">
          <h2 className="text-2xl font-medium">{name}</h2>
          <p className="text-2xl font-medium text-primary_blue">Rs.{price}</p>

          <div className="btns flex gap-5">
            <button className="text-center text-xl font-bold rounded  border-primary_blue text-primary_blue border h-[61px] w-[233px]">
              Buy Now
            </button>
            <button className="text-center text-xl font-bold rounded  bg-primary_blue text-white  h-[61px] w-[233px]">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export const ProductDescriptionSection = ({ data }) => {
  const { description, ratings, review, faqs } = data;

  return <div className="product-description container "></div>;
};

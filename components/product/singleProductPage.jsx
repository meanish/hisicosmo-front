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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";
import { IoDocumentTextOutline } from "react-icons/io5";

const SingleProductPage = ({ data }) => {
  return (
    <div>
      <div className="bg-gray-100 w-full pb-9">
        <ProductImageSection data={data} />
        <ProductDescriptionSection data={data} />
      </div>
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

  console.log(data, "product-data");

  return (
    <div className="container">
      <div className="main-product-section flex bg-white gap-4">
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

        <div className="right-text-des p-4 grid gap-4 w-[35rem]">
          <h2 className="text-2xl font-medium">
            {name} 4 ALZIBA CAFFIEN & KERATIN SHAMPOO 500ML
          </h2>

          <div className="ratings flex items-center gap-2">
            <div className="flex gap-1">
              {Array(5)
                .fill(null)
                .map((star, index) => {
                  return <Star size={14} color="yellow" />;
                })}
            </div>
            <p className="text-primary_blue">No Ratings</p>
          </div>
          <div className="brand-name">
            <p className="text-xs space-x-2">
              <span className="text-text_gray">Brand:</span>
              <span className="text-primary_blue pr-2 border-r-4 border-gray-400 ">
                ALZIBA
              </span>
              <span className="text-primary_blue">
                More Accessories from ALZIBA
              </span>
            </p>
          </div>

          <div className="price text-primary_blue w-full">
            <p className="border-y font-medium text-2xl w-full">Rs.{price}</p>
          </div>

          <div className="quantity flex items-center gap-3">
            <span className="text-text_gray">Quantity</span>
            <div className="flex border items-center">
              <button className="h-8 w-8 bg-gray-200">-</button>
              <span className="h-8 w-8 bg-gray-200 grid place-items-center">
                0
              </span>
              <button className="h-8 w-8 bg-gray-200">+</button>
            </div>
            <span className="text-orange-500">Out of stock</span>
          </div>

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

  return (
    <div className="product-description container my-9 ">
      <Tabs defaultValue="Description" className=" w-full">
        <TabsList className="p-0 h-auto">
          <TabsTrigger
            className=" rounded-none rounded-t-lg space-x-2"
            value="Description"
          >
            {" "}
            <IoDocumentTextOutline /> <span>Description</span>
          </TabsTrigger>
          <TabsTrigger
            className=" rounded-none rounded-t-lg space-x-2"
            value="Rating & Reviews"
          >
            {" "}
            <IoDocumentTextOutline />
            <span>Rating & Reviews</span>
          </TabsTrigger>
          <TabsTrigger
            className=" rounded-none rounded-t-lg space-x-2"
            value="FAQs"
          >
            {" "}
            <IoDocumentTextOutline />
            <span>FAQs</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Description">
          <Description />
        </TabsContent>
        <TabsContent value="Rating & Reviews">
          <Ratings_Review />
        </TabsContent>
        <TabsContent value="FAQs">
          <FAQ />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export const Description = () => {
  return (
    <div className="container w-full bg-white px-8 py-4 grid gap-9 pb-36 rounded-b-lg">
      <div className="product-details grid gap-8">
        <h3 className="text-2xl font-bold leading-tight">Product Details</h3>
        <ul className="list-disc pl-6 flex flex-col gap-5">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus corrupti vero quos molestias quod laborum, ducimus
            facere quae esse blanditiis saepe cumque aspernatur, nulla tenetur
            tempora ad sequi ut repudiandae, eaque error sed. Natus, nulla
            dolorum assumenda quibusdam commodi explicabo fugiat iste
            exercitationem cumque saepe, deserunt beatae necessitatibus a
            minima. Quidem hic, animi aspernatur laborum dignissimos ad
            voluptate quisquam at.
          </li>
          <li>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            nihil possimus voluptas dolorem non sed ea aut fuga molestiae,
            officiis saepe illo. Molestias et eius obcaecati, ad minima quidem
            nostrum!
          </li>
        </ul>
      </div>
      <div className="key-benefits grid gap-8">
        <h3 className="text-2xl font-bold leading-tight">Key Details</h3>
        <ul className="grid gap-2 list-disc pl-6">
          {Array(6)
            .fill(null)
            .map((item, index) => {
              return (
                <li key={index}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.

                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};
export const Ratings_Review = () => {};
export const FAQ = () => {};

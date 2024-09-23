"use client"

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Star } from "lucide-react";
import { useState } from "react";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


export const ProductImageSection = ({ data, token }) => {
  const {
    name,
    id,
    price,
    featured_image,
    product_gallery,
    brand_id,
    ratings,
  } = data;

  const [displayImage, setDisplayImage] = useState(featured_image);
  console.log(data, "product-data");
  console.log(displayImage, "index-display");


  const [quantity, setQuantity] = useState("1")

  // const { data: session } = useSession();
  // console.log("Session", session)

  const increaseHandler = () => {
    if (quantity < 10)
      setQuantity(+quantity + 1)
  }

  const decreaseHandler = () => {
    if (quantity > 1)
      setQuantity(+quantity - 1)
  }


  const router = useRouter()


  const addHandler = async () => {
    if (!token) {
      router.push("/auth/login")
    }
    else {
      try {

        const res = await fetch("/api/cart/store", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ id, quantity })
        })

        const response = await res.json()

        if (response?.status === 200) {
          console.log("Called")
          toast.success(response?.message)
        }
        else {
          toast.error(response?.message)
        }
      }
      catch (e) {
        toast.error("Eror in adding cart", e.message)
      }
    }
  }


  return (
    <div className="container">
      <div className="main-product-section flex bg-white gap-4">
        <div className="left-image-section  pb-20 select-none w-1/3">
          <Image
            src={displayImage}
            width={327}
            height={340}
            style={{
              objectFit: "contain",
            }}
            className="w-[327px] h-[340px] "
            alt="product-preview-image"
          />

          <Carousel
            opts={{
              align: "start",
            }}
            className="px-10 mt-4"
          >
            <CarouselContent>
              {/* <div className="product-image-gallery flex gap-4"> */}

              <CarouselItem className="basis-1/4">
                <Image
                  onClick={() => setDisplayImage(featured_image)}
                  src={featured_image}
                  width={56}
                  height={56}
                  style={{
                    objectFit: "contain",
                  }}
                  className="w-14 h-14 border cursor-pointer"
                  alt="product-image"
                />
              </CarouselItem>

              {product_gallery.map((image, index) => {
                return (
                  <CarouselItem key={index} className="basis-1/4">
                    <Image
                      onClick={() => setDisplayImage(image)}
                      src={image}
                      width={56}
                      height={56}
                      style={{
                        objectFit: "contain",
                      }}
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
              <button className="h-8 w-8 bg-gray-200" onClick={decreaseHandler}>-</button>
              <span className="h-8 w-8 bg-gray-200 grid place-items-center">
                {quantity}
              </span>
              <button className="h-8 w-8 bg-gray-200" onClick={increaseHandler}>+</button>
            </div>
            <span className="text-orange-500">Out of stock</span>
          </div>

          <div className="btns flex gap-5">
            <button className="text-center text-xl font-bold rounded  border-primary_blue text-primary_blue border h-[61px] w-[233px]">
              Buy Now
            </button>
            <button className="text-center text-xl font-bold rounded  bg-primary_blue text-white  h-[61px] w-[233px] " onClick={addHandler}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

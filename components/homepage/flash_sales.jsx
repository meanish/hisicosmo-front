"use client";
import React, { useEffect, useState } from "react";
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
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { activeCartDisplay } from "@/lib/store/slices/cartSlices";
import { useDispatch } from "react-redux";
import { activeFavDisplay } from "@/lib/store/slices/favouriteSlice";


const Flash_Sales = ({ token }) => {
  const [isFav, setFav] = useState(JSON.parse(localStorage.getItem("Favorites")) || []);




  const [allProducts, setAllProducts] = useState();
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    const getProductLists = async () => {
      const res = await getAllProducts();
      setAllProducts(res?.data);
    };

    getProductLists();
  }, []);





  const setfavoriteHandler = (id) => {
    const favorites = JSON.parse(localStorage.getItem("Favorites")) || [];
    if (favorites.includes(id)) {
      const updatedFavorites = favorites.filter(favId => favId !== id);
      localStorage.setItem("Favorites", JSON.stringify(updatedFavorites));
      setFav(updatedFavorites)
      dispatch(activeFavDisplay({ number: updatedFavorites.length }))

    } else {
      favorites.push(id);
      localStorage.setItem("Favorites", JSON.stringify(favorites));
      setFav([...isFav, id])
      dispatch(activeFavDisplay({ number: favorites.length }))

    }

  };



  const cartHandler = async (id) => {
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
          body: JSON.stringify({ id, quantity: 1 })
        })

        const response = await res.json()

        if (response?.status === 200) {

          console.log(response)
          toast.success(response?.message)
          dispatch(activeCartDisplay())

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
    <div className="my-20">
      <Carousel
        opts={{
          align: "start",
        }}
        className="container  px-8"
      >
        <CarouselContent>
          {allProducts?.slice(0, 9).map((item, index) => {
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
                  <Link href={`/product/${id}`}>
                    <ImageWithFallback
                      src={featured_image}
                      width={175}
                      className="w-[175px] h-[200px] justify-self-center cursor-pointer"
                      height={200}
                      alt="product-image"
                    />
                  </Link>

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
                  <button className="w-[152px] h-[30px] hover:bg-opacity-80 active:scale-90 active:bg-opacity-100 rounded text-sm bg-primary_blue text-white" onClick={() => cartHandler(item.id)}>
                    Add To Cart
                  </button>
                  {Array.isArray(isFav) && (
                    <button onClick={() => setfavoriteHandler(id)}>
                      {isFav.includes(id) ? (
                        <FaHeart size={25} className="text-primary_blue cursor-pointer" />
                      ) : (
                        <FiHeart size={25} className="text-primary_blue cursor-pointer" />
                      )}
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

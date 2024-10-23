"use client";

import { setPriceRange, toggleCategory } from "@/lib/store/slices/filterSlice";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const Price_varaint = () => {
  const productsPriceRange = [
    {
      name: "skincare",
      bg: "#B1AFCF",
      id: "27",
      ranges: [
        {
          id: 1,
          price: 600,
        },
        {
          id: 2,
          price: 500,
        },
        {
          id: 3,
          price: 400,
        },
      ],
    },
    {
      name: "makeup",
      bg: "#E8f9f9",
      id: "13",
      ranges: [
        {
          id: 1,
          price: 300,
        },
        {
          id: 2,
          price: 200,
        },
        {
          id: 3,
          price: 100,
        },
      ],
    },
    {
      name: "haircare",
      id: "29",
      bg: "#e7b453",
      ranges: [
        {
          id: 1,
          price: 100,
        },
        {
          id: 2,
          price: 600,
        },
        {
          id: 3,
          price: 300,
        },
      ],
    },
  ];

  const router = useRouter();
  const dispatch = useDispatch();


  const handlePriceFilter = (id, price) => {
    dispatch(toggleCategory(id));
    router.push(`/filters?category=${id}&minPrice=1&maxPrice=${price}`)
  }




  return (
    <div className="bg-gray-50 py-4">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {productsPriceRange.map((currCat) => {
            const { name, ranges, bg, id } = currCat;

            return (
              <>
                <div className="skincare_price  flex flex-col gap-5">
                  <div className="head capitalize text-center">
                    Get your {name} Products
                  </div>
                  <div className="price_range flex justify-around items-center">
                    {ranges.map((currRange, index) => {
                      return (
                        <div
                          key={index}
                          className="cursor-pointer"
                          onClick={() => handlePriceFilter(id, currRange.price)}
                        >
                          <div
                            className={`rounded-full w-24 h-24 cursor-pointer flex justify-center items-center hover:bg-opacity-50 transition-all`}

                            style={{ backgroundColor: bg || "gray" }}
                          >
                            <div className="text-center">
                              <p className="text-xs">Under Rs</p>
                              <p className="text-2xl font-bold">
                                {currRange.price}
                              </p>
                            </div>
                          </div>
                        </div>

                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Price_varaint;
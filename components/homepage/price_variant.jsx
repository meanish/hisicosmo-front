"use client";
import { setPriceRange } from "@/lib/store/slices/filterSlice";
import Link from "next/link";
import React from "react";

const Price_varaint = () => {
  const productsPriceRange = [
    {
      name: "skincare",
      bg: "#B1AFCF",
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
      name: "haircare",
      bg: "#E8f9f9",
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
      name: "makeup",
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

  const handlePriceFilter = (price) => {
    dispatch(setPriceRange({ min: 1, max: price }));
  };
  return (
    <div className="bg-gray-50 py-4">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {productsPriceRange.map((currCat) => {
            const { name, ranges, bg } = currCat;
            return (
              <>
                <div className="skincare_price  flex flex-col gap-5">
                  <div className="head capitalize text-center">
                    Get your {name} Products
                  </div>
                  <div className="price_range flex justify-around items-center">
                    {ranges.map((currRange, index) => {
                      return (
                        <Link
                          key={index}
                          onClick={() => handlePriceFilter(currRange.price)}
                          href={`/filters?minPrice=1&maxPrice=${currRange.price}`}
                        >
                          <div
                            className={`rounded-full w-24 h-24 flex justify-center items-center hover:bg-opacity-50 transition-all`}
                            style={{ backgroundColor: bg || "gray" }}
                          >
                            <div className="text-center">
                              <p className="text-xs">Under Rs</p>
                              <p className="text-2xl font-bold">
                                {currRange.price}
                              </p>
                            </div>
                          </div>
                        </Link>
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

"use client";
import React, { useEffect } from "react";
import { GrPowerReset } from "react-icons/gr";
import { FaRegCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilters, setPriceRange,
  toggleBrand,
  toggleCategory,
} from "@/lib/store/slices/filterSlice";

import { Range } from "react-range";
import { BrandAccordionContainer } from "./brandAccordion";
import { CategoryAccordionContainer } from "./categoryAccordion";
import {
  storeBrandData,
  storeCategoryData,
} from "@/lib/store/slices/brand_category_slice";
import { getBrandBasedProducts } from "@/app/api/brands/route";
import { getNavCategory } from "@/app/api/nav_category/route";
import { useRouter } from "next/navigation";

export const Filter_Form_Section = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleReset = () => {
    dispatch(resetFilters());
    router.replace("/filters", { scroll: false });
  };

  useEffect(() => {
    const handleGetData = async () => {
      try {
        const [brandData, categoryData] = await Promise.all([
          getBrandBasedProducts(),
          getNavCategory(),
        ]);
        dispatch(storeBrandData(brandData.data));
        dispatch(storeCategoryData(categoryData.data));
      } catch (err) {
        throw new Error(err, "error to fetch brand and category data");
      }
    };

    handleGetData();
  }, [dispatch]);

  return (
    <div className="w-1/4 p-4">
      <div className="head-section mb-5 flex justify-between items-center">
        <p className="font-medium text-base">Filter</p>
        <button
          onClick={handleReset}
          className="text-primary_blue text-sm flex items-center gap-1 hover:text-primary_gold"
        >
          Reset <GrPowerReset />
        </button>
      </div>

      <div className="filter-by-brand">
        <BrandAccordionContainer title={"Filter by Brand"} />
      </div>

      <div className="filter-by-category">
        <CategoryAccordionContainer title={"Filter by category"} />
      </div>
      <div className="price-range">
        <PriceRangeSlider />
      </div>
    </div>
  );
};

export const Circular_Search_Box = ({ value, onChange }) => {
  return (
    <div className=" my-4 flex rounded-full px-6 gap-2 items-center border focus-within:border-black bg-gray-100">
      <FaRegCircle className="" />
      <input
        type="text"
        onChange={onChange}
        value={value}
        name="search-box"
        className="w-full py-4 px-1 placeholder-gray-400 rounded-full border-none outline-none bg-gray-100 h-full "
        placeholder="Search"
      />
    </div>
  );
};

export const PriceRangeSlider = () => {
  const dispatch = useDispatch();
  const { min, max } = useSelector(
    (state) => state.manageFilterSlice.priceRange
  );

  const STEP = 10;
  const MIN = 1;
  const MAX = 20000;

  const handlePriceChange = (values) => {
    console.log("Changes")
    const [minPrice, maxPrice] = values;
    dispatch(setPriceRange({ min: parseInt(minPrice), max: parseInt(maxPrice) }));
  };


  // on page relaod and place the params prices
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const minPrice = parseInt(searchParams.get('minPrice')) || MIN;
    const maxPrice = parseInt(searchParams.get('maxPrice')) || MAX;
    dispatch(setPriceRange({ min: minPrice, max: maxPrice }));
  }, []);



  return (
    <div className="price-range grid gap-4 mt-9">
      <h2 className="text-base font-medium text-primary_blue">Price</h2>
      <p className="tracking-wide leading-normal text-xs">Select Price Range</p>

      {/* Display the selected min and max values */}
      <div className="flex justify-between ">
        <span>NPR.{min}</span> <span>NPR.{max}</span>
      </div>

      {/* Dual Handle Slider */}
      <Range
        step={STEP}
        min={MIN}
        max={MAX}
        values={[min, max]}
        onChange={handlePriceChange} // Handle slider change
        renderTrack={({ props, children }) => (
          <div
            key={props.key}
            {...props}
            style={{
              ...props.style,
              height: "10px",
              width: "100%",
              backgroundColor: "#E7B453",
              borderRadius: "5px",
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            key={props.key}
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              borderRadius: "5px",
              backgroundColor: "#110884",
              boxShadow: "0px 2px 6px #AAA",
            }}
          />
        )}
      />
    </div>
  );
};

"use client";
import React, { useEffect } from "react";
import { GrPowerReset } from "react-icons/gr";
import { FaRegCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { resetFilters, setPriceRange } from "@/lib/store/slices/filterSlice";
import { Range } from "react-range";
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

export const BrandAccordionContainer = ({ title, itemLists }) => {
  const dispatch = useDispatch();
  const selectedBrandIds = useSelector(
    (state) => state.manageFilterSlice.selectedBrandIds
  ); // Get selected brand IDs

  const handleCheckboxChange = (id) => {
    dispatch(toggleBrand(id)); // Dispatch toggleBrand action
  };

  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger className="font-bold text-xl text-black/70">
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <Circular_Search_Box />
          <div>
            {itemLists.data.map((item, index) => {
              const { name, id } = item;
              const isChecked = selectedBrandIds.includes(id); // Check if brand ID is selected

              return (
                <label
                  key={index}
                  htmlFor={id}
                  className="flex items-center hover:bg-gray-200 justify-between px-1 py-4 border-t-2 w-full cursor-pointer"
                >
                  {name}
                  <input
                    type="checkbox"
                    id={id}
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(id)} // Handle checkbox change
                    className="size-5 text-text_gray hover:cursor-pointer"
                  />
                </label>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export const CategoryAccordionContainer = ({ title, categoryData }) => {
  const dispatch = useDispatch();
  const selectedCategoryIds = useSelector(
    (state) => state.manageFilterSlice.selectedCategoryIds
  ); // Get selected category IDs

  const handleCategoryChange = (id) => {
    dispatch(toggleCategory(id)); // Dispatch toggleCategory action
  };

  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger className="font-bold text-xl text-black/70">
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <Circular_Search_Box />
          <div>
            {categoryData.data.map((item, index) => {
              const { name, id, subcategories } = item;
              const isCategoryChecked = selectedCategoryIds.includes(id); // Check if category is selected

              return (
                <Accordion key={id} type="single" collapsible>
                  <AccordionItem value={`item-${id}`} className="border-b-0">
                    <AccordionTrigger className="font-semibold text-base text-black">
                      {name}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        {subcategories.map((subItem, subIndex) => {
                          const { name, id } = subItem;
                          const isSubCategoryChecked =
                            selectedCategoryIds.includes(id); // Check if subcategory is selected

                          return (
                            <label
                              key={subIndex}
                              htmlFor={id}
                              className="flex items-center hover:bg-gray-200 justify-between px-1 py-4 border-t-2 w-full cursor-pointer"
                            >
                              {name}
                              <input
                                type="checkbox"
                                id={id}
                                checked={isSubCategoryChecked}
                                onChange={() => handleCategoryChange(id)} // Handle checkbox change
                                className="size-5 text-text_gray hover:cursor-pointer"
                              />
                            </label>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};


export const PriceRangeSlider = () => {
  const dispatch = useDispatch();
  const { min, max } = useSelector(
    (state) => state.manageFilterSlice.priceRange
  ); // Get min and max from Redux
  const STEP = 1;
  const MIN = 1;
  const MAX = 20000;

  const handlePriceChange = (values) => {
    const [minPrice, maxPrice] = values;
    dispatch(setPriceRange({ min: minPrice, max: maxPrice })); // Dispatch the new range
  };

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
              height: "6px",
              width: "100%",
              backgroundColor: "gray",
              borderRadius: "10px",
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
              height: "24px",
              width: "24px",
              borderRadius: "12px",
              backgroundColor: "#110884",
              boxShadow: "0px 2px 6px #AAA",
            }}
          />
        )}
      />
    </div>
  );
};

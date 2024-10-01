"use client";

import React, { useEffect, useState } from "react";
import { BreadCrumb } from "./filterPage_breadCrumb";
import { Filter_Form_Section } from "./filter_form_section";
import { Product_List_Section } from "./product_list_section";
import { useDispatch, useSelector } from "react-redux";
import { storeFilteredProductList } from "@/lib/store/slices/filterSlice";
import { useRouter } from "next/navigation";

const Filtered_Product_Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const selectedBrandIds = useSelector(
    (state) => state.manageFilterSlice.selectedBrandIds
  );
  const selectedCategoryIds = useSelector(
    (state) => state.manageFilterSlice.selectedCategoryIds
  );
  const { min, max } = useSelector(
    (state) => state.manageFilterSlice.priceRange
  );

  // for debouncing price api call
  const [prevBrandIds, setPrevBrandIds] = useState(selectedBrandIds);
  const [prevCategoryIds, setPrevCategoryIds] = useState(selectedCategoryIds);
  let debounceTimeout;

  const updateURLWithFilters = () => {
    const query = new URLSearchParams();

    if (selectedBrandIds.length > 0) {
      query.append("brand", selectedBrandIds.join(","));
    }
    if (selectedCategoryIds.length > 0) {
      query.append("category", selectedCategoryIds.join(","));
    }

    query.append("minPrice", min);
    query.append("maxPrice", max);

    const fullPath = `/filters?${query.toString()}`;
    router.replace(fullPath, { scroll: false });
  };

  useEffect(() => {
    // Update the URL when any filter changes
    updateURLWithFilters();

    const fetchProductsFromAPI = async () => {
      // for preventing price api chan on scroll adding debounce
      // const prevtotal;
      try {
        // Fetch data from the API route
        const response = await fetch(
          `/api/filters?brand=${selectedBrandIds.join(
            ","
          )}&category=${selectedCategoryIds.join(
            ","
          )}&minPrice=${min}&maxPrice=${max}`
        );
        const data = await response.json();
        dispatch(storeFilteredProductList(data?.data)); // Set the fetched data to state
      } catch (error) {
        console.error("Failed to fetch filtered products:", error);
      }
    };

    if (prevBrandIds !== selectedBrandIds || prevCategoryIds !== selectedCategoryIds) {
      fetchProductsFromAPI();
      setPrevBrandIds(selectedBrandIds);
      setPrevCategoryIds(selectedCategoryIds);
    } else {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        fetchProductsFromAPI(); 
      }, 2000);
    }

    // cause i want to call only once api
     return () => clearTimeout(debounceTimeout);
  }, [selectedBrandIds, selectedCategoryIds, min, max, prevBrandIds, prevCategoryIds]); // Run the effect when any filter changes

  return (
    <div className="bg-ad_bg_gray py-5">
      <div className="container">
        <BreadCrumb />
        <div className="my-5 bg-white p-5 flex gap-6">
          <Filter_Form_Section />
          <Product_List_Section />
        </div>
      </div>
    </div>
  );
};

export default Filtered_Product_Home;

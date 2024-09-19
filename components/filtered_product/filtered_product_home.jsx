"use client";
import React, { useEffect, useState } from "react";
import { BreadCrumb } from "./filterPage_breadCrumb";
import { Filter_Form_Section } from "./filter_form_section";
import { Product_List_Section } from "./product_list_section";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilteredProducts } from "@/helper/buildFilterQuery";
import { storeFilteredProductList } from "@/lib/store/slices/filterSlice";

const Filtered_Product_Home = ({ brandData, categoryData }) => {
  const dispatch = useDispatch();

  const selectedBrandIds = useSelector(
    (state) => state.manageFilterSlice.selectedBrandIds
  );
  const selectedCategoryIds = useSelector(
    (state) => state.manageFilterSlice.selectedCategoryIds
  );
  const { min, max } = useSelector(
    (state) => state.manageFilterSlice.priceRange
  );
  const filteredProductList = useSelector(
    (state) => state.manageFilterSlice.filteredProductList
  );

  useEffect(() => {
    // Function to fetch the products when filters change
    const getFilteredProducts = async () => {
      try {
        const filteredData = await fetchFilteredProducts(
          selectedBrandIds,
          selectedCategoryIds,
          min,
          max
        );
        dispatch(storeFilteredProductList(filteredData?.data)); // Set the fetched data to state
      } catch (error) {
        console.error("Failed to fetch filtered products:", error);
      }
    };

    getFilteredProducts();
  }, [selectedBrandIds, selectedCategoryIds, min, max]); // Run the effect when any filter changes

  console.log(filteredProductList, "filtered-products");
  return (
    <div className="bg-ad_bg_gray py-5">
      <div className="container">
        <BreadCrumb />
        <div className="my-5 bg-white p-5 flex gap-6">
          <Filter_Form_Section
            brandData={brandData}
            categoryData={categoryData}
          />
          <Product_List_Section  />
        </div>
      </div>
    </div>
  );
};

export default Filtered_Product_Home;

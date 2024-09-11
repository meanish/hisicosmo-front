import React from "react";
import { BreadCrumb } from "./filterPage_breadCrumb";
import { Filter_Form_Section } from "./filter_form_section";
import { Product_List_Section } from "./product_list_section";

const Filtered_Product_Home = ({ brandData, categoryData }) => {
  return (
    <div className="bg-ad_bg_gray py-5">
      <div className="container">
        <BreadCrumb />
        <div className="my-5 bg-white p-5 flex gap-6">
          <Filter_Form_Section
            brandData={brandData}
            categoryData={categoryData}
          />
          <Product_List_Section />
        </div>
      </div>
    </div>
  );
};

export default Filtered_Product_Home;

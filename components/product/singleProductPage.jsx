"use client";
import React from "react";
import { Blue_Service_Section } from "../login_and_register/commonComponents";
import Flash_Sales from "../homepage/flash_sales";
import { ProductImageSection } from "./productImageSection";
import { ProductDescriptionSection } from "./productDescriptionSection";
import { useSession } from "next-auth/react";

const SingleProductPage = ({ data,token }) => {

  const session = useSession()

  console.log("Auth", session)

  
  return (
    <div>
      <div className="bg-gray-100 w-full pb-9">
        <ProductImageSection data={data} token={token} />
        <ProductDescriptionSection data={data} />
      </div>
      <Flash_Sales />
      <Blue_Service_Section />
    </div>
  );
};

export default SingleProductPage;

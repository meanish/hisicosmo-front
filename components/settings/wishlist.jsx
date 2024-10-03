"use client"

import { cn } from "@/lib/utils";
import React, { useEffect } from "react";

const Wishlist = ({ className }) => {


  return (
    <div className={cn(`profile-form w-full bg-white p-5`, className)}>
      Wishlist
    </div>
  );
};

export default Wishlist;

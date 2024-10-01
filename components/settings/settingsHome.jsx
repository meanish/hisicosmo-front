"use client";
import React, { useState } from "react";

import BasicProfile from "./basicProfile";
import Orders from "./orders";
import Wishlist from "./wishlist";
import Contact_Us from "./contact_us";
import { signOut } from "@/auth";


const SettingsHome = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="bg-gray-200 w-full py-8">
      <div className="container flex  gap-4 justify-center ">


        <>
          <BasicProfile className={`${activeTab === 0 ? "block" : "hidden"}`} />

          <Orders className={`${activeTab === 1 ? "block" : "hidden"}`} />

          <Wishlist className={`${activeTab === 2 ? "block" : "hidden"}`} />

          <Contact_Us className={`${activeTab === 3 ? "block" : "hidden"}`} />
        </>
      </div>
    </div>
  );
};

export default SettingsHome;


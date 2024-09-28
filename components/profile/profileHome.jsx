"use client";
import React, { useState } from "react";
import { LiaClipboardListSolid } from "react-icons/lia";
import { CiHeart, CiUser } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import BasicProfile from "./basicProfile";
import Orders from "./orders";
import Wishlist from "./wishlist";
import Contact_Us from "./contact_us";

export const tabs = [
  {
    title: "Profile",
    icon: <CiUser size={24} />,
  },
  {
    title: "Orders",
    icon: <LiaClipboardListSolid size={24} />,
  },
  {
    title: "Wishlist",
    icon: <CiHeart size={24} />,
  },
  {
    title: "Contact Us",
    icon: <FiPhoneCall size={24} />,
  },
];
const ProfileHome = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="bg-gray-200 w-full py-8">
      <div className="container flex  gap-4 justify-center ">
        <div className="sidebar h-fit  bg-white w-1/4 lg:min-w-72 rounded-sm">
          <h2 className="font-medium  p-4 pl-6 text-sm">Hi, UserName</h2>
          <ul className="tabs mt-4 mb-12 w-full">
            {tabs.map((tab, index) => {
              const { title, icon } = tab;
              return (
                <li
                  onClick={() => setActiveTab(index)}
                  key={index}
                  className={` ${
                    activeTab === index ? "text-primary_blue" : ""
                  } py-3 px-5 flex gap-2 items-center hover:cursor-pointer w-full border-y-2 border-transparent hover:border-gray-200`}
                >
                  {icon}
                  <button>{title}</button>
                </li>
              );
            })}
          </ul>
          <div className="logout">
            <button className="py-3 px-5 flex gap-2 items-center text-red-500 w-full border-y-2 border-transparent hover:border-gray-200 active:text-primary_blue">
              <IoIosLogOut size={24} />
              Logout
            </button>
          </div>
        </div>

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

export default ProfileHome;

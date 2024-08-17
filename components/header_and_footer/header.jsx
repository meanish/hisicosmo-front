import Image from "next/image";
import React from "react";
import logo from "@/public/images/Hisi-Logo.svg";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { getNavCategory } from "@/app/api/nav_category/route";
import { Nav_Content } from "./navbar";

const Header = async () => {
  const data = await getNavCategory();

  return (
    <div>
      <Header_CTA />
      <Logo_Account_Section />
      <Nav_Content nav_category={data?.data} />
    </div>
  );
};

export default Header;

export const Header_CTA = () => {
  return (
    <div className="cta w-full h-12 bg-gradient-to-r from-gradient_first via-gradient_middle to-gradient_last">
      <div className="container h-full text-white text-sm flex items-center gap-6 justify-between">
        <p className="font-medium  w-1/2">WELCOME TO HISI COSMO STUDIO</p>
        <div className="w-1/2 flex justify-end gap-4 lg:w-1/3  md:justify-between">
          <span>800-877-4758</span>
          <span>info@gisicosmocom</span>
        </div>
      </div>
    </div>
  );
};

export const Logo_Account_Section = () => {
  return (
    <div className="bg-white shadow-[inset_0px_-15px_10px_20px_rgb(0,0,0,0.05)] border-b h-20 account-wishlist">
      <div className="container w-full flex items-center">
        <div className="logo w-1/2 ">
          <Image
            className="logo_image ml-auto "
            src={logo}
            width={106}
            style={{ width: "auto" }}
            height={65}
            alt="logo"
          />
        </div>

        <div className="account-avatar w-1/2 flex items-center gap-10 justify-end">
          <div className="account_icon flex items-center gap-1">
            <RxAvatar size={40} color="gray" className="cursor-pointer" />
            <div className="flex justify-center flex-col">
              <p className="text-[10px] text-gray-500">Hello,Sign In</p>
              <p className="text-sm font-semibold cursor-pointer">
                Your Account
              </p>
            </div>
          </div>
          <div className="icons flex items-center gap-10 justify-between">
            <div className="favorite relative cursor-pointer">
              <MdOutlineFavoriteBorder size={30} color="gray" />
              <span className=" absolute left-5 text-xs top-1 bg-red-500 w-3 h-3 rounded-full  flex items-center justify-center text-white p-2">
                0
              </span>
            </div>
            <div className="shopping_bag relative cursor-pointer">
              <HiOutlineShoppingBag size={30} color="gray" />
              <span className=" absolute left-5 text-xs top-1 bg-red-500 w-3 h-3 rounded-full  flex items-center justify-center text-white p-2">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

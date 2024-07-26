import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.png";
import user_avatar from "@/public/images/user.png";

const Header = () => {
  return (
    <div>
      <Header_CTA />
      <div className="bg-white shadow-inner border-b h-20 account-wishlist">
        <div className="container w-full flex items-center">
          <Image
            className="mx-auto"
            src={logo}
            width={106}
            height={65}
            alt="logo"
          />
          <div className="account-avatar flex items-center gap-1">
            <Image src={user_avatar} width={40} height={40} alt="user-image" />
            <div className="flex justify-center flex-col">
              <p className="text-[10px] text-gray-500">Hello,Sign In</p>
              <p className="text-sm font-semibold">Your Account</p>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-section"></div>
    </div>
  );
};

export const Header_CTA = () => {
  return (
    <div className="cta w-full h-11 bg-gradient-to-r from-gradient_first via-gradient_middle to-gradient_last">
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
export default Header;

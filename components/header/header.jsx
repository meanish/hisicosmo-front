import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.png";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const navLinks = [
  {
    name: "Makeup",
    url: "#",
  },
  {
    name: "Skincare",
    url: "#",
  },
  {
    name: "Haircare",
    url: "https://www.example.com/shop",
  },
  {
    name: "Body",
    url: "https://www.example.com/blog",
  },
  {
    name: "Hand & Feet",
    url: "https://www.example.com/contact-us",
  },
  {
    name: "Personalized Packets",
    url: "https://www.example.com/contact-us",
  },
  {
    name: "Products",
    url: "https://www.example.com/contact-us",
  },
];

const Header = () => {
  return (
    <div>
      <Header_CTA />
      <Logo_Account_Section />
      <Nav_Content />
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
            height={65}
            alt="logo"
          />
        </div>

        <div className="account-avatar w-1/2 flex items-center gap-10 justify-end">
          <div className="account_icon flex items-center gap-1">
            <RxAvatar size={40} color="gray" className="cursor-pointer" />
            <div className="flex justify-center flex-col">
              <p className="text-[10px] text-gray-500">Hello,Sign In</p>
              <p className="text-sm font-semibold cursor-pointer">Your Account</p>
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

export const Nav_Content = () => {
  return (
    <div className="w-full  border-b-4">
      <div className="nav-section container">
        <div className="py-4 flex items-center justify-between">
          <div className="nav_links">
            <ul className="flex items-center gap-7">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    className="cursor-pointer hover:text-primary_gold focus:text-primary_blue focus:font-semibold text-sm"
                    href={link.url}
                  >
                    {" "}
                    {link.name}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="search_box relative max-w-[350px]">
            <input
              className="border text-sm w-full py-3 px-4 h-10 placeholder:text-gray-700 bg-gray-100"
              type="text"
              placeholder="Search products..."
            />
            <CiSearch size={20} className="absolute right-3 top-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";

import { storeUserData } from "@/lib/store/slices/userDataSlice";
import logo from "@/public/images/Hisi-Logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import SidebarSettings from "../settings/settingsSidebar";
import { useClickOutside } from "@/utils/useClickOutside";

export const Logo_Account_Section = ({ token }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.manageUserData.userData);
  const [openDropDown, setOpenDropDown] = useState(false);
  const dropDownRef = useRef();
  useClickOutside(dropDownRef, () => setOpenDropDown(false));

  useEffect(() => {
    const getUserData = async () => {
      const res = await fetch(`/api/userData`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      dispatch(storeUserData(data?.data));
    };
    if (token) {
      getUserData();
    }
  }, [token]);

  const { cartNumber, showCartnumber } = useSelector((state) => state.cartData);
  const { favNumber, showFav } = useSelector((state) => state.managefavorites);

  return (
    <div
      ref={dropDownRef}
      className="bg-white relative shadow-[inset_0px_-15px_10px_20px_rgb(0,0,0,0.05)] border-b h-20 account-wishlist"
    >
      <div className="container w-full flex items-center">
        <div className="logo w-1/2 ">
          <Link href={"/"}>
            <Image
              className="logo_image ml-auto cursor-pointer"
              src={logo}
              width={106}
              style={{ width: "auto" }}
              height={65}
              alt="logo"
            />
          </Link>
        </div>

        <div className="account-avatar  w-1/2 flex items-center gap-10 justify-end">
          <div className="account_icon flex items-center gap-1">
            <RxAvatar
              onClick={() => router.push("/auth/login")}
              size={40}
              color="gray"
              className="cursor-pointer hover:text-black"
            />
            <div className="flex justify-center select-non flex-col">
              <p className="text-[10px] text-gray-500 select-none">
                Hello, Sign In
              </p>

              {userData?.username ? (
                <div
                  onClick={() => setOpenDropDown(!openDropDown)}
                  className="text-sm flex select-none items-center gap-2 font-semibold cursor-pointer hover:opacity-80 active:opacity-100"
                >
                  {userData?.username}
                  <IoIosArrowDown />
                </div>
              ) : (
                <Link
                  href={"/auth/login"}
                  className="text-sm font-semibold select-none cursor-pointer active:opacity-100  hover:opacity-80"
                >
                  My Account
                </Link>
              )}
            </div>
          </div>
          <div
            className="icons flex items-center gap-10 justify-between"
            title="Wishlist"
          >
            <Link href="/settings/wishlist">
              <div className="favorite relative cursor-pointer">
                <MdOutlineFavoriteBorder size={30} color="gray" />
                {showFav ? (
                  <span className=" absolute left-5 text-xs top-1 bg-red-500 w-3 h-3 rounded-full  flex items-center justify-center text-white p-2">
                    {favNumber}
                  </span>
                ) : null}
              </div>
            </Link>
            <div
              className="shopping_bag relative cursor-pointer"
              title="Add to cart"
            >
              <Link href="/add_cart">
                <HiOutlineShoppingBag size={30} color="gray" />
                {showCartnumber ? (
                  <span className=" absolute left-5 text-xs top-1 bg-red-500 w-3 h-3 rounded-full  flex items-center justify-center text-white p-2">
                    {cartNumber}
                  </span>
                ) : null}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <SidebarSettings
        setOpenDropDown={setOpenDropDown}
        className={`${
          openDropDown ? "block" : "hidden"
        } absolute border shadow top-full py-0 z-[55] min-w-fit w-80 right-4`}
      />
    </div>
  );
};

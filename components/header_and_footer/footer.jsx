import React from "react";
import logo from "@/public/images/logo_blue.png";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-bg_footer w-full text-white">
      <div className="container py-14">
        <div className="top flex flex-col items-center">
          <ul className="flex gap-9">
            <li>
              <Link href={"#"}>Our Shop</Link>
            </li>
            <li>
              {" "}
              <Link href={"#"}> My Cart </Link>
            </li>
            <li>
              {" "}
              <Link href={"#"}> Categories </Link>
            </li>
            <li>
              {" "}
              <Link href={"#"}> Our Stores </Link>
            </li>
          </ul>
          <Image
            className="logo_image my-10 bg-white "
            src={logo}
            width={187}
            height={98}
            alt="logo"
          />
        </div>

        <div className="bottom grid grid-cols-3 gap-4 py-5 border-y">
          <div className="about_us min-h-[367px] flex flex-col gap-4">
            <h3 className="text-2xl">About Us</h3>
            <p className="text-pretty pr-6">
              Obsession Cosmetics was born in 2014 .A beauty brand store is one
              of the 1st store in Nepal. Obsession cosmetics has grown to become
              the largest Nepal beauty retailer and the premier beauty
              destination for those looking for killer makeup without killing
              their wallet.
            </p>
            <div className="flex gap-3">
              <div className="w-fit cursor-pointer rounded-full bg-text_gray p-2">
                <FaFacebook size={25} color="navyblue" />
              </div>
              <div className="w-fit rounded-full cursor-pointer bg-text_gray p-2">
                <FaInstagram size={25} color="navyblue" />
              </div>
              <div className="w-fit rounded-full bg-text_gray cursor-pointer p-2">
                <FaXTwitter size={25} color="navyblue" />
              </div>
            </div>
          </div>
          <div className="store_info flex flex-col gap-4">
            <h3 className="text-2xl">Store Information</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-2">
                <IoLocationOutline size={24} />
                <span>Bhaktpur</span>
              </li>
              <li className="flex items-center gap-2">
                <IoCallOutline size={24} />
                <span>+977-9813319958</span>
              </li>

              <li className="flex items-center gap-2">
                <IoMailOutline size={24} />
                <span>Hisi cosmetics@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className="help_support flex flex-col gap-4">
            <h3 className="text-2xl">Help & Support </h3>
            <ul className="flex flex-col gap-4">
              <li>
                {" "}
                <Link href={"#"}> FAQs </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"#"}> Wishlist</Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"#"}> My Account</Link>
              </li>
              <li>
                {" "}
                <Link href={"#"}> My Cart</Link>
              </li>
              <li>
                {" "}
                <Link href={"#"}> Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

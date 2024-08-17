"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";

export const Nav_Content = ({ nav_category }) => {
  return (
    <div className="w-full  border-b-4">
      <div className="nav-section container">
        <div className="py-4 flex items-center justify-between">
          <div className="nav_links">
            <ul className="flex items-center gap-7">
              {nav_category.map((link, index) => (
                <MenuItem key={index} link={link} />
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

export const MenuItem = ({ link }) => {
  const [openSubCat, setOpenSubCat] = useState(false);
  return (
    <li
      className="relative"
      onMouseEnter={() => setOpenSubCat(true)}
      onMouseLeave={() => setOpenSubCat(false)}
    >
      {link.subcategories?.length ? (
        <div>
          <Link
            className="hover:text-primary_gold focus:text-primary_blue"
            href={link.slug}
          >
            {link.name}
          </Link>
          <Dropdown
            openSubCat={openSubCat}
            subcategories={link.subcategories}
          />
        </div>
      ) : (
        <Link
          className="hover:text-primary_gold focus:text-primary_blue"
          href={link.slug}
        >
          {link.name}
        </Link>
      )}
    </li>
  );
};

export const Dropdown = ({ subcategories, openSubCat }) => {
  return (
    <ul
      className={`${
        openSubCat ? "block" : "hidden"
      } absolute translate-x-1/2 right-1/4 border shadow top-6`}
    >
      {subcategories.map((subLink, index) => (
        <li key={index}>
          <Link
            className="p-2 bg-white w-36 block text-wrap hover:bg-gray-100"
            href={subLink.slug}
          >
            {subLink.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

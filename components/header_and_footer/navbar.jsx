"use client";
import { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { useClickOutside } from "@/utils/useClickOutside";

export const Nav_Content = ({ nav_category }) => {
  return (
    <div className="w-full  border-b-4">
      <div className="nav-section container">
        <div className="py-4 flex items-center justify-between">
          <div className="nav_links">
            <ul className="flex items-center gap-7">
              {nav_category?.map((category, index) => (
                <MenuItem key={index} category={category} />
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

export const MenuItem = ({ category }) => {
  const [openSubCat, setOpenSubCat] = useState(false);
  const dropDownRef = useRef();
  useClickOutside(dropDownRef, handleDropdownClose);

  const handleDropDownOpen = () => {
    setOpenSubCat(true);
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  };

  function handleDropdownClose() {
    setOpenSubCat(false);
    document.body.style.overflow = "auto";
  }

  return (
    <li>
      {category.subcategories?.length ? (
        <div>
          <button
            onClick={handleDropDownOpen}
            className="hover:text-primary_blue pb-1 hover:font-medium border-b-2 border-transparent hover:border-primary_blue "
          >
            {category.name}
          </button>
          <Dropdown
            openSubCat={openSubCat}
            handleDropdownClose={handleDropdownClose}
            category={category}
            dropDownRef={dropDownRef}
          />
        </div>
      ) : (
        <Link
          href={category.slug}
          className="hover:text-primary_blue pb-1 hover:font-medium border-b-2 border-transparent hover:border-primary_blue "
        >
          {category.name}
        </Link>
      )}
    </li>
  );
};

export const Dropdown = ({
  category,
  openSubCat,
  dropDownRef,
  handleDropdownClose,
}) => {
  return (
    <>
      {openSubCat && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black/40 z-40 flex justify-center`}
        >
          <div
            onMouseLeave={handleDropdownClose}
            ref={dropDownRef}
            className={` relative top-[197px]  flex gap-4 justify-between border overflow-hidden z-50 bg-white w-10/12  h-[420px] shadow p-5`}
          >
            <div className=" relative w-[330px] h-full overflow-hidden">
              <div className="absolute flex items-end w-full h-full p-8 bg-fixed bg-primary_blue/50 top-0 left-0 bottom-0 right-0">
                <div className="h-fit w-full text-start space-y-3">
                  <h4 className="text-3xl capitalize text-white font-bold">
                    {category.name}
                  </h4>
                  <Link
                    href={category.slug}
                    className="text-lg border-b-2 border-transparent hover:border-b-white block w-fit scale-95 hover:scale-100 text-white"
                  >
                    Explore All
                  </Link>
                </div>
              </div>
              <Image
                src={category.featured_image}
                alt="category-image"
                style={{ objectFit: "contain" }}
                width={330}
                height={400}
              />
            </div>
            <ul className="w-full flex  justify-between">
              <div className="flex flex-col py-4 gap-4">
                {category?.subcategories.map((subLink, index) => (
                  <li key={index}>
                    <Link
                      href={subLink.slug}
                      className=" capitalize b w-fit block text-wrap  hover:text-primary_blue border-b-2 border-transparent hover:border-primary_blue"
                    >
                      {subLink.name}
                    </Link>
                  </li>
                ))}
              </div>
              {/* <button onClick={() => setOpenSubCat(false)} className="h-8 w-8 ">
                <X />
              </button> */}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

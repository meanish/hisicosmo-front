"use client";
import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { useClickOutside } from "@/utils/useClickOutside";
import { ImageWithFallback } from "../ui/imageWithFallBack";

export const Nav_Content = ({ nav_category }) => {
  const [userInput, setUserInput] = useState("");
  const [searchedProduct, setSearchedProduct] = useState(null);
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const searhRef = useRef();
  useClickOutside(searhRef, () => setOpenSearchBox(false));

  const handleSearch = async (e) => {
    const query = e.target.value;
    setUserInput(query);

    if (query.length > 0) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HiSi_Server}/product/search?text=${query}`
        );
        const data = await response.json();
        setSearchedProduct(data.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    }
  };
  useEffect(() => {
    if (userInput.length > 0) {
      setOpenSearchBox(true);
    } else {
      setOpenSearchBox(false);
    }
  }, [userInput]);
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
          <div ref={searhRef} className="search_box relative max-w-[350px]">
            <input
              value={userInput}
              name="userInput"
              onChange={handleSearch}
              className="border text-sm w-full outline-primary_blue py-3 px-4 h-10 placeholder:text-gray-700 bg-gray-100"
              type="text"
              placeholder="Search products..."
            />
            <CiSearch size={20} className="absolute right-3 top-2" />
            {openSearchBox && (
              <SearchResults searchedProduct={searchedProduct} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const SearchResults = ({ searchedProduct }) => {
  return (
    <div
      style={{ scrollbarWidth: "thin" }}
      className="absolute z-40 top-full max-h-96 h-auto border overflow-y-auto  overflow-x-hidden  bg-white  w-full"
    >
      {searchedProduct?.length ? (
        <ul className=" w-full ">
          {searchedProduct?.map((product, index) => {
            const { name, id, featured_image, price } = product;
            return (
              <Link
                href={`product/${id}`}
                className="block   text-nowrap w-full border-b hover:bg-gray-100"
              >
                <li key={index} className="flex items-center hover:text-primary_gold   p-2 justify-between gap-3" >
                  <div className="prod_images relative" style={{ width: "40px", height: "40px" }}>
                    <ImageWithFallback src={featured_image} fill className="w-10 h-10" alt={name} />
                  </div>
                  <div className="details flex flex-col items-end  ">
                    <span title={name} className="text-primary_blue text-sm max-w-20">{name}</span>
                    <span className="text-gray-400  text-[10px]">RS.{price}</span>
                  </div>

                </li>
              </Link>
            );
          })}
        </ul>
      ) : (
        <p className="w-full text-center text-gray-400 p-4">No Results</p>
      )}
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
    <li className="flex items-center capitalize">
      {category.subcategories?.length ? (
        <div className="hover:text-primary_blue capitalize hover:font-medium border-b-2 border-transparent hover:border-primary_blue " onClick={handleDropDownOpen}>

          {category.name}
          <Dropdown
            openSubCat={openSubCat}
            handleDropdownClose={handleDropdownClose}
            category={category}
            dropDownRef={dropDownRef}
          />
        </div>
      ) : (
        <div className="hover:text-primary_blue capitalize  hover:font-medium border-b-2 border-transparent hover:border-primary_blue ">
          <Link
            className="m-0 p-0 h-full"
            href={`/filters?category=${category.id}`}
          >
            {category.name}
          </Link>
        </div>
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

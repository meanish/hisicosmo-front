"use client";
import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { useClickOutside } from "@/utils/useClickOutside";
import { ImageWithFallback } from "../ui/imageWithFallBack";
import { IoIosClose } from "react-icons/io";

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
          `https://tranquilbytes.com/hisicosmetics/product/search?text=${query}`
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
      <div className="nav-section container max-md:px-2">
        <div className="py-4 flex max-md:gap-2 items-center justify-between">
          <div className="nav_links relative">
            <p className=" md:hidden font-semibold text-center">Categories:</p>
            <ul className="flex items-center gap-7 max-md:flex-col max-md:absolute max-md:top-full w-full min-w-fit max-md:py-1 max-md:gap-2 max-md:bg-white max-md:shadow-lg max-md:rounded-md max-md:rounded-t-none">
              {nav_category?.map((category, index) => (
                <MenuItem key={index} category={category} />
              ))}
            </ul>
          </div>
          <div ref={searhRef} className="search_box relative max-w-[350px] max-md:w-[60%]">
            <input
              value={userInput}
              name="userInput"
              onChange={handleSearch}
              className="border text-sm w-full outline-primary_blue py-3 pl-4 pr-9 h-10 placeholder:text-gray-700 bg-gray-100"
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
      className="absolute z-40 top-full max-h-96 h-auto border overflow-y-auto  overflow-x-hidden  bg-white p-4 w-full"
    >
      {searchedProduct?.length ? (
        <ul className="grid gap-2 w-full ">
          {searchedProduct?.map((product, index) => {
            console.log(searchedProduct);
            const { name, id, featured_image, price } = product;
            return (
              <Link
                href={`product/${id}`}
                className="block overflow-x-clip hover:text-primary_gold text-nowrap w-full border-b p-2"
              >
                <li key={index} className="w-full flex items-center gap-3">
                  <div
                    className="prod_images relative"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <ImageWithFallback
                      src={featured_image}
                      fill
                      className="w-10 h-10"
                      alt={name}
                    />
                  </div>

                  <span className="text-primary_blue text-sm">{name}</span>
                </li>
              </Link>
            );
          })}
        </ul>
      ) : (
        <p className="w-full text-center font-semibold">No Results</p>
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
  console.log(openSubCat, "subCat");

  return (
    <li className="md:flex items-center capitalize min-w-fit w-full">
      {category.subcategories?.length ? (
        <div className="hover:text-primary_blue capitalize hover:font-medium border-b-2 border-transparent hover:border-primary_blue min-w-fit max-md:px-1 max-md:rounded-sm hover:cursor-pointer max-md:active:bg-gray-200 ">
          <span className="select-none" onClick={handleDropDownOpen}>{category.name}</span>
          <Dropdown
            setOpenSubCat={setOpenSubCat}
            openSubCat={openSubCat}
            handleDropdownClose={handleDropdownClose}
            category={category}
            dropDownRef={dropDownRef}
          />
        </div>
      ) : (
        <div className="hover:text-primary_blue capitalize  hover:font-medium border-b-2 border-transparent hover:border-primary_blue ">
          <Link
            className="m-0 p-0 select-none h-full min-w-fit max-md:px-1 max-md:rounded-sm"
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
  setOpenSubCat,
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
            className={` relative top-[197px]  flex gap-4 justify-between border overflow-hidden z-50 bg-white w-10/12  md:h-[420px] min-h-fit h-fit shadow p-5`}
          >
            <div className=" relative md:w-[330px] w-full h-full overflow-hidden">
              <div className="absolute flex items-end w-full h-full md:p-8 bg-fixed bg-primary_blue/50 top-0 left-0 bottom-0 right-0">
                <div className="h-fit w-full text-start space-y-3">
                  <h4 className="md:text-3xl text-xl capitalize text-white font-bold">
                    {category.name}
                  </h4>
                  <Link
                    href={category.slug}
                    className="md:text-lg text-base border-b-2 border-transparent hover:border-b-white block w-fit scale-95 hover:scale-100 text-white"
                  >
                    Explore All
                  </Link>
                </div>
              </div>
              <ImageWithFallback
                src={category.featured_image}
                alt="category-image"
                style={{ objectFit: "contain" }}
                width={330}
                height={400}
              />
            </div>
            <ul className="w-full flex  justify-between">
              <div className="flex flex-col py-4 gap-2 md:gap-4">
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
            <button
              onClick={() => setOpenSubCat(false)}
              className="close-modal absolute md:hidden z-50 active:font-semibold top-0 right-0"
            >
              <IoIosClose size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

import Image from "next/image";
import deal_product_image from "@/public/images/best-deal-brand.png";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useEffect, useState } from "react";
import { storeFilteredProductList } from "@/lib/store/slices/filterSlice";
import { CiFilter } from "react-icons/ci";
import { Filter_Form_Section } from "./filter_form_section";

export const Product_List_Section = () => {
  const dispatch = useDispatch();
  const filteredProductList = useSelector(
    (state) => state.manageFilterSlice.filteredProductList
  );

  const [sortByName, setSortByName] = useState("");
  const [sortByPrice, setSortByPrice] = useState("");
  const [openFilterSection, setOpenFilterSection] = useState(false);

  // Natural sorting function
  const handleSort = (name, value) => {
    let sortedList = [...filteredProductList];

    // Custom compare function for natural sorting
    const naturalSort = (a, b) => {
      return a.name.localeCompare(b.name, undefined, {
        numeric: true,
        sensitivity: "base",
      });
    };

    // Sort by name with natural sort (A-Z or Z-A)
    if (value === "A-Z") {
      sortedList.sort(naturalSort); // Ascending (natural order)
    } else if (value === "Z-A") {
      sortedList.sort((a, b) => naturalSort(b, a)); // Descending (natural order)
    }

    // Sort by price
    if (value === "low-to-high") {
      sortedList.sort((a, b) => a.price - b.price); // Ascending price
    } else if (value === "high-to-low") {
      sortedList.sort((a, b) => b.price - a.price); // Descending price
    }
    {
      if (name == "sortByName") {
        setSortByPrice("");
      } else {
        setSortByName("");
      }
    }

    dispatch(storeFilteredProductList(sortedList)); // Dispatch sorted list
  };

  // useEffect(() => {
  //   handleSort(); // Trigger sorting whenever sort option changes
  // }, [sortByName, sortByPrice]);

  // Handle changes for name sort
  const handleSortByNameChange = (e) => {
    const { name, value } = e.target;

    setSortByName(e.target.value); // Update sort state
    handleSort(name, value);
  };

  // Handle changes for price sort
  const handleSortByPriceChange = (e) => {
    const { name, value } = e.target;
    setSortByPrice(e.target.value); // Update sort state
    handleSort(name, value);
  };
  console.log(openFilterSection, "filtersection");
  return (
    <div className="w-full relative">
      <div
        className={`filter-form-sidebar ${
          openFilterSection ? "md:block" : "md:hidden"
        } absolute top-0 right-0  min-w-fit w-10/12 bg-black/60`}
      >
        <Filter_Form_Section
          setOpenFilterSection={setOpenFilterSection}
          className={`  bg-white border rounded-sm shadow-lg min-w-fit w-full `}
        />
      </div>
      <div className="head-section  w-full flex max-lg:flex-col justify-between gap-3 items-center">
        <div className="left-title-section">
          <p>Categories</p>
          <h4 className="text-primary_blue  text-lg font-medium">Facewash</h4>
        </div>
        <div>
          <button
            onClick={() => setOpenFilterSection(true)}
            className="lg:hidden w-full hover:cursor-pointer mb-2  font-medium flex gap-1 justify-end items-center"
          >
            Filter <CiFilter />
          </button>
          <div className="sort-section flex gap-4">
            <select
              value={sortByName}
              onChange={handleSortByNameChange}
              name="sortByName"
              id="sortByName"
              className=" text-center text-black py-2 w-48 border rounded-full"
            >
              <option disabled selected className="text-black" value="">
                Sort By Name
              </option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
            </select>

            <select
              value={sortByPrice}
              name="sortByPrice"
              onChange={handleSortByPriceChange}
              id="sortByPrice"
              className="text-center text-black py-2 w-48 border rounded-full"
            >
              <option disabled selected className="text-black" value="">
                Sort By Price
              </option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <div className="productList py-4 grid grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-2 overflow-y-auto">
        {filteredProductList.map((item, index) => {
          const {
            brand_id,
            createdAt,
            description,
            discount,
            id,
            name,
            price,
            product_description,
            slug,
            status,
            updatedAt,
          } = item;
          return (
            <div
              key={index}
              className="card-item border rounded-md w-full h-full "
            >
              <div className="w-full h-[312px] bg-white relative overflow-hidden rounded-t-lg">
                <Image
                  src={deal_product_image}
                  fill
                  size="100vw"
                  style={{ objectFit: "cover" }}
                  alt="deal-product-image"
                />
              </div>
              <div className="text-title p-5 bg-white rounded-b-lg w-full h-[117px]">
                <Link href={`/product/${id}`}>
                  <p className="text-primary_blue text-wrap font-base leading-snug tracking-wide line-clamp-2  mb-2 hover:underline">
                    {name}
                  </p>
                </Link>
                <p className="text-xl font-normal text-wrap  tracking-wide leading-tight text-primary_blue line-clamp-2">
                  {price}
                </p>

                <div className="discount flex gap-2 text-wrap">
                  <span className="line-through leading-none tracking-wide text-xs">
                    NPR. 638.4
                  </span>
                  <span className="leading-none tracking-wide text-xs">
                    Save NPR. 70.22
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const productList = [
  {
    name: "Aoduct 15",
    price: 500,
  },
  {
    name: "Boduct 15",
    price: 1500,
  },
  {
    name: "Poduct 15",
    price: 100,
  },
];

import { toggleBrand } from "@/lib/store/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Circular_Search_Box } from "./filter_form_section";
import { useState } from "react";
import { storeBrandData } from "@/lib/store/slices/brand_category_slice";
import { getBrandBasedProducts } from "@/app/api/brands/route";

export const BrandAccordionContainer = ({ title, itemLists }) => {
  const dispatch = useDispatch();

  const BrandList = useSelector(
    (state) => state.manage_brand_category_list.brandList
  );

  const selectedBrandIds = useSelector(
    (state) => state.manageFilterSlice.selectedBrandIds
  ); // Get selected brand IDs

  const [userInput, setUserInput] = useState("");

  const handleSearch = async (e) => {
    const query = e.target.value;
    setUserInput(query);

    if (query.length > 0) {
      try {
        const response = await fetch(
          `http://tranquilbytes.com/hisicosmetics/brand/search?text=${query}`
        );
        const data = await response.json();
        dispatch(storeBrandData(data?.data));
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      const brandData = await getBrandBasedProducts();
      dispatch(storeBrandData(brandData?.data));
    }
  };

  const handleCheckboxChange = (id) => {
    dispatch(toggleBrand(id)); // Dispatch toggleBrand action
  };

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger className="font-bold text-xl text-black/70">
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <Circular_Search_Box value={userInput} onChange={handleSearch} />

          <div>
            {BrandList?.map((item, index) => {
              const { name, id } = item;
              const isChecked = selectedBrandIds.includes(id); // Check if brand ID is selected

              return (
                <label
                  key={index}
                  htmlFor={id}
                  className="flex items-center hover:bg-gray-200 justify-between px-1 py-4 border-t-2 w-full cursor-pointer"
                >
                  {name}
                  <input
                    type="checkbox"
                    id={id}
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(id)} // Handle checkbox change
                    className="size-5 text-text_gray hover:cursor-pointer"
                  />
                </label>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

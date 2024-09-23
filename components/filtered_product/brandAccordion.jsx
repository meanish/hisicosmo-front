import { toggleBrand } from "@/lib/store/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Circular_Search_Box } from "./filter_form_section";
import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "@/utils/useClickOutside";
import { SearchResults } from "../header_and_footer/navbar";

export const BrandAccordionContainer = ({ title, itemLists }) => {
  const dispatch = useDispatch();
  const selectedBrandIds = useSelector(
    (state) => state.manageFilterSlice.selectedBrandIds
  ); // Get selected brand IDs

  const [userInput, setUserInput] = useState("");
  const [searchedProduct, setSearchedProduct] = useState(null);
  const [openSearchBox, setOpenSearchBox] = useState(false);
  const searchRef = useRef();
  useClickOutside(searchRef, () => setOpenSearchBox(false));

  const handleSearch = async (e) => {
    const query = e.target.value;
    setUserInput(query);

    if (query.length > 0) {
      try {
        const response = await fetch(
          `http://tranquilbytes.com/hisicosmetics/brand/search?text=${query}`
        );
        const data = await response.json();
        setSearchedProduct(data.data);
        console.log("Search Results:", data); // Do something with the search results
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
          <div ref={searchRef} className="relative w-full">
            <Circular_Search_Box value={userInput} onChange={handleSearch} />
            {openSearchBox && (
              <SearchResults searchedProduct={searchedProduct} />
            )}
          </div>

          <div>
            {itemLists.data.map((item, index) => {
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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toggleCategory } from "@/lib/store/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { Circular_Search_Box } from "./filter_form_section";
import { useEffect, useRef, useState } from "react";
import { SearchResults } from "../header_and_footer/navbar";
import { useClickOutside } from "@/utils/useClickOutside";

export const CategoryAccordionContainer = ({ title, categoryData }) => {
  const dispatch = useDispatch();
  const selectedCategoryIds = useSelector(
    (state) => state.manageFilterSlice.selectedCategoryIds
  ); // Get selected category IDs

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
          `http://tranquilbytes.com/hisicosmetics/category/search?text=${query}`
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

  const handleCategoryChange = (id) => {
    dispatch(toggleCategory(id)); // Dispatch toggleCategory action
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
            {categoryData.data.map((item, index) => {
              const { name, id, subcategories } = item;
              const isCategoryChecked = selectedCategoryIds.includes(id); // Check if category is selected

              return (
                <Accordion key={id} type="single" collapsible>
                  <AccordionItem value={`item-${id}`} className="border-b-0">
                    <AccordionTrigger className="font-semibold text-base text-black">
                      {name}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        {subcategories.map((subItem, subIndex) => {
                          const { name, id } = subItem;
                          const isSubCategoryChecked =
                            selectedCategoryIds.includes(id); // Check if subcategory is selected

                          return (
                            <label
                              key={subIndex}
                              htmlFor={id}
                              className="flex items-center hover:bg-gray-200 justify-between px-1 py-4 border-t-2 w-full cursor-pointer"
                            >
                              {name}
                              <input
                                type="checkbox"
                                id={id}
                                checked={isSubCategoryChecked}
                                onChange={() => handleCategoryChange(id)} // Handle checkbox change
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
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toggleCategory } from "@/lib/store/slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { Circular_Search_Box } from "./filter_form_section";
import { useState } from "react";
import { storeCategoryData } from "@/lib/store/slices/brand_category_slice";
import { getNavCategory } from "@/app/api/nav_category/route";

export const CategoryAccordionContainer = ({ title }) => {
  const dispatch = useDispatch();

  const CategoryList = useSelector(
    (state) => state.manage_brand_category_list.categoryList
  );

  const selectedCategoryIds = useSelector(
    (state) => state.manageFilterSlice.selectedCategoryIds
  ); // Get selected category IDs

  const [userInput, setUserInput] = useState("");

  const handleSearch = async (e) => {
    const query = e.target.value;
    setUserInput(query);

    if (query.length > 0) {
      try {
        const response = await fetch(
          `http://tranquilbytes.com/hisicosmetics/category/search?text=${query}`
        );
        const data = await response.json();
        // setSearchedProduct(data.data);
        dispatch(storeCategoryData(data?.data));
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      const categoryData = await getNavCategory();
      dispatch(storeCategoryData(categoryData?.data));
    }
  };

  const handleCategoryChange = (id) => {
    dispatch(toggleCategory(id)); // Dispatch toggleCategory action
  };

  console.log(CategoryList, "cate-list");

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1" className="border-b-0">
        <AccordionTrigger className="font-bold text-xl text-black/70">
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <Circular_Search_Box value={userInput} onChange={handleSearch} />

          <div>
            {CategoryList?.map((item, index) => {
              const { name, id, subcategories } = item;
              const isCategoryChecked = selectedCategoryIds.includes(id); // Check if category is selected

              return (
                <>
                  {item?.subcategories?.length ? (
                    <Accordion key={id} type="single" collapsible>
                      <AccordionItem
                        value={`item-${id}`}
                        className="border-b-0"
                      >
                        <AccordionTrigger className="font-semibold text-base text-black">
                          {name}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div>
                            {subcategories?.map((subItem, subIndex) => {
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
                  ) : (
                    <label
                      key={index}
                      htmlFor={id}
                      className="flex items-center hover:bg-gray-200 justify-between px-1 py-4 border-t-2 w-full cursor-pointer"
                    >
                      {name}
                      <input
                        type="checkbox"
                        id={id}
                        checked={isCategoryChecked}
                        onChange={() => handleCategoryChange(id)} // Handle checkbox change
                        className="size-5 text-text_gray hover:cursor-pointer"
                      />
                    </label>
                  )}
                </>
              );
            })}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

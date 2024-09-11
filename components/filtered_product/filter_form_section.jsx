"use client ";
import { GrPowerReset } from "react-icons/gr";
import { FaRegCircle } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Filter_Form_Section = ({ brandData, categoryData }) => {
  return (
    <div className="w-1/4 p-4">
      <div className="head-section mb-5 flex justify-between items-center">
        <p className="font-medium text-base">Filter</p>
        <button className="text-primary_blue text-sm flex items-center gap-1">
          Reset <GrPowerReset />
        </button>
      </div>

      <div className="filter-by-brand">
        <BrandAccordianContainer
          title={"Filter by Brand"}
          itemLists={brandData}
        />
      </div>

      <div className="filter-by-category">
        <CategoryAccordianContainer
          title={"Filter by category"}
          categoryData={categoryData}
        />
      </div>
      <div className="price-range"></div>
    </div>
  );
};

export const Circular_Search_Box = () => {
  return (
    <div className=" my-4 flex rounded-full px-6 gap-2 items-center border focus-within:border-black bg-gray-100">
      <FaRegCircle className="" />
      <input
        type="text"
        name="search-box"
        className="w-full py-4 px-1 placeholder-gray-400 rounded-full border-none outline-none bg-gray-100 h-full "
        placeholder="Search"
      />
    </div>
  );
};

export const BrandAccordianContainer = ({ title, itemLists }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1 " className="border-b-0">
        <AccordionTrigger className="font-bold text-xl  text-black/70">
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <Circular_Search_Box />
          <div>
            {itemLists.data.map((item, index) => {
              const { name, id } = item;
              return (
                <label
                  key={id}
                  htmlFor={id}
                  className="flex items-center hover:bg-gray-200 justify-between px-1 py-4 border-t-2 w-full cursor-pointer "
                >
                  {name}
                  <input
                    type="checkbox"
                    id={id}
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

export const CategoryAccordianContainer = ({ title, categoryData }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1 " className="border-b-0">
        <AccordionTrigger className="font-bold text-xl  text-black/70">
          {title}
        </AccordionTrigger>
        <AccordionContent>
          <Circular_Search_Box />

          <div>
            {categoryData.data.map((item, index) => {
              const { name, id, subcategories } = item;
              console.log(item.subcategories, "sub");
              return (
                <Accordion key={id} type="single" collapsible>
                  <AccordionItem value="item-1 " className="border-b-0">
                    <AccordionTrigger className="font-semibold text-base  text-black">
                      {name}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div>
                        {subcategories.map((item, index) => {
                          const { name, id } = item;
                          return (
                            <label
                              key={id}
                              htmlFor={id}
                              className="flex items-center hover:bg-gray-200 justify-between px-1 py-4 border-t-2 w-full cursor-pointer "
                            >
                              {name}
                              <input
                                type="checkbox"
                                id={id}
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

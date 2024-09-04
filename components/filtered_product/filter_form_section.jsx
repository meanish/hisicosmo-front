import { GrPowerReset } from "react-icons/gr";
import { FaRegCircle } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Filter_Form_Section = () => {
  return (
    <div className="w-1/4 p-4">
      <div className="head-section mb-5 flex justify-between items-center">
        <p className="font-medium text-base">Filter</p>
        <button className="text-primary_blue text-sm flex items-center gap-1">
          Reset <GrPowerReset />
        </button>
      </div>

      <div className="filter-by-brand">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1 " className="border-b-0">
            <AccordionTrigger className="font-bold text-xl  text-black/70">
              Filter by Brand
            </AccordionTrigger>
            <AccordionContent>
              <Circular_Search_Box />
              <div>
                {Array(4)
                  .fill(null)
                  .map((brand, index) => {
                    return (
                      <label
                        key={index}
                        htmlFor={index}
                        className="flex items-center hover:bg-gray-200 justify-between px-1 py-4 border-t-2 w-full cursor-pointer "
                      >
                        Alzibda
                        <input
                          type="checkbox"
                          id={index}
                          className="size-5 text-text_gray hover:cursor-pointer"
                        />
                      </label>
                    );
                  })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="filter-by-category"></div>
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

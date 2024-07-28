import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";

const list = [
  {
    title: "Free Delivery",
    subtitle: "Order over $499.00.",
    icon: <HiOutlineShoppingCart size={26} />,
  },
  {
    title: "Free Delivery",
    subtitle: "Order over $499.00.",
    icon: <HiOutlineShoppingCart size={26} />,
  },
  {
    title: "Free Delivery",
    subtitle: "Order over $499.00.",
    icon: <HiOutlineShoppingCart size={26} />,
  },
  {
    title: "Free Delivery",
    subtitle: "Order over $499.00.",
    icon: <HiOutlineShoppingCart size={26} />,
  },
  {
    title: "Free Delivery",
    subtitle: "Order over $499.00.",
    icon: <HiOutlineShoppingCart size={26} />,
  },
];
const Services = () => {
  return (
    <>
      <ul className="py-10 border-t flex justify-evenly">
        {list.map((item, index) => {
          const { title, subtitle, icon } = item;
          return (
            <div key={index} className="h-11 flex justify-center items-center gap-2">
              <div>{icon}</div>
              <div>
                <p className="text-sm font-semibold ">{title}</p>
                <p className="text-sm font-semibold  text-text_gray">
                  {subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Services;

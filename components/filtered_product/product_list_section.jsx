import Image from "next/image";
import deal_product_image from "@/public/images/best-deal-brand.png";

export const Product_List_Section = () => {
  return (
    <div className="w-full">
      <div className="head-section  w-full flex justify-between gap-3 items-center">
        <div className="left-title-section">
          <p>Categories</p>
          <h4 className="text-primary_blue  text-lg font-medium">Facewash</h4>
        </div>
        <div className="sort-section">
          <select
            value="sort"
            name="sort"
            id="sort"
            className=" text-black p-4 w-48 border rounded-full"
          >
            <option disabled className="text-black" value="sort">
              Sort By
            </option>
            <option value="name">Name</option>
            <option value="date">Date</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      <div className="productList py-4 flex flex-wrap justify-between gap-2 overflow-y-auto">
        {Array(20)
          .fill(null)
          .map((item, index) => {
            return (
              <div key={index} className="card-item border rounded-md ">
                <div className="w-[231px] h-[312px] bg-white relative overflow-hidden rounded-t-lg">
                  <Image
                    src={deal_product_image}
                    fill
                    size="100vw"
                    style={{ objectFit: "cover" }}
                    alt="deal-product-image"
                  />
                </div>
                <div className="text-title p-5 bg-white rounded-b-lg w-[231px] h-fit">
                  <p className="text-primary_blue font-base leading-snug tracking-wide line-clamp-2  mb-2">
                    Alziba VITAMIN C foaming Facewash 150ml
                  </p>
                  <p className="text-xl font-normal  tracking-wide leading-tight text-primary_blue line-clamp-2">
                    NPR. 959
                  </p>

                  <div className="discount flex gap-2">
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

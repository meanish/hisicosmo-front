import { IoDocumentTextOutline } from "react-icons/io5";
import { FAQ } from "./faq";
import { ProductDetails } from "./productDetails";
import { Ratings_Review } from "./productReview";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ProductDescriptionSection = ({ data }) => {
  const { description, ratings, review, faqs } = data;

  return (
    <div className="product-description container my-9 ">
      <Tabs defaultValue="product-details" className=" w-full">
        <TabsList className="p-0 h-auto select-none">
          <TabsTrigger
            className=" rounded-none rounded-t-lg space-x-2"
            value="product-details"
          >
            {" "}
            <IoDocumentTextOutline /> <span>Description</span>
          </TabsTrigger>
          <TabsTrigger
            className=" rounded-none rounded-t-lg space-x-2"
            value="Rating-Reviews"
          >
            {" "}
            <IoDocumentTextOutline />
            <span>Rating & Reviews</span>
          </TabsTrigger>
          <TabsTrigger
            className=" rounded-none rounded-t-lg space-x-2"
            value="FAQs"
          >
            {" "}
            <IoDocumentTextOutline />
            <span>FAQs</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="product-details">
          <ProductDetails data={data} />
        </TabsContent>
        <TabsContent value="Rating-Reviews">
          <Ratings_Review data={data} />
        </TabsContent>
        <TabsContent value="FAQs">
          <FAQ data={data} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

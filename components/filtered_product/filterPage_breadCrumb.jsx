import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const BreadCrumb = ({
  category = "SkinCare",
  product = "facewash",
  id = "1",
}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-blue-500 text-base">
        <BreadcrumbItem>
          <BreadcrumbLink className="hover:opacity-80" href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink className="hover:opacity-80" href={`/product/${id}`}>
            {category}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink
            className="hover:opacity-80"
            href={`/filtered_product/${id}`}
          >
            {product}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

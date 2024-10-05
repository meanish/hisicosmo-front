import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const OneCrumb = ({
    page
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
                    <BreadcrumbLink className="hover:opacity-80" href="#">
                        {page}
                    </BreadcrumbLink>
                </BreadcrumbItem>

            </BreadcrumbList>
        </Breadcrumb>
    );
};

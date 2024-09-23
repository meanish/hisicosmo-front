const { getFilteredProduct } = require("@/app/api/filters/route");

// Helper function to build query string from parameters
const buildFilterQuery = (brandIds, categoryIds, minPrice, maxPrice) => {
    const params = new URLSearchParams();

    if (brandIds.length) {
        params.append('brand', brandIds.join(',')); // Add brand IDs
    }

    if (categoryIds.length) {
        params.append('category', categoryIds.join(',')); // Add category IDs
    }

    if (minPrice !== undefined) {
        params.append('minPrice', minPrice); // Add minPrice
    }

    if (maxPrice !== undefined) {
        params.append('maxPrice', maxPrice); // Add maxPrice
    }

    return `${params.toString()}`; // Return query string
};

// Fetch data based on the selected filters
export const fetchFilteredProducts = async (brandIds, categoryIds, minPrice, maxPrice) => {
    const query = buildFilterQuery(brandIds, categoryIds, minPrice, maxPrice);
    const filteredData = await getFilteredProduct(query); // Call the API with the query string
    return filteredData;
};

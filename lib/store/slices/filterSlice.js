import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filteredProductList: [],
    selectedBrandIds: [],
    selectedCategoryIds: [],
    priceRange: { min: 1, max: 20000 },

};

const manageFilterSlice = createSlice({
    name: 'filterProducts',
    initialState,
    reducers: {

        storeFilteredProductList: (state, action) => {
            const data = action.payload
            if (data) {
                state.filteredProductList = [...data]
            }

        },
        // Toggle brand ID selection
        toggleBrand: (state, action) => {
            const brandId = action.payload;
            if (state.selectedBrandIds.includes(brandId)) {
                state.selectedBrandIds = state.selectedBrandIds.filter(id => id !== brandId);
            } else {
                state.selectedBrandIds.push(brandId);
            }
        },

        // Toggle category or subcategory ID selection
        toggleCategory: (state, action) => {
            const categoryId = action.payload;
            if (state.selectedCategoryIds.includes(categoryId)) {
                state.selectedCategoryIds = state.selectedCategoryIds.filter(id => id !== categoryId);
            } else {
                state.selectedCategoryIds.push(categoryId);
            }
        },

        setPriceRange: (state, action) => {
            const { min, max } = action.payload;
            state.priceRange = { min, max }; // Update min and max in the state
        },
        resetFilters: (state) => {
            state.selectedBrandIds = [];
            state.selectedCategoryIds = [];
            state.priceRange = { min: 1, max: 20000 };
        },

    },
});

export const { storeFilteredProductList, toggleBrand, toggleCategory, setPriceRange, resetFilters } = manageFilterSlice.actions;
export default manageFilterSlice;

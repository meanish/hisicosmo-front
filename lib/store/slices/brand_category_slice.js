import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    brandList: [],
    categoryList: [],

};

const manage_brand_category_list = createSlice({
    name: 'brand_category_list',
    initialState,
    reducers: {

        storeBrandData: (state, action) => {
            state.brandList = action.payload
        },
        storeCategoryData: (state, action) => {
            state.categoryList = action.payload

        }
    }
});

export const { storeBrandData, storeCategoryData } = manage_brand_category_list.actions;
export default manage_brand_category_list;

import { configureStore } from "@reduxjs/toolkit";
import { manageCart } from "./slices/cartSlices";
import manageFilterSlice from "./slices/filterSlice";
import manage_brand_category_list from "./slices/brand_category_slice";
import manageUserData from "./slices/userDataSlice";

const store = configureStore({
    reducer: {
        cartData: manageCart.reducer,
        manageFilterSlice: manageFilterSlice.reducer,
        manage_brand_category_list: manage_brand_category_list.reducer,
        manageUserData: manageUserData.reducer

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});


export { store };
import { configureStore } from "@reduxjs/toolkit";
import { manageCart } from "./slices/cartSlices";
import manageFilterSlice from "./slices/filterSlice";

const store = configureStore({
    reducer: {
        cartData: manageCart.reducer,
        manageFilterSlice: manageFilterSlice.reducer,

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});


export { store };
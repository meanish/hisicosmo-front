import { configureStore } from "@reduxjs/toolkit";
import { manageCart } from "./slices/cartSlices";

const store = configureStore({
    reducer: {
        cartData: manageCart.reducer,

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});


export { store };
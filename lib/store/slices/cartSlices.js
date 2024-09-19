

"use client"
import { createSlice } from "@reduxjs/toolkit";



// Define the initial state
const initialState = {
    cartData: [],
    activeCart: [],

};



// Create a slice using createSlice function
const manageCart = createSlice({
    name: "Add to Cart",
    initialState,
    reducers: {
        //state updates when changes in filteration
        storeCartDetails: (state, action) => {
            const { data } = action.payload;
            console.log(data)

            const updatedCart = data?.map((currCart) => {
                return { ...currCart, isActive: false }
            })



            return {
                ...state,
                cartData: updatedCart
            }
        },

        modifyCart: (state, action) => {
            const { id } = action.payload

            const updatedCart = state.cartData.map((currCart) => {
                if (currCart.product_id === id) {
                    return { ...currCart, isActive: !currCart.isActive }
                }
                else return currCart
            })


            const isInActiveCart = state.activeCart.some((currActive) => currActive.product_id === id);

            let updatedActiveCart;
            if (isInActiveCart) {
                updatedActiveCart = state.activeCart.filter((currActive) => currActive.product_id !== id);
            } else {
                const productToAdd = state.cartData.find((currCart) => currCart.product_id === id);
                updatedActiveCart = [...state.activeCart, { ...productToAdd }];
            }

            return {
                ...state,
                activeCart: updatedActiveCart,
                cartData: updatedCart,
            };
        },


        removeActiveItem: (state, action) => {
            const { id } = action.payload

            const updatedActiveCart = state.activeCart.filter((currData) => currData.product_id != id)

            const updatedCart = state.cartData.map((currData) => {
                if (currData.product_id === id) {
                    return {
                        ...currData,
                        isActive: false,
                    }
                }
                else return currData
            })
            return {
                ...state,
                activeCart: updatedActiveCart,
                cartData: updatedCart

            }
        }

    },
});

// Export the slice and actions
export { manageCart };
export const { storeCartDetails, modifyCart, removeActiveItem } = manageCart.actions;
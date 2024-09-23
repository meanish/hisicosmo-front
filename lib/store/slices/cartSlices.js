"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// using thunk cause its being a while now
export const fetchCartData = createAsyncThunk(
    "cart/fetchCartData",
    async (token, { rejectWithValue }) => {
        try {
            const res = await fetch("/api/cart/mycarts", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const cartData = await res.json();
            if (res.status === 200) {
                return cartData.data;
            } else {
                throw new Error(cartData.message || "Failed to fetch cart data");
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


const initialState = {
    cartData: [],
    activeCart: [],
    totalAmount: 0,
    status: "idle",
    error: null,
};

const manageCart = createSlice({
    name: "cart",
    initialState,
    reducers: {
        storeCartDetails: (state, action) => {
            const { data } = action.payload;
            const updatedCart = data?.map((currCart) => {
                return {
                    ...currCart,
                    isActive: false,
                    totalprice: currCart.product.price * currCart.quantity
                };
            });
            return {
                ...state,
                cartData: updatedCart,
            };
        },

        modifyCart: (state, action) => {
            const { id } = action.payload;
            const updatedCart = state.cartData.map((currCart) => {
                if (currCart.product_id === id) {
                    return { ...currCart, isActive: !currCart.isActive };
                } else return currCart;
            });

            const isInActiveCart = state.activeCart.some(
                (currActive) => currActive.product_id === id
            );

            let updatedActiveCart;
            if (isInActiveCart) {
                updatedActiveCart = state.activeCart.filter(
                    (currActive) => currActive.product_id !== id
                );
            } else {
                const productToAdd = state.cartData.find(
                    (currCart) => currCart.product_id === id
                );
                updatedActiveCart = [...state.activeCart, { ...productToAdd }];
            }

            const totalAmount = updatedActiveCart.reduce((acc, currItem) => {
                return acc + (currItem.totalprice || 0);
            }, 0);



            return {
                ...state,
                activeCart: updatedActiveCart,
                cartData: updatedCart,
                totalAmount: totalAmount
            };
        },

        removeActiveItem: (state, action) => {
            const { id } = action.payload;
            const updatedActiveCart = state.activeCart.filter(
                (currData) => currData.product_id !== id
            );

            const updatedCart = state.cartData.map((currData) => {
                if (currData.product_id === id) {
                    return {
                        ...currData,
                        isActive: false,
                    };
                } else return currData;
            });

            return {
                ...state,
                activeCart: updatedActiveCart,
                cartData: updatedCart,
            };
        },

        removeCartItems: (state, action) => {
            const { id } = action.payload;
            const updatedCart = state.cartData.filter(
                (currData) => currData.product_id !== id
            );
            return {
                ...state,
                cartData: updatedCart,
            };
        },

        modifyQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const updatedCart = state.cartData.map((currData) => {
                if (currData.product_id === id) {
                    return {
                        ...currData,
                        quantity,
                    };
                } else return currData;
            });

            return {
                ...state,
                cartData: updatedCart,
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartData.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchCartData.fulfilled, (state, action) => {
                const updatedCart = action.payload?.map((currCart) => {
                    return {
                        ...currCart,
                        isActive: false,
                        totalprice: currCart.product.price * currCart.quantity,
                    };
                });
                state.status = "succeeded";
                state.cartData = updatedCart;
            })
            .addCase(fetchCartData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export { manageCart };
export const { storeCartDetails, modifyCart, removeActiveItem, modifyQuantity, removeCartItems } = manageCart.actions;
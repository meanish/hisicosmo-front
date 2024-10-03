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
            console.log(cartData)
            if (res.status === 200) {
                return cartData?.data;
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
    cartNumber: 0,
    showCartnumber: false,
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
        resetAllCart: (state, action) => {
            return {
                ...state,
                cartData: [],
                activeCart: [],
                totalAmount: 0,
                orderplacement: []
            }
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

            const updatedActiveCart = state.activeCart.filter(
                (currActive) => currActive.product_id !== id
            );

            const totalAmount = updatedActiveCart.reduce((acc, currItem) => {
                return acc + (currItem.totalprice || 0);
            }, 0);


            return {
                ...state,
                cartData: updatedCart,
                activeCart: updatedActiveCart,
                totalAmount: totalAmount
            };
        },

        modifyQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const updatedCart = state.cartData.map((currData) => {
                if (currData.product_id === id) {
                    return {
                        ...currData,
                        quantity,
                        isActive: false,
                        totalprice: currData.product.price * quantity
                    };
                } else return currData;
            });

            const updatedActiveCart = state.activeCart.filter(
                (currActive) => currActive.product_id !== id
            );

            const totalAmount = updatedActiveCart.reduce((acc, currItem) => {
                return acc + (currItem.totalprice || 0);
            }, 0);



            return {
                ...state,
                cartData: updatedCart,
                activeCart: updatedActiveCart,
                totalAmount: totalAmount
            };
        },
        storeOrderplacement: (state, action) => {
            const { activeCart, paymentType, totalAmount } = action.payload

            console.log(paymentType, activeCart)

            const AllProducts = activeCart.map((currProduct) => {
                return {
                    product_id: currProduct.product.id,
                    quantity: currProduct.quantity,
                    price: currProduct.product.price
                }
            })

            return {
                ...state,
                orderplacement: {
                    totalAmount: totalAmount,
                    products: AllProducts,
                    payment_type: paymentType
                }

            }
        },
        setOrderPayment: (state, action) => {
            const { name } = action.payload


            return {
                ...state,
                orderplacement: {
                    ...state.orderplacement,
                    payment_type: name
                }

            }
        },
        activeCartDisplay: (state, action) => {
            return {
                ...state,
                cartNumber: state.cartData.length > 0 ? state.cartData.length + 1 : 1,
                showCartnumber: true,
            }
        },
        removeAfterOrder: (state, action) => {
            const { id } = action.payload;
            console.log(state.cartData)
            console.log(id)


            const updatedActiveCart = state.activeCart.filter(
                (currData) => currData.product_id !== id
            );

            const updatedCart = state.cartData.filter(
                (currData) => currData.product_id !== id
            );

            return {
                ...state,
                activeCart: updatedActiveCart,
                cartData: updatedCart,
            };
        }
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
                state.showCartnumber = false;
            })
            .addCase(fetchCartData.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export { manageCart };
export const { storeCartDetails, modifyCart, removeActiveItem, modifyQuantity, removeCartItems, resetAllCart, storeOrderplacement, setOrderPayment, activeCartDisplay, removeAfterOrder } = manageCart.actions;
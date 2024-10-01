import { getAllProducts } from "@/app/api/all_products/route";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const fetchActiveFavorites = createAsyncThunk(
    "store/getActiveFavorites",
    async (_, { rejectWithValue }) => {
        try {

            console.log("called")
            const storedFavourites = JSON.parse(localStorage.getItem("Favorites")) || [];

            console.log(storedFavourites)
            const res = await getAllProducts();
            const allProducts = res?.data || [];

            const favoriteProducts = allProducts.filter(product =>
                storedFavourites.includes(product.id)
            );
            console.log(favoriteProducts)
            return favoriteProducts;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    allFavourites: [],
    status: "idle",
    favNumber: 0,
    showFav: false,
    error: null,
};

const managefavourites = createSlice({
    name: "Favourites",
    initialState,
    reducers: {
        setFavorites: (state, action) => {
            state.allFavourites = action.payload;
            localStorage.setItem("Favorites", JSON.stringify(action.payload.map(fav => fav.id)));
        },
        removeFavorites: (state, action) => {
            const { id } = action.payload

            state.allFavourites = state.allFavourites?.filter((currData) => currData.id != id)

            const storedFavourites = JSON.parse(localStorage.getItem("Favorites")) || [];

            // for localstorage remove
            const updatedFavorites = storedFavourites.filter(favId => favId !== id);
            localStorage.setItem("Favorites", JSON.stringify(updatedFavorites));


        },
        activeFavDisplay: (state, action) => {
            const { number } = action.payload
            return {
                ...state,
                favNumber: number,
                showFav: true
            }
        }

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchActiveFavorites.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchActiveFavorites.fulfilled, (state, action) => {
                state.status = "success";
                state.allFavourites = action.payload;
                state.showFav = false;
            })
            .addCase(fetchActiveFavorites.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload;
            });
    },
});

export { managefavourites };
export const { setFavorites, removeFavorites, activeFavDisplay } = managefavourites.actions;

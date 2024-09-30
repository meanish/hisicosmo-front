"use client"
import { fetchActiveFavorites, removeFavorites } from '@/lib/store/slices/favouriteSlice';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const WishList = () => {
    const dispatch = useDispatch();

    const { status, allFavourites } = useSelector((state) => state.managefavorites);

    const {data:session} = useSession()
    console.log("session",session)



    console.log(status, allFavourites)

    useEffect(() => {
        dispatch(fetchActiveFavorites());
    }, []);

    { status === "loading" && <p>Loading...</p> }


    return (
        <div>
            {
                allFavourites.length > 0 ? <WishProducts status={status} allFavourites={allFavourites} token={session?.user?.token} /> : (
                    <p>No favorites found</p>
                )
            }
        </div>
    );
};

export default WishList;


const WishProducts = ({ status, allFavourites, token }) => {
    const dispatch = useDispatch();

    const [allProducts, setAllproducts] = useState(allFavourites)

const router =useRouter()
    console.log(allProducts)

    // Handle removal of a favorite
    const removefavoritesHandler = (id) => {
        setAllproducts((currVal) => currVal.filter(fav => fav.id !== id));
        dispatch(removeFavorites({ id }));
    };

    const cartHandler = async (id) => {
        if (!token) {
            router.push("/auth/login")
        }
        else {
            try {

                const res = await fetch("/api/cart/store", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({ id, quantity: 1 })
                })

                const response = await res.json()

                if (response?.status === 200) {
                    toast.success(response?.message)
                    const favorites = JSON.parse(localStorage.getItem("Favorites")) || [];
                    setAllproducts((currVal) => currVal.filter(fav => fav.id !== id))

                    const updatedFavorites = favorites?.filter(fav => fav !== id);
                    localStorage.setItem("Favorites", JSON.stringify(updatedFavorites));

                }
                else {
                    toast.error(response?.message)
                }
            }
            catch (e) {
                toast.error("Eror in adding cart", e.message)
            }
        }
    }


    return (
        <>



            {allProducts?.length > 0 ? (
                allProducts?.map((currProduct) => {
                    const { id } = currProduct;
                    return (
                        <div className="flex flex-col gap-5" key={id}>
                            <p>Name: {currProduct.name}</p>
                            <button className="w-[152px] h-[30px] hover:bg-opacity-80 active:scale-90 active:bg-opacity-100 rounded text-sm bg-primary_blue text-white" onClick={() => cartHandler(id)}>
                                Add To Cart
                            </button>
                            <button onClick={() => removefavoritesHandler(id)}>Remove It</button>
                        </div>
                    );
                })
            ) : null}

        </>
    )
}
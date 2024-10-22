"use client"
import ButtonBlue from '@/components/ui/buttonBlue';
import HeadingTitle from '@/components/ui/header';
import { activeCartDisplay } from '@/lib/store/slices/cartSlices';
import { fetchActiveFavorites, removeFavorites } from '@/lib/store/slices/favouriteSlice';
import { activeStatusLogin } from '@/lib/store/slices/loginStatusSlice';
import { Trash2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const WishList = () => {
    const dispatch = useDispatch();

    const { status, allFavourites } = useSelector((state) => state.managefavorites);

    const { data: session } = useSession()
    useEffect(() => {
        dispatch(fetchActiveFavorites());
    }, []);

    {
        status === "loading" && <div className="min-h-[35vh] bg-white text-center p-4"><span className="text-gray-400 text-center ">Loading...</span></div>
    }


    return (
        <div>
            {
                allFavourites.length > 0 ? <WishProducts status={status} allFavourites={allFavourites} token={session?.user?.token} /> : (
                    <div className="min-h-[35vh] bg-white text-center p-4"><span className="text-gray-400 text-center ">No favorites found</span></div>
                )
            }
        </div>
    );
};

export default WishList;


const WishProducts = ({ status, allFavourites, token }) => {
    const dispatch = useDispatch();

    const [allProducts, setAllproducts] = useState(allFavourites)

    const router = useRouter()
    console.log(allProducts)

    // Handle removal of a favorite
    const removefavoritesHandler = (id) => {
        setAllproducts((currVal) => currVal.filter(fav => fav.id !== id));
        dispatch(removeFavorites({ id }));
    };

    const cartHandler = async (id) => {
        if (!token) {
            dispatch(activeStatusLogin())
            // router.push("/auth/login")
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
                    dispatch(activeCartDisplay())
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
        <div className="wishlist bg-white container">
            <HeadingTitle title="wishlist" />


            <div className="listing my-6">
                {allProducts?.length > 0 ? (
                    allProducts?.map((currProduct) => {
                        const { id, featured_image, price, name, slug } = currProduct;

                        return (
                            <div className="flex items-center gap-5 justify-between py-5 border-b-4" key={id}>
                                <div className="product_img">
                                    <Image src={featured_image} alt={slug} width={200} height={200} />
                                </div>
                                <Link href={`/product/${id}`}><p className='text-xl'>{name}</p></Link>
                                <p className='text-primary_blue text-2xl'>Rs: {price}</p>
                                <div className="action flex items-center gap-5">

                                    <ButtonBlue onClick={() => cartHandler(id)}>
                                        Add To Cart
                                    </ButtonBlue>
                                    <button onClick={() => removefavoritesHandler(id)}><Trash2 className="w-6 h-6" color="red" /></button>
                                </div>
                            </div>
                        );
                    })
                ) : null}

            </div>
        </div>
    )
}
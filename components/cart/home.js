"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData, modifyCart, modifyQuantity, removeCartItems, resetAllCart } from '@/lib/store/slices/cartSlices';
import Link from 'next/link';
import HeadingTitle from '../ui/header';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';
import { ImageWithFallback } from '../ui/imageWithFallBack';
import { MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';
import { FaCheckSquare } from 'react-icons/fa';



const CartHome = ({ token, checkoutStatus }) => {


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCartData(token));
        dispatch(resetAllCart())
    }, [dispatch, token]);

    const { cartData, status, error } = useSelector((state) => state.cartData);



    if (status === "failed") {
        return <p>Error: {error}</p>;
    }


    // const { data: session } = useSession();

    const deleteHandler = async (id) => {
        try {
            let method = "remove"
            const res = await fetch("/api/cart/async", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ id, method })
            })

            const response = await res.json()

            console.log(response)
            if (response.status === 200) {
                dispatch(removeCartItems({ id }))
            }

        }
        catch (e) {
            alert("Error", e)
        }
    }


    const addHandler = (id) => {
        dispatch(modifyCart({ id }))
    }

    return (
        <div className="p-5 bg-white md:col-span-2">
            <HeadingTitle title="Your Hisi Shopping Cart" />

            {
                status === "loading" ? <p className="text-gray-600">Loading your cart...</p> : <fieldset disabled={checkoutStatus}>
                    {
                        cartData?.length > 0 ? (
                            <>
                                {
                                    cartData.map((currData) => {
                                        const { quantity, isActive } = currData;
                                        const { name, price, featured_image, id } = currData.product;

                                        return (
                                            <div key={id} className="border-2 p-4 justify-between  bg-white flex items-center gap-2 shadow-md hover:shadow-lg my-10 rounded-lg">

                                                <div className="product_description flex  gap-14 items-center">

                                                    <div className="isActive" onClick={() => addHandler(id)}>
                                                        {isActive ? (
                                                            <FaCheckSquare size={34} color="#110884" />
                                                        ) : (
                                                            <MdOutlineCheckBoxOutlineBlank size={34} color="#707B8A" />
                                                        )}
                                                    </div>



                                                    <ImageWithFallback
                                                        src={featured_image}
                                                        alt="image"
                                                        width={150}
                                                        height={150}
                                                        className="rounded-lg"
                                                    />
                                                    <div className="flex flex-col gap-5">

                                                        <h2 className="text-2xl font-medium">{name}</h2>
                                                        <ItemsQuantity
                                                            quantity={quantity}
                                                            id={id}
                                                            token={token}
                                                        />
                                                    </div>
                                                </div>


                                                {/* <div className="text-right mr-8">
                                                    <p className="text-blue-700 font-semibold">11% Off</p>
                                                    <p className="text-2xl font-bold text-gray-700">NPR {price}</p>
                                                </div> */}
                                                <div className="delete flex flex-col flex-end items-end gap-2">

                                                    <div>
                                                        <button
                                                            className="delete_item bg-transparent hover:bg-red-100 text-red-500 hover:text-red-700 p-2 rounded-full ml-auto"
                                                            onClick={() => deleteHandler(id)}
                                                        >
                                                            <Trash2 className="w-6 h-6" />
                                                        </button>
                                                    </div>
                                                    <div className="price font-serif font-bold text-lg text-primary_blue">
                                                        NPR. {price}
                                                    </div>
                                                    <div className="tax">(Inclusive of all taxes)</div>
                                                </div>

                                            </div>
                                        )
                                    })
                                }
                            </>
                        ) : (
                            <div className="empty flex flex-col gap-6 text-center mt-10">
                                <div className="message text-gray-600 text-xl">No items on the cart.</div>
                                <div className="view_product text-white"><Link href="/" className="bg-primary_blue p-3 ">View Products</Link></div>
                            </div>
                        )
                    }
                </fieldset>
            }
        </div>


    )
}



const ItemsQuantity = ({ quantity, id, token }) => {
    const dispatch = useDispatch();
    const debounceTimeout = useRef(null); // Using useRef to store the timeout persistently

    const updateCartAPI = (newQuantity) => {
        try {
            const method = "update";
            fetch("/api/cart/async", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ id, count: newQuantity, method })
            });
        } catch (e) {
            alert("Error", e.message);
        }
    };

    const handleQuantityChange = (newQuantity) => {

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }


        debounceTimeout.current = setTimeout(() => {
            updateCartAPI(newQuantity); //  only once, after the user stops even afgter multi click
        }, 3000);
    };

    const increaseHandler = () => {
        if (quantity < 10) {
            const count = +quantity + 1;
            dispatch(modifyQuantity({ id, quantity: count }));
            handleQuantityChange(count);
        }
    };

    const decreaseHandler = () => {
        if (quantity > 1) {
            const count = +quantity - 1;
            dispatch(modifyQuantity({ id, quantity: count }));
            handleQuantityChange(count);
        }
    };

    return (
        <div className="quantity flex items-center gap-3">
            {/* <span className="text-text_gray">Quantity</span> */}
            <div className="flex  items-center">
                <CiCircleMinus size={36} onClick={decreaseHandler} color="#b9b9b9" />
                <span className="h-8 w-8 grid  text-lg place-items-center">
                    {quantity}
                </span>
                <CiCirclePlus size={36} onClick={increaseHandler} color="#b9b9b9" />
            </div>
            {/* <span className="text-orange-500">Out of stock</span> */}
        </div>
    );
};

export default CartHome
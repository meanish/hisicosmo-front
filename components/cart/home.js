"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartData, modifyCart, modifyQuantity, removeCartItems, storeCartDetails } from '@/lib/store/slices/cartSlices';



const CartHome = ({ token }) => {


    const [myCarts, setMyCarts] = useState()
    const dispatch = useDispatch()


    console.log("My Token", token)

    useEffect(() => {
        dispatch(fetchCartData(token));
    }, [dispatch, token]);

    const { cartData, status, error } = useSelector((state) => state.cartData);

    if (status === "loading") {
        return <p>Loading...</p>;
    }

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
                const filterItem = myCarts.filter((currData) => currData.id != id)
                setMyCarts(filterItem)
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
        <div>{
            cartData?.length > 0 && cartData.map((currData) => {
                const { quantity, isActive } = currData
                const { name, price, featured_image, id } = currData.product;


                return (
                    <div className="border-2 p-5 bg-gray-100 shadow-md my-12 hover:bg-gray-200" >
                        <div className="isActive" onClick={() => addHandler(id)}>{
                            <div className={`p-2 ${isActive ? " bg-green-300" : " bg-red-300"}`}>Click to Checkout</div>
                        }</div>
                        <div className="featured_image">
                            <Image src={featured_image} alt="image" width={200} height={200} />
                        </div>
                        <div className="product_name">
                            {name} {price}
                        </div>

                        <ItemsQuantity quantity={quantity} id={id} token={token} />
                        <button className="delete_item" onClick={() => deleteHandler(id)}>
                            <Trash2 />
                        </button>
                    </div>
                )
            })
        }</div>
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
            <span className="text-text_gray">Quantity</span>
            <div className="flex border items-center">
                <button className="h-8 w-8 bg-gray-200" onClick={decreaseHandler}>-</button>
                <span className="h-8 w-8 bg-gray-200 grid place-items-center">
                    {quantity}
                </span>
                <button className="h-8 w-8 bg-gray-200" onClick={increaseHandler}>+</button>
            </div>
            <span className="text-orange-500">Out of stock</span>
        </div>
    );
};

export default CartHome
"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { modifyCart, storeCartDetails } from '@/lib/store/slices/cartSlices';



const CartHome = ({ token }) => {


    const [myCarts, setMyCarts] = useState()
    const dispatch = useDispatch()


    const MyCartData = useSelector((state) => state.cartData.cartData)

    useEffect(() => {
        const getMyCart = async () => {
            try {
                const res = await fetch("/api/cart/mycarts", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                const cartData = await res.json()
                console.log("Carts Data", res, cartData)
                if (res.status === 200)
                    setMyCarts(cartData.data)
                dispatch(storeCartDetails({ data: cartData.data }))
            } catch (e) {
                alert("Error", e)
            }
        }
        getMyCart()
    }, [])



    // const { data: session } = useSession();
    // console.log("Session", session)

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

            const response = res.json()
            if (res.status === 200) {
                const filterItem = myCarts.filter((currData) => currData.id != id)
                setMyCarts(filterItem)
            }

        }
        catch (e) {
            console.log("Whaterror", e)
            alert("Error", e)
        }
    }


    const addHandler = (id) => {
        dispatch(modifyCart({ id }))
    }

    return (
        <div>{
            MyCartData?.length > 0 && MyCartData.map((currData) => {
                const { quantity, isActive } = currData
                const { name, price, featured_image, id } = currData.product;

                console.log(currData.product.isActive)

                return (
                    <div className="border-2 p-5 bg-gray-100 shadow-md my-12 hover:bg-gray-200" >
                        <div className="isActive" onClick={() => addHandler(id)}>{
                            isActive ? <div className="p-2 bg-green-300">.</div> : <div className="p-2 bg-red-300">.</div>
                        }</div>
                        <div className="featured_image">
                            <Image src={featured_image} alt="image" width={200} height={200} />
                        </div>
                        <div className="product_name">
                            {name} {price}
                        </div>

                        <ItemsQuantity Iquantity={quantity} id={id} token={token} />
                        <button className="delete_item" onClick={() => deleteHandler(id)}>
                            <Trash2 />
                        </button>
                    </div>
                )
            })
        }</div>
    )
}



const ItemsQuantity = ({ Iquantity, id, token }) => {

    const [quantity, setQuantity] = useState(Iquantity)


    const increaseHandler = async () => {
        if (quantity < 10) {
            const count = +quantity + 1
            setQuantity(count)

            console.log(id, Iquantity)

            try {
                let method = "update"
                const res = await fetch("/api/cart/async", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({ id, count, method })
                })

            }
            catch (e) {
                alert("Error", e.message)
            }
        }

    }

    const decreaseHandler = async () => {
        if (quantity > 1) {
            const count = +quantity - 1

            setQuantity(count)
            try {
                let method = "update"

                const res = await fetch("/api/cart/async", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({ id, count, method })

                })


            }
            catch (e) {
                alert("Error", e.message)
            }
        }
    }


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
    )


}
export default CartHome
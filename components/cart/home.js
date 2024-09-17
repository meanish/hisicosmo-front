"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Trash2 } from 'lucide-react';



const CartHome = ({ token }) => {


    const [myCarts, setMyCarts] = useState()


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
            } catch (e) {
                alert("Error", e)
            }
        }
        getMyCart()
    }, [token])



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

    return (
        <div>{
            myCarts?.length > 0 && myCarts.map((currData) => {
                const { quantity } = currData
                const { name, price, featured_image, id } = currData.product;

                console.log(currData.product)

                return (
                    <>
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
                    </>
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
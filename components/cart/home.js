"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

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
    return (
        <div>{
            myCarts?.length > 0 && myCarts.map((currData) => {
                const { quantity } = currData
                const { name, price, featured_image } = currData.product;

                console.log(currData.product)

                return (
                    <>
                        <div className="featured_image">
                            <Image src={featured_image} alt="image" width={200} height={200} />
                        </div>
                        <div className="product_name">
                            {name} {price}
                        </div>
                        <div className="quantity">
                            {quantity}
                        </div>
                    </>
                )
            })
        }</div>
    )
}

export default CartHome
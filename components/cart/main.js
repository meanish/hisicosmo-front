"use client"


import React, { useEffect, useState } from 'react'
import CartHome from './home'
import ActiveCart from './activecart'

const MainCart = ({ token }) => {
    const [checkoutStatus, setCheckoutStatus] = useState(false)
    const [shippingData, setShippingData] = useState(null)


    useEffect(() => {

        const getShippingData = async () => {
            try {
                const res = await fetch("/api/shipping/getData", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                const response = await res.json()


                if (response.status === 200) {
                    setShippingData(response.data)
                }
                else {
                    console.log("Eroor in the fetching shipping Data")
                }
            }
            catch (e) {
                toast.error("Failed to fetch", e.message)
            }
        }
        getShippingData()
    }, [])


    // console.log("Shipping Data", shippingData)

    return (
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto py-16 ">
            <CartHome token={token} checkoutStatus={checkoutStatus} />
            <ActiveCart checkoutStatus={checkoutStatus} token={token} setCheckoutStatus={setCheckoutStatus} shippingData={shippingData} />
        </div>

    )
}

export default MainCart
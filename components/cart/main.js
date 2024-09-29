"use client"


import React, { useState } from 'react'
import CartHome from './home'
import ActiveCart from './activecart'

const MainCart = ({ token }) => {
    const [checkoutStatus, setCheckoutStatus] = useState(false)
    return (
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto py-16 ">
            <CartHome token={token} checkoutStatus={checkoutStatus} />
            <ActiveCart checkoutStatus={checkoutStatus} token={token} setCheckoutStatus={setCheckoutStatus} />
        </div>

    )
}

export default MainCart
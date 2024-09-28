import { auth } from '@/auth'
import ActiveCart from '@/components/cart/activecart'
import CartHome from '@/components/cart/home'
import React from 'react'

const AddCart = async () => {
    const session = await auth()

    const token = session?.user?.token

    return (
        <div className=" bg-ad_bg_gray min-h-[70vh]">
            <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto py-16 ">
                <CartHome token={token} />
                <ActiveCart />
            </div>
        </div>
    )
}

export default AddCart
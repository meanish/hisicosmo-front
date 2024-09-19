import { auth } from '@/auth'
import ActiveCart from '@/components/cart/activecart'
import CartHome from '@/components/cart/home'
import React from 'react'

const AddCart = async () => {
    const session = await auth()

    const token = session?.user?.token

    return (
        <div className="flex gap-4 container flex-row mx-auto">
            <CartHome token={token} />
            <ActiveCart />
        </div>
    )
}

export default AddCart
import { auth } from '@/auth'
import CartHome from '@/components/cart/home'
import React from 'react'

const AddCart = async () => {
    const session = await auth()

    const { token } = session.user
    return (
        <CartHome token={token} />
    )
}

export default AddCart
import { auth } from '@/auth'
import MainCart from '@/components/cart/main'
import React from 'react'

const AddCart = async () => {
    const session = await auth()

    const token = session?.user?.token

    return (
        <div className=" bg-ad_bg_gray min-h-[70vh]">
            <MainCart token={token}/>
        </div>
    )
}

export default AddCart
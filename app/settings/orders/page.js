import { auth } from '@/auth'
import Orders from '@/components/settings/order/orders'
import React from 'react'

const page = async () => {

    const session = await auth()
    return (
        <Orders token={session?.user?.token} />
    )
}

export default page
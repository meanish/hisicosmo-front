import { getSingleProduct } from '@/app/api/all_products/route'
import { auth } from '@/auth'
import SingleProductPage from '@/components/product/singleProductPage'
import React from 'react'

const page = async ({ params }) => {

    const { id } = params
    const data = await getSingleProduct(id)

    const session = await auth()
    const token = session?.user?.token


    return (
        <SingleProductPage data={data?.data} token={token} />
    )
}

export default page
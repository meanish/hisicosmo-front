import { getSingleProduct } from '@/app/api/all_products/route'
import SingleProductPage from '@/components/product/singleProductPage'
import React from 'react'

const page = async ({ params }) => {

    const { id } = params
    const data = await getSingleProduct(id)

    return (
        <SingleProductPage data={data?.data} />
    )
}

export default page
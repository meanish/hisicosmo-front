import Filtered_Product_Home from '@/components/filtered_product/filtered_product_home'
import { Blue_Service_Section } from '@/components/login_and_register/commonComponents'
import React from 'react'

async function page() {

    return (
        <>
            <Filtered_Product_Home />
            <Blue_Service_Section />
        </>
    )
}

export default page
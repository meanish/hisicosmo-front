import Filtered_Product_Home from '@/components/filtered_product/filtered_product_home'
import { Blue_Service_Section } from '@/components/login_and_register/commonComponents'
import React from 'react'
import { getNavCategory } from '../api/nav_category/route';
import { getBrandBasedProducts } from '../api/brands/route';

async function page() {
    const brandData = await getBrandBasedProducts();
    const categoryData = await getNavCategory();

    return (
        <>
            <Filtered_Product_Home brandData={brandData} categoryData={categoryData} />
            <Blue_Service_Section />
        </>
    )
}

export default page
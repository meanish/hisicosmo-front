import React from 'react'
import BannerImage from '@/components/ui/bannerImage'
import Services, { Blue_Service_Section, Text_And_CTA } from '@/components/login_and_register/commonComponents'
import Register_Container from '@/components/login_and_register/register_container'

const page = () => {
    return (
        <>
            <BannerImage />
            <div className='container'>
                <Register_Container />
                <Services />
            </div>
            <Text_And_CTA />
            <Blue_Service_Section />


        </>
    )
}

export default page
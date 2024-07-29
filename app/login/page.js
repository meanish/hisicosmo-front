import React from 'react'
import BannerImage from '@/components/ui/bannerImage'
import Login_Container from '@/components/login/login_container'
import Services, { Blue_Service_Section, Text_And_CTA } from '@/components/login/commonComponents'

const page = () => {
    return (
        <>
            <BannerImage />
            <div className='container'>
                <Login_Container />
                <Services />
            </div>
            <Text_And_CTA />
            <Blue_Service_Section />


        </>
    )
}

export default page
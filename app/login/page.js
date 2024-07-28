import React from 'react'
import BannerImage from '@/components/ui/bannerImage'
import Login_Container from '@/components/login/login_container'
import Services from '@/components/login/services'

const page = () => {
    return (
        <>
            <BannerImage />
            <div className='container'>
                <Login_Container />
                <Services/>
            </div>


        </>
    )
}

export default page
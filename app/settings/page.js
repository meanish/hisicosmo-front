import { auth } from '@/auth'
import SettingsHome from '@/components/profile/settingsHome'
import React from 'react'

const page = async () => {

    const session = await auth()

    return (
        <>
           
            <SettingsHome token={session?.user?.token} />
        </>
    )
}

export default page
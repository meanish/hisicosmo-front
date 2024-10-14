import { auth } from '@/auth'
import BasicProfile from '@/components/settings/basicProfile'
import React from 'react'

const page = async () => {
    const session = await auth()

    const token = session?.user?.token
    return (
        <BasicProfile token={token} />
    )
}

export default page
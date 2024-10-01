"use client"
import { auth } from '@/auth'
import SettingsHome from '@/components/profile/settingsHome'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const page = async () => {

    const router = useRouter()
    useEffect(() => {
        router.push("/settings/profile")
    }, [])



}

export default page
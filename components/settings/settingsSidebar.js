"use client"


import React from 'react'
import { LiaClipboardListSolid } from "react-icons/lia";
import { CiHeart, CiUser } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const SidebarSettings = () => {
    const tabs = [
        {
            title: "Profile",
            href: "/settings/profile",
            icon: <CiUser size={24} />,
        },
        {
            title: "Orders",
            href: "/settings/orders",
            icon: <LiaClipboardListSolid size={24} />,
        },
        {
            title: "Wishlist",
            href: "/settings/wishlist",
            icon: <CiHeart size={24} />,
        },
        {
            title: "Contact Us",
            href: "/settings/contact_us",
            icon: <FiPhoneCall size={24} />,
        },
    ];


    const pathname = usePathname()
    console.log(pathname)

    return (

        <>
            <div className="sidebar h-fit py-4  bg-white  rounded-sm">
                <h2 className="font-medium  p-4 pl-6 text-sm">Hi, UserName</h2>
                <ul className="tabs mt-4 mb-12 w-full">
                    {tabs?.map((tab, index) => {
                        const { title, icon, href } = tab;
                        return (
                            <Link
                                href={href}
                                key={index}
                                className={`py-3 px-5 flex gap-2 items-center hover:cursor-pointer w-full hover:bg-primary_blue hover:bg-opacity-20 border-b ${pathname === href ? 'bg-primary_blue text-white hover:bg-opacity-100' : null}`}
                            >
                                {icon}
                                <button>{title}</button>
                            </Link>
                        );
                    })}
                </ul>
                {/* <div className="logout">
                    <button
                        onClick={() => signOut()}
                        className="py-3 px-5 flex gap-2 items-center text-red-500 w-full border-y-2 border-transparent hover:border-gray-200 active:text-primary_blue"
                    >
                        <IoIosLogOut size={24} />
                        Logout
                    </button>
                </div> */}
            </div>
        </>
    )
}

export default SidebarSettings
"use client"


import React, { Fragment, useRef } from 'react'
import { LiaClipboardListSolid } from "react-icons/lia";
import { CiHeart, CiUser } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ImageWithFallback } from '../ui/imageWithFallBack';
import { useSelector } from 'react-redux';
import { useClickOutside } from '@/utils/useClickOutside';
import { signOut } from '@/auth';


export const tabs = [
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
const SidebarSettings = ({ setOpenDropDown, className }) => {
    const pathname = usePathname()
    const userData = useSelector((state) => state.manageUserData.userData);
    const { email, username, featured_image } = userData;
    // const dropDownRef = useRef();
    // useClickOutside(dropDownRef, () => setOpenDropDown(false));

    function handleSignOut() {
        setOpenDropDown(false)
        signOut()
    }
    return (

        <div >
            <div className={cn(`sidebar h-fit py-4  bg-white  rounded-sm`, className)}>
                {pathname === "/settings/profile" ?
                    <h2 className="font-medium  p-5 pl-6 text-sm">Hi, {username}</h2>
                    :
                    <div className="user-info w-full min-w-fit bg-primary_blue/20 px-5 py-2  flex gap-6 items-center">
                        <ImageWithFallback
                            src={featured_image}
                            width={44}
                            height={44}
                            alt="profile-image"
                            className="size-11 object-cover rounded-full border "
                        />
                        <div className="names-email select-none">
                            <h1 className="font-medium text-base tracking-wide leading-relaxed">
                                {username}
                            </h1>
                            <p className="text-sm font-medium text-black tracking-wide">
                                {email}
                            </p>
                        </div>
                    </div>
                }
                <ul className="tabs  w-full">
                    {tabs?.map((tab, index) => {
                        const { title, icon, href } = tab;
                        return (
                            <Link
                                onClick={() => setOpenDropDown(false)}
                                href={href}
                                key={index}
                                className={`py-3 px-5 flex gap-2 items-center hover:cursor-pointer w-full hover:bg-primary_blue/20  border-b ${pathname === href ? 'bg-primary_blue text-white hover:bg-opacity-100' : null}`}
                            >
                                {icon}
                                <button>{title}</button>
                            </Link>
                        );
                    })}
                </ul>
                {pathname === "/settings/profile" ? null :
                    <div className="logout">
                        <button
                            onClick={handleSignOut}
                            className="py-3 px-5 flex gap-2 items-center text-red-500 w-full border-y-2 border-transparent hover:bg-primary_blue/20 active:text-primary_blue"
                        >
                            <IoIosLogOut size={24} />
                            Logout
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default SidebarSettings
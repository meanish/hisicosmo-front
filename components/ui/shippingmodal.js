// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./button"
import { useState } from "react"
import toast from "react-hot-toast"

export function ShippingModal({ shippingData, token }) {

    const [formData, setFormData] = useState({
        fullname: shippingData?.fullname || "",
        address: shippingData?.address || "",
        province: shippingData?.province || "",
        district: shippingData?.district || "",
        phone_number: shippingData?.phone_number || ""
    })

    const [shipError, setShipError] = useState(null)
    const [isOpen, setIsOpen] = useState(false)


    const changeHandler = (e) => {
        const { value, name } = e.target;
        setFormData((currval) => ({
            ...currval,
            [name]: value
        }))
    }

    const saveShipping = async () => {
        try {
            const res = await fetch("/api/shipping/store", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                method: "POST",
                body: JSON.stringify({ ...formData }),
            })

            const response = await res.json();
            if (response.status === 200) {
                toast.success("Thanks for your information")
                setShipError(null)
                setIsOpen(false)
            } else if (response.status === 400) {
                setShipError(response?.errors)
            }
        } catch (e) {
            toast.error("Error in the shipping modal", e.message)
        }
    }


    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" className="underline">Edit your shipping address</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Set your shipping address</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <form className="grid gap-4 py-10">
                        <div className="flex flex-col">
                            <label htmlFor="fullname" className="mb-2 font-medium">Full Name</label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                className="border border-gray-300 rounded-md p-2"
                                placeholder="Enter your full name"
                                value={formData.fullname}
                                onChange={changeHandler}
                                required
                            />
                            {shipError?.fullname && (
                                <p className="text-red-500 text-sm">{shipError.fullname[0]}</p>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="phone_number" className="mb-2 font-medium">Phone Number</label>
                            <input
                                type="tel"
                                id="phone_number"
                                name="phone_number"
                                className="border border-gray-300 rounded-md p-2"
                                placeholder="Enter your phone number"
                                value={formData.phone_number}
                                onChange={changeHandler}
                                required
                            />
                            {shipError?.phone_number && (
                                <p className="text-red-500 text-sm">{shipError.phone_number[0]}</p>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="district" className="mb-2 font-medium">District</label>
                            <input
                                type="text"
                                id="district"
                                name="district"
                                className="border border-gray-300 rounded-md p-2"
                                placeholder="Enter your district"
                                value={formData.district}
                                onChange={changeHandler}
                                required
                            />
                            {shipError?.district && (
                                <p className="text-red-500 text-sm">{shipError.district[0]}</p>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="province" className="mb-2 font-medium">Province</label>
                            <input
                                type="text"
                                id="province"
                                name="province"
                                className="border border-gray-300 rounded-md p-2"
                                placeholder="Enter your province"
                                onChange={changeHandler}
                                value={formData.province}
                                required
                            />
                            {shipError?.province && (
                                <p className="text-red-500 text-sm">{shipError.province[0]}</p>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="address" className="mb-2 font-medium">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="border border-gray-300 rounded-md p-2"
                                placeholder="Enter your address"
                                onChange={changeHandler}
                                value={formData.address}
                                required
                            />
                            {shipError?.address && (
                                <p className="text-red-500 text-sm">{shipError.address[0]}</p>
                            )}
                        </div>
                    </form>
                </div>

                <SheetFooter>
                    <Button type="submit" color="#eeee" onClick={saveShipping}>Save changes</Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

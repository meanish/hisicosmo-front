import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import Link from "next/link"

import { removeAfterOrder } from "@/lib/store/slices/cartSlices";
import CryptoJS from 'crypto-js';
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";



export function ConfirmOrderPop({ showConfirmOrder, setShowConfirmOrder, setShowModal, showModal, token, esewaPaymentData }) {

    const orderPlacement = useSelector((state) => state.cartData.orderplacement)
    const dispatch = useDispatch()

    const orderPlacementHandler = async () => {

        // try {
        //     const res = await fetch("/api/order/new", {
        //         method: "POST",
        //         headers: {
        //             Authorization: `Bearer ${token}`,
        //         },
        //         body: JSON.stringify({ ...orderPlacement })
        //     })

        //     const response = await res.json()


        //     console.log("response", response)
        //     if (response?.status === 200 && paymentType === "1") {
        //         setShowModal(true);

        //         // remove from cart
        //         try {
        //             let method = "remove"
        //             await Promise.all(orderPlacement?.products?.map(async (prod) => {

        //                 dispatch(removeAfterOrder({ id: prod.product_id }))

        //                 await fetch("/api/cart/async", {
        //                     method: "POST",
        //                     headers: {
        //                         Authorization: `Bearer ${token}`,
        //                     },
        //                     body: JSON.stringify({ id: prod.product_id, method }),
        //                 });
        //             }));
        //         }
        //         catch (e) {
        //             alert("Error in removing from the cart", e)
        //         }

        //     }


        //     else if (response?.status === 200 && paymentType === "2") {
        //         let orderId = response?.data?.id
        //         if (totalAmount > 0) {
        //             console.log("1", totalAmount)
        //             const cleanAmount = Number(parseFloat(totalAmount.toString().replace(/,/g, '')).toFixed(0));

        //             console.log(cleanAmount, esewaPaymentData.productCode)

        //             const currentTime = new Date();
        //             const formattedTime =
        //                 currentTime.toISOString().slice(2, 10).replace(/-/g, '') +
        //                 '-' +
        //                 currentTime.getHours() +
        //                 currentTime.getMinutes() +
        //                 currentTime.getSeconds();
        //             document.getElementById('transaction_uuid').value = formattedTime;

        //             const message = `total_amount=${cleanAmount},transaction_uuid=${formattedTime},product_code=${esewaPaymentData?.productCode}`;

        //             const hash = CryptoJS.HmacSHA256(message, secret);
        //             const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
        //             document.getElementById('signature').value = hashInBase64;

        //         }
        //         document.getElementById('success_url').value = `${process.env.NEXT_PUBLIC_HiSi_Server}/transaction/verify/${orderId}`;
        //         document.getElementById("esewaForm").submit();

        //     }


        // }
        // catch (e) {
        //     toast.error("Failed", e.message)

        // }
        // finally {
        //     setShowConfirm(false)
        // }
    }

    const [dimensions, setDimensions] = useState({
        width: window?.innerWidth,
        height: window?.innerHeight,
    });

    useEffect(() => {

        const handleResize = () => {
            setDimensions({
                width: window?.innerWidth,
                height: window?.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, [showModal]);

    console.log(showConfirmOrder)


    return (
        <>

            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle> Are you sure you want to make a order placement?.</DialogTitle>
                        {/* <DialogDescription>
                            You can view the order table to get updated of your order status.
                        </DialogDescription> */}
                    </DialogHeader>

                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <div className="grid flex-1 gap-2">
                                <Button type="button" size="sm" className="px-3 " onClick={orderPlacementHandler}>
                                    <span >Yes</span>
                                </Button>
                                <Button type="button" size="sm" className="px-3" onClick={setShowConfirmOrder(false)}>
                                    <span> Cancel</span>
                                </Button>
                            </div>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>

    )
}






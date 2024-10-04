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

import { Button } from "./button"
import Link from "next/link"
import { useEffect, useState } from "react";
import Confetti from 'react-confetti'

export function AfterOrderPop({ showModal, setShowModal }) {
    const [isExploding, setIsExploding] = useState(false);
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {

        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);
        if (showModal) {
            setIsExploding(true)
        }
        else {
            setIsExploding(false)
        }
        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, [showModal]);

    return (
        <>
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle> Dear Sir/Mam, Thanks for placing you order.</DialogTitle>
                        <DialogDescription>
                            You can view the order table to get updated of your order status.
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="sm:justify-start mt-4">
                        <DialogClose asChild>
                            <div className="grid flex-1 gap-2">
                                <Link href="/settings/orders">

                                    <Button type="button" size="sm" className="px-3">
                                        <span > View Order Status</span>
                                    </Button>
                                </Link>
                            </div>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle> Dear Sir/Mam, Thanks for placing you order.</DialogTitle>
                        <DialogDescription>
                            You can view the order table to get updated of your order status.
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="sm:justify-start">
                        <DialogClose asChild>
                            <div className="grid flex-1 gap-2">
                                <Link href="/settings/orders">

                                    <Button type="button" size="sm" className="px-3">
                                        <span > View Order Status</span>
                                    </Button>
                                </Link>
                            </div>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            {isExploding && <Confetti
                width={dimensions.width}
                height={dimensions.height}
            />}
        </>

    )
}






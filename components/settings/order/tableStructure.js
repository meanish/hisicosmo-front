import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Book, Edit, Edit2 } from "lucide-react"
import { useState } from "react";
import SingleOrderModal from "./singleorderModal";



export const getStatusWithColor = (status) => {
    switch (status) {
        case 'pending':
            return 'text-yellow-500';
        case 'completed':
            return 'text-green-500';
        case 'canceled':
            return 'text-red-500';
        case 'failed':
            return 'text-red-500';
        case 'processing':
            return 'text-blue-500';
        default:
            return 'text-gray-500';
    }
};

export function TableStructure({ orders }) {
    console.log(orders)
    const [activeOrder, setActiveOrder] = useState(null)

    

    const [showModal, setShowModal] = useState(false);


    const openModalHandler = (orderId) => {
        setShowModal(true)
        setActiveOrder(orderId)
    }


    return (
        <div className="my-10">

            {
                orders.length > 0 ? <Table>
                    <TableCaption>A list of the related order.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Order Id</TableHead>
                            <TableHead>Order Method</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-center">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody >
                        {orders?.map((order, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{order.id}</TableCell>
                                <TableCell>{order?.payment_type}</TableCell>
                                <TableCell>{order.total_amount}</TableCell>
                                <TableCell className={`font-bold uppercase ${getStatusWithColor(order.status)}`}>{order.status}</TableCell>
                                <TableCell className="flex justify-center"><span title="order details" onClick={() => openModalHandler(order.id)}><Book color="green" /></span></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    {/* modal single order */}
                    <SingleOrderModal showModal={showModal} setShowModal={setShowModal} activeOrder={activeOrder} />

                </Table> : <div className="min-h-[10vh]  text-center text-gray-400 py-6">No orders data</div>
            }
        </div>

    )
}

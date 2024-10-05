import React, { useEffect, useState } from 'react';
import Image from 'next/image'; // Assuming Next.js
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { getStatusWithColor } from './tableStructure';
import { ImageWithFallback } from '@/components/ui/imageWithFallBack';

const SingleOrderModal = ({ showModal, setShowModal, activeOrder }) => {
    const [allOrderData, setAllOrderData] = useState(null);

    const { data: session } = useSession();
    const token = session?.user.token


    console.log(allOrderData)


    useEffect(() => {
        const getOrderData = async () => {
            if (showModal) {
                try {
                    const res = await fetch(`/api/order/getsingle?id=${activeOrder}`, {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });

                    const response = await res.json();
                    if (response.status === 200) {
                        setAllOrderData(response?.data?.[0]);
                    } else {
                        toast.error("Something went wrong fetching the order details.");
                    }
                } catch (error) {
                    toast.error("Something went wrong.");
                }
            }
        };

        getOrderData();
    }, [showModal, activeOrder, token]);

    if (!allOrderData) return null;




    // // Calculate the total price for all order products
    // const totalAmount = allOrderData.orderproducts.reduce(
    //     (total, item) => total + item.quantity * item.price,
    //     0
    // );

    return (
        <Dialog open={showModal} onOpenChange={setShowModal} className="w-[500px]">
            <DialogContent className="max-w-[800px] bg-gray-100">
                <DialogHeader>
                    <DialogTitle className="text-primary_blue">Order Details</DialogTitle>
                    <DialogDescription>
                        You have access to cancel the order before processed.
                    </DialogDescription>
                </DialogHeader>
                <div className="bill-container">
                    {/* User Info */}
                    <div className="user-info flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-white shadow-md rounded-lg">
                        <div className="flex flex-col space-y-2">
                            <p><strong>Customer Name:</strong> {allOrderData.user_data.username}</p>
                            <p><strong>Email:</strong> {allOrderData.user_data.email}</p>
                            <p><strong>Order ID:</strong> {allOrderData.id}</p>
                            <p><strong>Payment Type:</strong> {allOrderData.payment_type}</p>
                        </div>
                        <div className="flex flex-col  items-start space-y-2 md:ml-4">
                            <p><strong>Status:</strong>
                                <span className={`uppercase px-1 font-bold ${getStatusWithColor(allOrderData.status)}`}>
                                    {allOrderData.status}
                                </span>
                            </p>
                        </div>
                    </div>


                    {/* Order Product List */}
                    <div className="order-products mt-8">
                        <h3 className="text-lg font-semibold text-primary_blue">Products Ordered:</h3>
                        <table className="w-full text-sm mt-2 border bg-white">
                            <thead>
                                <tr className="border-b bg-gray-300">
                                    <th className="p-2 text-left ">Product</th>
                                    <th className="p-2 text-left">Image</th>
                                    <th className="p-2 text-left">Quantity</th>
                                    <th className="p-2 text-left">Price</th>
                                    <th className="p-2 text-left">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allOrderData.orderproducts.map((product) => (
                                    <tr key={product.product.id} className="border-b">
                                        <td className="p-2">{product.product.name}</td>
                                        <td className="p-2">
                                            <ImageWithFallback
                                                src={product.product.featured_image}
                                                alt={product.product.name}
                                                width={50}
                                                height={50}
                                                className="rounded"
                                            />
                                        </td>
                                        <td className="p-2">{product.quantity}</td>
                                        <td className="p-2">NPR. {product.price}</td>
                                        <td className="p-2">NPR. {(product.quantity * product.price).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="total-amount mt-4 text-end">
                        <h3 className="text-lg font-semibold text-green-800">Total Amount: NPR. {allOrderData?.total_amount}</h3>
                    </div>

                    <div className="order-dates mt-5 flex justify-end">
                        <p className=" font-bold"><strong className=" text-primary_gold">Order Placed On:</strong> {new Date(allOrderData.createdAt).toLocaleString()}</p>
                        {/* <p className="text-primary_blue"><strong className="text-black">Last Updated:</strong> {new Date(allOrderData.updatedAt).toLocaleString()}</p> */}
                    </div>
                </div> 
            </DialogContent>
        </Dialog>
    )

};

export default SingleOrderModal;

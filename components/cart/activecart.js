"use client"

import { removeActiveItem } from '@/lib/store/slices/cartSlices'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EsewaPayment from '../esewagateway/page'
import { GrClose } from 'react-icons/gr'
import Image from 'next/image'
import { FaCheckCircle } from 'react-icons/fa'

const ActiveCart = ({ setCheckoutStatus, checkoutStatus, token }) => {
    const activeCart = useSelector((state) => state.cartData.activeCart)
    const totalAmount = useSelector((state) => state.cartData?.totalAmount)
    const [paymentType, setPaymentType] = useState()
    const dispatch = useDispatch()





    const removeHandler = (id) => {
        dispatch(removeActiveItem({ id }))
    }


    const checkoutHandler = () => {
        setCheckoutStatus(!checkoutStatus)
        dispatch(storeOrderplacement(activeCart, paymentType))
    }


    const orderHandler = () => {
        return
    }


    const payementmethod = [
        {
            imgsrc: "",
            id: 1,
            name: "cod",

        },
        {
            imgsrc: "",
            id: 2,
            name: "esewa"

        }
    ]

    const paymentHandler = (e) => {
        setPaymentType(e.target.id)
    }

    return (
        <div className="md:col-span-1 bg-white p-4 ">
            <div className="flex justify-between">

                <h1 className="text-2xl font-bold mb-8">Order Summary</h1>
                {/* add shiiping modal here */}
                <div className="edit_shipping underline hover:text-primary_blue cursor-pointer">
                    {/* open modal */}
                    Edit your shipping address
                </div>
            </div>
            {
                activeCart?.length > 0 ? (
                    <>
                        {
                            checkoutStatus ? <>
                                <div className="top_amount border-t-2 border-b-2 flex flex-col gap-5">
                                    <div className="pricing flex justify-between">
                                        <div className="title">Total </div>
                                        <div className="price">NPR. {totalAmount}</div>
                                    </div>
                                    <div className="note bg-gray-50 p-4 border-2">Delivery charge may vary depending on the shipping address of your order</div>
                                    <div className="tax_notice">(Inclusive of all Taxes)</div>
                                </div>
                                <div className="grand_total py-2 flex justify-between" >
                                    <div className="title">{`Grand Total (${activeCart.length} items)`} </div>
                                    <div className="grand_price text-primary_blue">NPR. {totalAmount}</div>
                                </div>
                                <div className="checkout py-4">
                                    <button className="bg-primary_blue text-white py-3 w-full" onClick={checkoutHandler}>Checkout</button>
                                </div>
                            </> : <>
                                <div className="cancel_checkout" title="Cancel Checkout" onClick={checkoutHandler}>
                                    <GrClose />
                                </div>
                                {activeCart?.map((currCart) => {
                                    const { product_id, totalprice, quantity } = currCart;
                                    const { featured_image, name } = currCart.product;

                                    return (
                                        <>
                                            <div key={product_id} className="cart-item border-t-2 border-b-2 py-4 flex gap-5">
                                                <div className="product-image">
                                                    <Image
                                                        src={featured_image}
                                                        alt="image"
                                                        width={80}
                                                        height={150}
                                                        className="rounded-lg"
                                                    />
                                                </div>
                                                <div className="product-details flex-1">
                                                    <h2 className="text-lg font-semibold">{name}</h2>
                                                    <div className="quantity">Qty: {quantity}</div>
                                                </div>
                                                <div className="product-price text-right">
                                                    <span className="price text-primary_blue">NPR. {totalprice}</span>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })}

                                <div className="summary py-4">
                                    <div className="flex justify-between">
                                        <span className="text-sm">Total</span>
                                        <span>NPR. {totalAmount}</span>
                                    </div>
                                    <div className="flex justify-between text-red-500">
                                        <span className="text-sm">Discount</span>
                                        <span>- NPR 22</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm">DeliveryCharge</span>
                                        <span>NPR 0</span>
                                    </div>
                                    <div className="flex justify-between font-semibold border-t pt-2">
                                        <span>{`Grand Total (${activeCart.length} items)`}</span>
                                        <span className="text-primary_blue">NPR. {totalAmount}</span>
                                    </div>
                                </div>

                                <div className="payment-methods py-4">
                                    <h4 className="text-sm font-semibold mb-2">PAYMENT METHODS</h4>
                                    {
                                        payementmethod?.map((item, index) => {
                                            return (
                                                <div className="flex gap-4">
                                                    {
                                                        item.id === paymentType ? <label
                                                            className="relative cursor-pointer w-full h-[120px] select-none  flex bg-white rounded-sm shadow-md"
                                                            htmlFor={item.id}
                                                            onClick={paymentHandler}
                                                        >
                                                            <img
                                                                src={item.src}
                                                                unoptimized={true}
                                                                className="outline-4 outline overflow-hidden  rounded-sm  outline-primaryBtnBg"
                                                                fill
                                                                sizes="100vw"
                                                                style={{ objectFit: "contain" }}
                                                                alt="cod"
                                                            />

                                                            <FaCheckCircle
                                                                className="absolute top-2 right-2 bg-white rounded-full overflow-hidden"
                                                                size={24}
                                                                color={"green"}
                                                            />
                                                        </label> : <label
                                                            className="relative w-full h-[120px] cursor-pointer select-none  flex bg-white rounded-sm shadow-md"
                                                            key={index}
                                                            htmlFor={item.id}
                                                            onClick={paymentHandler}
                                                        >
                                                            <img
                                                                src={item.src}
                                                                unoptimized={true}
                                                                fill
                                                                sizes="100vw"
                                                                style={{ objectFit: "contain" }}
                                                                className="rounded-sm overflow-hidden"
                                                                id={item.id}
                                                                alt="esewa"
                                                            />
                                                        </label>
                                                    }

                                                    {/* <img src="/path_to_khalti_logo" alt="Khalti" className="w-1/3" />
                                                    <img src="/path_to_cod_logo" alt="Cash on Delivery" className="w-1/3" /> */}
                                                </div>
                                            )
                                        })
                                    }

                                </div>

                                <div className="checkout py-4">
                                    <button className="bg-primary_blue text-white py-3 w-full rounded-lg" onClick={orderHandler}>
                                        Place Order
                                    </button>
                                </div>
                            </>
                        }

                    </>
                ) : <div className="my-5 py-4"><span className="border-t-2 border-b-2 py-4 text-gray-600  w-full">No product to checkout.</span></div>
            }


            {/* <div className="active_carts">

                {
                    activeCart ? <>
                        {
                            activeCart.map((currCart) => {
                                const { quantity, product_id, totalprice } = currCart
                                return (
                                    <>

                                        {currCart.product_id} {currCart.product.name}
                                        <div className="quantity">
                                            {quantity}
                                        </div>
                                        <div className="amount">Amount:{totalprice}</div>
                                        <div className="remove_active">
                                            <button onClick={() => removeHandler(currCart.product_id)}>Delete</button>
                                        </div>

                                    </>
                                )
                            })
                        }
                    </> : <span>Nothing to show</span>
                }
            </div> */}
        </div >
    )
}

export default ActiveCart




/* 

  <>
            <div className="total_billing">
                <div className="bill">RS: {totalAmount}</div>
            </div>
            <span>Use this for test purpose</span>
            <div className="flex flex-col">
                <>eSewa ID: 9806800001</>
                <>Password: Nepal@123</>
                <>MPIN: 1122</>
                <>Token:123456</>
            </div>

            <div className="payment">
                <div className="pick_payment">Choose a payment method</div>
                <EsewaPayment />
                {/* <button className="border bg-gray-100 p-3 hover:bg-gray-200">Pay with Esewa</button> 
          

*/
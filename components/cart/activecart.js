"use client"

import { removeActiveItem } from '@/lib/store/slices/cartSlices'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import EsewaPayment from '../esewagateway/page'

const ActiveCart = () => {
    const activeCart = useSelector((state) => state.cartData.activeCart)
    const totalAmount = useSelector((state) => state.cartData?.totalAmount)


    const dispatch = useDispatch()


    const removeHandler = (id) => {
        dispatch(removeActiveItem({ id }))
    }



    return (
        <div className="md:col-span-1 bg-white p-4 min-h-[50vh]">
            <h1 className="text-3xl font-bold mb-8">Order Summary</h1>
            {/* add shiiping modal here */}
            {
                activeCart?.length > 0 ? (
                    <>

                        <div className="top_amount border-t-2 border-b-2 py-4 flex flex-col gap-5">
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
                            <button className="bg-primary_blue text-white py-3 w-full">Checkout</button>
                        </div>
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
        </div>
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
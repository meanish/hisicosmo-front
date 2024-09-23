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
        <>
            <h1>Cart to process</h1>
            {/* add shiiping modal here */}
            <div className="active_carts">

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
            </div>
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
                {/* <button className="border bg-gray-100 p-3 hover:bg-gray-200">Pay with Esewa</button> */}

            </div>
            {/* chekout layout here */}
        </>
    )
}

export default ActiveCart
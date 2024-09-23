"use client"

import { removeActiveItem } from '@/lib/store/slices/cartSlices'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ActiveCart = () => {
    const activeCart = useSelector((state) => state.cartData.activeCart)



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
            <div className="total_billing"></div>
            {/* chekout layout here */}
        </>
    )
}

export default ActiveCart
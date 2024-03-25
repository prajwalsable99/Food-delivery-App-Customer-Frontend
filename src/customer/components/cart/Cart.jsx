import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getCartAction } from '../../../redux/cart/cartAction';

const Cart = ({restaurantId}) => {

    const dispatch=useDispatch();
    const token=localStorage.getItem("token");

    const {mycart}=useSelector(store=>store.cart)
    // const {createdorder}=useSelector(store=>store.order)

    useEffect(()=>{

        if(token){
            dispatch(getCartAction({token}))
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className='bg-white py-8 px-4 rounded-md'>

            <div className='text-black mb-2 flex items-center space-x-3'>
                
                <div>
                    <p className='text-xl font-semibold' >Your Cart</p>
                    {/* <p>{restaurantId}</p> */}
                </div>
            </div>
            <div className='h-[50vh] overflow-y-auto'>
                {
                    mycart?.items.length>0 && mycart?.items.map(
                        (item) => (<CartItem item ={item} key={item?.id} />)
                    )

                }

            </div>
            <div className='text-black border-t '>
                <p className='text-xl'>Bill Details</p>
                <p className='text-green-600'>To pay ₹ {mycart?.total}</p>
            </div>


        </div>
    )
}

export default Cart

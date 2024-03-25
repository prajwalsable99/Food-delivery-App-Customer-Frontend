import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useToast } from '@chakra-ui/react'
import { CiCircleRemove } from "react-icons/ci";
import { IoIosAddCircleOutline } from 'react-icons/io'
import { addToCartAction, getCartAction, removeFromCartAction } from '../../../redux/cart/cartAction';
const CartItem = ({item}) => {

    const toast = useToast();
    const dispatch=useDispatch();
    const token=localStorage.getItem("token");
    const {addeditem,removeditem}=useSelector(store=>store.cart)
    useEffect(()=>{

        if(token){
            dispatch(getCartAction({token}))
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[addeditem,removeditem])


    const handldremoveItemfromcart=async(cartItemId)=>{

        const remflag=await dispatch(removeFromCartAction({token,cartItemId}))

        if(remflag){
            toast({
                title: "Item removed from cart",
                status: "success",
                duration: 2000,
                isClosable: true,
              });
    
        }

    }

    const handleAddtoCart= async(foodId)=>{

        // console.log(foodId);

        const addflag=await dispatch(addToCartAction({token,foodId}))

        if(addflag){
            toast({
                title: "Item added tocart",
                status: "success",
                duration: 2000,
                isClosable: true,
              });
    
        }


    }
    return (
        
            <div className='flex items-center space-x-2 p-4 bg-white text-black  w-full border my-1'>

                <p className='flex flex-col w-1/3'>{item?.food?.name} </p>
                <div className='flex items-center justify-between px-2 w-full' >
                    <div className='flex border m-1 space-x-4 items-center p-2'>
                        <CiCircleRemove color='red' className='cursor-pointer text-3xl'
                        
                        onClick={()=>{
                            handldremoveItemfromcart(item?.id)
                        }}
                        
                        />
                        <p className='text-xl ' >{item?.quantity}</p>
                        <IoIosAddCircleOutline color='green' className='cursor-pointer text-3xl'
                        
                        onClick={()=>{
                            handleAddtoCart(item?.food?.id)
                        }}
                        />

                    </div>
                    <div>
                        <p>₹ {item?.totalPrice}</p>
                    </div>
                </div>
            </div>
        
    )
}

export default CartItem

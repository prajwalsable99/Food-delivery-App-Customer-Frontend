import { Button, useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { FaCartShopping, FaStar } from "react-icons/fa6";
import { addToCartAction } from '../../../redux/cart/cartAction';
const FoodCard = ({foodData}) => {

    const toast = useToast();
    const dispatch=useDispatch();
    const token=localStorage.getItem("token");

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
        <div>

            <div className='flex m-4  p-2 bg-gray-900'>
                <div className='p-2' >
                    <img src={ foodData.images.length>0 ?  foodData.images[0]:
                     "https://cdn.pixabay.com/photo/2017/06/23/01/16/coffee-drink-2433133_640.jpg"}
                        className='w-48 h-48 rounded-md '
                        alt="" />
                </div>
                <div className='flex justify-between w-full items-center'>
                    <div className='pl-4' >
                        <p className={foodData?.available?"text-green-500 text-xl":"text-red-500 text-white"}>
                            {
                               foodData.available? 
                               "available":"not available"
                            }
                            
                            </p>

                        <p className='text-3xl font-bold'>{foodData?.name}</p>
                        <p className='text-xl '>₹ {foodData?.price} </p>
                        <div className='flex'>
                            {
                                [1, 2, 3, 4, 5].map(
                                    (i) => (
                                        (<FaStar color='gold' key={i} />)
                                    ))}
                        </div>

                        <p className='text-sm'>{foodData?.cuisineType}</p>
                        <p className='text-xs font-thin'>{foodData?.description}.</p>
                    </div>

                    <div className='pr-10 '>
                        <Button 
                         isDisabled={!foodData?.available}

                        onClick={ ()=>{handleAddtoCart(foodData?.id)}}
                        leftIcon={< FaCartShopping />} colorScheme={"orange"} variant='solid'>
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard

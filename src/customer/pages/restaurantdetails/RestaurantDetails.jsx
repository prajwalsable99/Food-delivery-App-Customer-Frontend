import React, { useEffect } from 'react'
import RestaurantHeader from '../../components/restaurant/RestaurantHeader'
import RestaurantMenu from '../../components/restaurant/RestaurantMenu'
import {  useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getOneRestaurantsAction } from '../../../redux/restaurant/restaurantAction';
import { getAllCategoriesAction } from '../../../redux/food/foodAction';
import {  Flex } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';




const RestaurantDetails = () => {

    

    const navigate=useNavigate();
    const { id } = useParams();

    // const location = useLocation();
    const dispacth = useDispatch();
    const token = localStorage.getItem("token");
    window.scrollTo(0, 0);

   
    useEffect(() => {

        if (token) {
            
            dispacth(getOneRestaurantsAction({ token, restaurantId: id }))
            dispacth(getAllCategoriesAction({ token, restaurantId: id }))
           
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


   


    








    return (
        <div className='mt-20 p-4  '>



            <RestaurantHeader />
            <RestaurantMenu rId={id} />

            <Flex 
            className='bg-orange-500 rounded-full p-2 m-2 cursor-pointer items-center space-x-2'
                position="fixed"
                bottom="4"
                onClick={()=>{navigate(`/cart/${id}`)}} 
                right="4"
                zIndex="999" // Ensures the button is above other content
            >
                <FaShoppingCart className='text-xl ' />
                
                
                <p>Go to cart</p>
            </Flex>




        </div>


    )
}

export default RestaurantDetails
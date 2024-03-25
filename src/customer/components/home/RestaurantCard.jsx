import React, { useEffect, useState } from 'react';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { isFav } from '../../../help/Logics';
import { addToFavAction, getFavsRestaurantssAction } from '../../../redux/restaurant/restaurantAction';
import { Badge } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { clearCartAction } from '../../../redux/cart/cartAction';


const RestaurantCard = ({ item }) => {
    const navigate=useNavigate();
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();

    const { favorites, fav } = useSelector(store => store.restaurant);
    useEffect(() => {
        dispatch(getFavsRestaurantssAction(token));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fav]);




    const handleAddFav = () => {
        dispatch(addToFavAction({ token, restaurantId: item?.id }));

    }

    const naviagteToRest=()=>{

        if(item.open===true){
            
            navigate(`/restaurant/${item?.name}/${item?.cuisineType}/${item?.id}`)
            dispatch(clearCartAction({token}))
        }else{
            console.log("restaurant is closed")
        }
        
        
    }


    return (
        <div 
       
        
        className="bg-gray-800 shadow-md rounded-lg overflow-hidden cursor-pointer">
            <img className="w-full object-cover"
             onClick={()=>{
                naviagteToRest()
             }}
            
            src={item?.images.length > 0 ? item.images[0] : "https://cdn.pixabay.com/photo/2021/05/25/02/03/restaurant-6281067_640.png"} alt="Restaurant" />
            <div className="p-2 flex justify-between items-center">
                <div>
                    {item?.open ? <Badge colorScheme='green'>open</Badge> :
                        <Badge colorScheme='red'>closed</Badge>}
                    <h3 className="text-lg font-semibold">{item?.name}</h3>
                    <p className="mb-2">{item?.description}</p>
                </div>
                <div className='cursor-pointer text-2xl'>
                    {isFav(item?.id, favorites) ? (
                        <MdOutlineFavorite color='orange' onClick={handleAddFav} />
                    ) : (
                        <MdOutlineFavoriteBorder onClick={handleAddFav} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default RestaurantCard;

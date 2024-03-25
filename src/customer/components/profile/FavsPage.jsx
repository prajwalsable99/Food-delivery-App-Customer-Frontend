
import React, { useEffect } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { getFavsRestaurantssAction } from '../../../redux/restaurant/restaurantAction';
import { FcRating } from "react-icons/fc";
const FavsPage = () => {
    // Mock data representing each item in the grid
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();

    const { favorites } = useSelector(store => store.restaurant);
    useEffect(() => {

       if(token){
        dispatch(getFavsRestaurantssAction(token));
       }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {favorites.map(item => (
                    <div key={item.id} className="max-w-lg p-4 shadow-md text-black bg-white">
                        
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <img src={item.images.length>0 && item.images[0]} alt={item?.title} className="block object-cover object-center w-full rounded-md h-36" />
                                <div className="flex items-center text-xs">
                                    {/* <span>6 min ago</span> */}
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex w-full">
                                    <p className="text-xl font-semibold">{item?.title}</p>
                                    <FcRating className='text-md'/>
                                </div>
                                <p className="leading-snug">{item?.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FavsPage;

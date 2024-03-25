import React, { useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllRestaurantssAction } from '../../../redux/restaurant/restaurantAction';

const RestaurantsList = () => {
  
  const token=localStorage.getItem("token");
  const dispatch =useDispatch();
  const {restaurantslist} =useSelector(store=>store.restaurant);


  useEffect(()=>{

    if(token){
      dispatch(getAllRestaurantssAction(token));
    }

  },[token])
  


  return (
    <div className='mt-10'>
      
      <p className='text-2xl font-bold m-4 text-center'>Restaurants For you</p>
      
      <div className='px-10 flex justify-center'>


        <div className=' w-5/6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 '>

          {
             restaurantslist.length>0 && restaurantslist.map((item) => (
              <RestaurantCard key={item?.id}  item={item} />
            ))
          }
        </div>
      </div>
    </div>



  )
}

export default RestaurantsList

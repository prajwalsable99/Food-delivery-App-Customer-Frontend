import React, { useEffect, useState } from 'react';
import { foodtypes } from './sampleCategoryData';
import FoodCard from './FoodCard';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneRestaurantsAction } from '../../../redux/restaurant/restaurantAction';
import { getAllFood, getFoodByCategory } from '../../../redux/food/foodAction';

const RestaurantMenu = ({rId}) => {

    const token=localStorage.getItem("token");
    const dispatch=useDispatch();
    const [selectedFoodType, setSelectedFoodType] = useState(foodtypes[0]);
    const [selectedFoodCategory, setSelectedFoodCategory] = useState();
    const { categorieslist } = useSelector(store => store.food);
    const { current_res } = useSelector(store => store.restaurant);

    const { foodslist } = useSelector(store => store.food);
    

    useEffect(()=>{

        
        if(token ){

            const reqdata={
                restaurantId:rId,
                isseasonal:false,
                isveg:false,
                isnonveg:false,
                token

            }


            dispatch(getAllFood(reqdata))

        }

    },[])

    const handleonclikfoodtype=(type)=>{
        setSelectedFoodType(type)
        setSelectedFoodCategory(null)

        const reqdata={
            restaurantId:current_res?.id,
            isseasonal:type==="seasonal",
            isveg:type==='veg',
            isnonveg:type==='nonveg',
            token

        }
        // console.log(reqdata)
        dispatch(getAllFood(reqdata))
        
    }
    

   

    const handleonclikFoodcategory=(category)=>{
        setSelectedFoodCategory(category)
        // console.log(category)
        setSelectedFoodType(null);
        const reqdata={
            restaurantId:current_res?.id,
            categoryName: category?.name,
            token

        }

        dispatch( getFoodByCategory(reqdata))
        
    }

    

    return (
        <div className='flex justify-center items-center flex-col'>
            <hr className='text-white my-2 w-5/6' />
            <div className='w-5/6 flex'>
                {/* left */}
                <div className='w-1/4  px-3'>
                    <div className="w-2/3 sticky top-20">
                    <hr className='text-white m-3' />
                        <p className='text-xl text-center my-2'>Type</p>
                        {foodtypes.map((foodtype, index) => (
                           <div 
                               key={index}
                               onClick={() =>
                                 handleonclikfoodtype(foodtype)
                                
                                }
                               className={selectedFoodType === foodtype ? 'border p-2 border-orange-500' : 'cursor-pointer'}
                           >
                                {foodtype}
                           </div>
                        ))}

                        <hr className='text-white m-3' />

                        <p className='text-xl text-center my-2'>Categories</p>

                        {categorieslist.map((category, index) => (
                            <div 
                                key={index}
                                onClick={() => handleonclikFoodcategory(category)}
                                className={selectedFoodCategory === category ? 'border p-2 border-orange-500' : 'cursor-pointer'}
                            >
                                <p>
                                    {category?.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/*right  */}
                <div className='w-3/4  p-2'>
                    { foodslist.length>0 && foodslist.map((item) => (
                        <FoodCard key={item.id} foodData={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RestaurantMenu;

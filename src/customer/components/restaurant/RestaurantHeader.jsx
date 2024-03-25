import React from 'react'
import { useSelector } from 'react-redux';

const RestaurantHeader = () => {

    const { current_res } = useSelector(store => store.restaurant);
    return (

        <div className='flex justify-center mb-2 w-full '>
            <div className='w-2/3'>
                <p className='py-2 border-b p-1 mb-2'>
                    Home/
                    {current_res?.address?.country}/
                    {current_res?.address?.state}/
                    {current_res?.address?.city}/
                    {current_res?.address?.street}/
                    {current_res?.name}/Order Online

                </p>
                <div className="grid grid-cols-3 gap-2 bg-gray-800 h-[70vh] p-4 overflow-hidden">
                    <div className="col-span-2">
                        <img
                            src={current_res?.images.length > 0 ? current_res?.images[0] : "https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_640.png"}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="grid grid-rows-2 py-3">
                        <img
                            src={current_res?.images.length > 1 ? current_res?.images[1] : "https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_640.png"}
                            alt=""
                            className="w-full "
                        />

                        <img
                            src={current_res?.images.length > 2 ? current_res?.images[2] : "https://cdn.pixabay.com/photo/2017/11/10/04/47/image-2935360_640.png"}
                            alt=""
                            className="w-full "
                        />
                    </div>
                </div>

                <div className='pl-2 my-1'>
                <p className='font-bold text-2xl'>{current_res?.name}</p>
                    <p className='text-md'>{current_res?.description}</p>
                    <p className='font-thin text-sm'>{current_res?.cuisineType}</p>
                    <p className='font-thin text-sm'>opening Hours : {current_res?.openingHours}</p>
                </div>

            </div>

        </div>


    )
}

export default RestaurantHeader

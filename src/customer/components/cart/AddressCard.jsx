import React from 'react'
import { IoLocation } from "react-icons/io5";
import { MdRadioButtonChecked } from "react-icons/md";
import { MdRadioButtonUnchecked } from "react-icons/md";
const AddressCard = ({item,isSelected}) => {

    
    return (
        <div className='w-full m-2 p-4 bg-white text-black rounded-md  flex flex-col'>
            <div className='flex items-center'>
                <IoLocation color='orange' className='cursor-pointer text-xl' />
                <p>Address </p>

            </div>
            <div>
                <div className='flex justify-between'>
                    <div>
                        <span>{item?.street}</span> ,
                        <span>{item?.city}</span>,
                        <span>{item?.country}</span>
                    </div>
                    <div>
                        {
                            isSelected?<MdRadioButtonChecked/>:
                            <MdRadioButtonUnchecked />
                        }

                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddressCard

import React from 'react'
import { NavLink } from 'react-router-dom'

const ProfileNavBar = () => {

    const navs = ' py-4 border text-xl w-full shadow ';

    return (
        <div className=' flex flex-col h-screen justify-between bg-white text-black '>
            <div className='flex py-2 flex-col items-center text-center'>
                <div className='h-20'></div>

                <div className={navs}>
                    <NavLink to="user"

                        className={({ isActive, isPending }) => {
                            return isActive ? "text-orange-400" : "";
                        }}
                    >User Details</NavLink>
                </div>
                <div className={navs}>
                    <NavLink
                        className={({ isActive, isPending }) => {
                            return isActive ? "text-orange-400 " : "";
                        }}
                        to="address">Address</NavLink>
                </div>
                <div className={navs}>
                    <NavLink
                        className={({ isActive, isPending }) => {
                            return isActive ? "text-orange-400" : "";
                        }}
                        to="orders">Orders</NavLink>
                </div>
                <div className={navs}>
                    <NavLink
                        className={({ isActive, isPending }) => {
                            return isActive ? "text-orange-400" : "";
                        }}
                        to="favs">Favorites</NavLink>
                </div>

            </div>


            <div className='mb-10 p-4 text-center text-white'>
                <p className='rounded-md p-2'>
                    <span className='bg-black pl-2 py-1 rounded-l-md'>Hungry</span>
                    <span className='bg-orange-500 pr-2 py-1 rounded-r-md'>Hub</span>
                </p>
            </div>



        </div>
    )
}

export default ProfileNavBar

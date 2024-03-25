import React from 'react'
import ProfileNavBar from '../../components/profile/ProfileNavBar'
import { Route, Routes } from 'react-router-dom'
import UserDetailsPage from '../../components/profile/UserDetailsPage'
import AddressPage from '../../components/profile/AddressPage'
import OrdersPage from '../../components/profile/OrdersPage'
import FavsPage from '../../components/profile/FavsPage'
import ProfileUniversal from '../../components/profile/ProfileUniversal'

const ProfilPage = () => {
    return (
        <div className='flex w-full '>
            <div className='w-1/5 h-full sticky top-0 '>
                <ProfileNavBar />
            </div>

            <div className=' flex flex-col w-4/5 mt-20 items-center'>
                <Routes>
                    <Route path="user"  element={<UserDetailsPage />} ></Route>
                    <Route path="address" element={<AddressPage />} ></Route>
                    <Route path="orders" element={<OrdersPage />} ></Route>
                    <Route path="favs" element={<FavsPage />} ></Route>
                    <Route path="*" element={<ProfileUniversal />} ></Route>

                </Routes>
            </div>

        </div>
    )
}

export default ProfilPage


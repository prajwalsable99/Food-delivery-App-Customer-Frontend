import React, { useEffect } from 'react'
import { FcHome } from "react-icons/fc";
import AddressCard from '../cart/AddressCard'
import { useDispatch, useSelector } from 'react-redux';
import { getAddressesAction } from '../../../redux/auth/authAction';
const AddressPage = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const {addresses } = useSelector(store => store.auth);
  useEffect(() => {

     if(token){
      dispatch(getAddressesAction(token));
     }

      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div>
      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Addresses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {addresses.map((item, index) => (
        <ACard key={index} {...item} />
      ))}
    </div>
    </div>
    </div>
  )
}

export default AddressPage

const ACard = ({ street, city, postalCode, state, country }) => {
  return (
    <div className="bg-white text-orange-500 border rounded-md p-4 shadow-md">
      <span>

        <FcHome/>
      </span>
      <p className="font-semibold">{street}</p>
      <p>{city}, {state} {postalCode}</p>
      <p>{country}</p>
    </div>
  );
};
import { Avatar } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import { FcButtingIn } from "react-icons/fc";
const UserDetailsPage = () => {
  const { requser } = useSelector((store) => store.auth);

  return (
    <div className="p-6 sm:p-12 bg-white text-black mt-2 p-2 rounded-md shadow shadow-white w-5/6">
      <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">

        <Avatar name={requser?.fullName} className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-700" />

        <div className="flex flex-col justify-center">
       <div className='flex'>
          <h4 className="text-lg font-semibold text-center md:text-left">{requser?.fullName}</h4>
       <FcButtingIn  className='text-xl'/>
       </div>
          <p className="text-md">{requser?.role}</p>
        </div>
      </div>


      <div className="bg-gray-100 mt-20 p-2">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-xl font-semibold mb-4">About Hungry Hub</h2>
                <p className="text-sm text-gray-800">
                    Welcome to Hungry Hub, your go-to destination for delicious food delivered right to your doorstep. 
                    At Hungry Hub, we're passionate about connecting hungry customers with top-quality meals from their 
                    favorite local restaurants.
                </p>
                <h3 className="text-md font-semibold mt-6 mb-2">Our Mission</h3>
                <p className="text-sm text-gray-800">
                    Our mission is to make food delivery convenient, reliable, and enjoyable for everyone. 
                    We strive to provide a seamless experience from ordering to delivery, ensuring that 
                    our customers can always rely on us for a satisfying meal.
                </p>
                <h3 className="text-md font-semibold mt-6 mb-2">Our Values</h3>
                <ul className="list-disc list-inside text-xs text-gray-800">
                    <li>Quality: We partner with the best restaurants to offer high-quality, delicious meals.</li>
                    <li>Convenience: We aim to make ordering food as easy as possible for our customers.</li>
                    <li>Reliability: Customers can trust us to deliver their meals on time, every time.</li>
                    <li>Community: We support our local communities by working with nearby restaurants and businesses.</li>
                </ul>
                <h3 className="text-md font-semibold mt-6 mb-2">Contact Us</h3>
                <p className="text-sm text-gray-800">
                    Have questions or feedback? We'd love to hear from you! Contact us at <a href="mailto:info@hungryhub.com" className="text-blue-500">info@hungryhub.com</a>.
                </p>
            </div>
        </div>

    </div>
  );

}

export default UserDetailsPage

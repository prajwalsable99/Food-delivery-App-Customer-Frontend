import { Avatar, useDisclosure, useToast } from '@chakra-ui/react';
import { AiOutlineLogout } from "react-icons/ai";
import React from 'react';
import { FaSearch} from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { LogoutAction } from '../../../redux/auth/authAction';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import SearchDrawer from '../search/SearchDrawer';


const NavBar = () => {

    const navigate=useNavigate();

    const { isOpen, onOpen, onClose } = useDisclosure()

    const openSearchDrawer=()=>{
        console.log("opening")
        onOpen();
    }
    

    const { requser} = useSelector((store) => store.auth);
    
    const toast = useToast();
    const dispatch=useDispatch()
    const handlelogout=()=>{
        console.log("logged out")
        toast({
            title: "User Logged out",
            description: "Logged out successfully.",
            status: "error",
            duration: 5000,
            isClosable: true,
        });
        dispatch(LogoutAction())
    }
    return (
        <div className='w-full fixed top-0 z-10 bg-gray-800 bg-opacity-70 shadow-md pt-2 text-white'>
            <div className='flex items-center justify-between p-3 mx-8'>
                <div className='flex space-x-2 items-center justify-center'>
                    <IoFastFoodSharp className='text-5xl cursor-pointer text-xl text-orange-500' />
                    <p className='rounded-md p-2 cursor-pointer' onClick={()=>{navigate("/")}}>
                        <span className='bg-black pl-2 py-1 rounded-l-md'>Hungry</span>
                        <span className='bg-orange-500 pr-2 py-1 rounded-r-md'>Hub</span>
                    </p>

                </div>

                <div className='flex space-x-3 items-center justify-center'>
               


                   { requser && <FaSearch className='text-2xl cursor-pointer' 
                    onClick={openSearchDrawer} 
                    />
}
                    
                    
                    
                    

                    <Avatar name={requser?.fullName} className='cursor-pointer'onClick={()=>{navigate("/profile")}}  />
                    
                    <AiOutlineLogout
                    onClick={handlelogout}
                    className='text-3xl cursor-pointer' />
                </div>
            </div>

            <SearchDrawer isOpen={isOpen} onClose={onClose}/>
        </div>
    );
}

export default NavBar;

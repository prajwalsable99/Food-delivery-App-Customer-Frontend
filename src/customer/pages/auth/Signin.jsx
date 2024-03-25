import React, { useState } from 'react'
import { FormControl, FormLabel, Input, Button,useToast, Text } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { siginAction } from '../../../redux/auth/authAction';
import { useNavigate } from 'react-router-dom';
const Signin = () => {
    const toast = useToast();
    const navigate=useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
       
        email: '',
      
        password: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
    
        try {
          // Here you can handle form submission, e.g., send data to backend
          // console.log(formData);
    
          const response = await dispatch(siginAction(formData))
    
          if (response && response.jwt !== null) {
            
            setFormData({
              email: '',
              password: ''
            }
    
            )
            toast({
                title: "User signed in",
                description: "Signed in successfully.",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
    
              setTimeout(() => {
                navigate("/");
              }, 1000); // 2000 milliseconds = 2 seconds
    
          } else {
            alert("invalid credentials");
          }
        } catch (error) {
          console.error("Error during signin:", error);
          // Handle error, show error message, etc.
        }
      };
    

    return (

        <div className='mt-20 flex flex-col items-center justify-center'>
            <div className='w-1/3 m'>

            <form onSubmit={handleSubmit} className='bg-white text-black p-8 rounded-lg shadow-lg'>
            <Text className='text-center' fontSize='xl' fontWeight={"bold"}>
                   Sign In
                </Text>
                    
                    <FormControl id="email" mb={4} isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            focusBorderColor="customOrange.500" // Orange focus color
                        />
                    </FormControl>
                   
                    <FormControl id="password" mb={4} isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            focusBorderColor="customOrange.500" // Orange focus color
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="blue" mt={4}>Sign in</Button>

                    <div className='flex mt-2 '>
                        <p className='mr-1'>  Don't have account</p>

                        <button className='text-blue-500' onClick={() => { navigate("/signup") }}>signup</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Signin

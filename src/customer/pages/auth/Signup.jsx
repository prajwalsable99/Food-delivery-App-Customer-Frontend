import { FormControl, FormLabel, Input, Button, useToast, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sigupAction } from '../../../redux/auth/authAction';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const toast = useToast();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        fullName: '',
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
        // Validation can be added here before submitting the form
        // console.log(formData); // Form data can be submitted to backend or processed here

        const reqdata = {
            ...formData, role: "ROLE_CUSTOMER"
        }
        console.log(reqdata)
        try {
            const response = await dispatch(sigupAction(reqdata));

            if (response && response.jwt !== null) {
                // setShowSnackbar(true);

                setFormData({
                    fullName: '',
                    email: '',
                    password: ''
                });
                toast({
                    title: "User registered",
                    description: "Regiseterd successfully.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });




            } else {
                alert("Email already exists.");
            }

        } catch (error) {
            console.error("Error during signup:", error);
            // Handle error, show error message, etc.
        }
    };


    return (

        <div className='mt-20 flex flex-col items-center justify-center'>
            <div className='w-1/3 m'>
               
                <form onSubmit={handleSubmit} className='bg-white text-black p-8 rounded-lg shadow-lg'>
                <Text className='text-center' fontSize='xl' fontWeight={"bold"}>
                   Sign Up
                </Text>
                    <FormControl id="fullName" mb={4} isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            focusBorderColor="customOrange.500" // Orange focus color
                        />
                    </FormControl>
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
                    <Button type="submit" colorScheme="blue" mt={4}>Sign Up</Button>

                    <div className='flex mt-2 '>
                        <p className='mr-1'>  Already registered</p>

                        <button className='text-blue-500' onClick={() => { navigate("/") }}>signin</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Signup;

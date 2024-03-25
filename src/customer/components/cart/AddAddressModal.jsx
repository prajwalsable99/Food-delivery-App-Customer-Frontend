import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, FormControl, FormLabel, Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addAddressAction } from '../../../redux/auth/authAction';

const AddAddressModal = ({ onClose, isOpen }) => {

    const token=localStorage.getItem("token");
    const dispatch=useDispatch();
    const [formData, setFormData] = useState({
        street: '',
        city: '',
        postalCode: '',
        state: '',
        country: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
        dispatch(addAddressAction({ token,data:formData }))

        // Close modal after submission
        onClose();
    };

    return (
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent background={"black"}>
                <ModalHeader>Add Address</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={handleSubmit}>z
                        <FormControl id="street" mb={4}>
                            <FormLabel>Street</FormLabel>
                            <Input focusBorderColor="customOrange.500" type="text" name="street" value={formData.street} onChange={handleChange} />
                        </FormControl>
                        <FormControl id="city" mb={4}>
                            <FormLabel>City</FormLabel>
                            <Input focusBorderColor="customOrange.500" type="text" name="city" value={formData.city} onChange={handleChange} />
                        </FormControl>
                        <FormControl id="postalCode" mb={4}>
                            <FormLabel>Postal Code</FormLabel>
                            <Input focusBorderColor="customOrange.500" type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
                        </FormControl>
                        <FormControl id="state" mb={4}>
                            <FormLabel>State</FormLabel>
                            <Input focusBorderColor="customOrange.500" type="text" name="state" value={formData.state} onChange={handleChange} />
                        </FormControl>
                        <FormControl id="country" mb={4}>
                            <FormLabel>Country</FormLabel>
                            <Input focusBorderColor="customOrange.500" type="text" name="country" value={formData.country} onChange={handleChange} />
                        </FormControl>
                        <Button type="submit" colorScheme="orange">Save</Button>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default AddAddressModal;

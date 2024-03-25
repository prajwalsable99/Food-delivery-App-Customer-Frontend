import React, { useEffect, useState } from 'react'
import Cart from '../../components/cart/Cart'

import AddressCard from '../../components/cart/AddressCard'
import { MdOutlineEditLocationAlt } from "react-icons/md";
import { Button, useDisclosure, useToast } from '@chakra-ui/react';
import AddAddressModal from '../../components/cart/AddAddressModal';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAddressesAction } from '../../../redux/auth/authAction';
import { startPayment } from '../../../help/Logics';
import { createOrderAction } from '../../../redux/order/orderAction';
// import * as Razorpay from 'razorpay';
const Razorpay = window.Razorpay;



const CartPage = () => {
    const navigate = useNavigate();

    const OpenGateway = (resp) => {
        // console.log("step 2 started")
        var options = {

            order_id: resp?.payOrderId,
            key: resp?.payKey,
            amount: resp?.payAmount,
            currency: resp?.payCurrency,
            name: "HUNGRY HUB",
            description: "food delivery app",
            image: "https://cdn.pixabay.com/photo/2016/06/06/18/29/meat-skewer-1440105_640.jpg",
            handler: (resp) => {
                // console.log("success of transactipn =>", resp)
                toast({
                    title: "Payment Successful",
                    description: "creating order",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });


                const orderdata = {
                    restaurantId:parseInt(rid, 10),
                    addressId:selAddId,
                    orderStatus:"PENDING",
                    transactionId:resp.razorpay_payment_id
                }
                // console.log(orderdata)
                 dispatch(createOrderAction({data:orderdata,token}))
                
                navigate('/', { replace: true, state: { clearHistory: true } });

            },


            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            },



        }
        // console.log(options)
        var robj = new Razorpay(options);

        // console.log(robj)
        robj.on('payment.failed', function (response) {
            // console.log("failure=>", response.error.description);

            toast({
                title: "Payment failed",
                description: response.error.description,
                status: "error",
                duration: 3000,
                isClosable: true,
            });

        });
        robj.open();

    }



    const token = localStorage.getItem("token");
    const toast = useToast();
    const dispatch = useDispatch();
    const { rid } = useParams();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [selAddId, setSelAddId] = useState(null);

    const { addresses, createdaddress } = useSelector(store => store.auth);
    const { mycart } = useSelector(store => store.cart);
    useEffect(() => {

        if (token) {
            dispatch(getAddressesAction(token))
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [createdaddress]);

    const setDisable = () => {
        if (selAddId === null) {
            return true;
        }
        if (mycart?.items.length === 0) {
            return true
        }
        return false;
    }

    const handlecreateOrder = async (e) => {
        e.preventDefault();
        const reqdata = {
            token,
            amount: mycart.total,
        }
        const transaction = await startPayment(reqdata);

        try {
            if (!transaction.status) {

                OpenGateway(transaction);
            }

        } catch (error) {
            toast({
                title: "Payment failed",
                description: "",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }



    }

    return (
        <div className='mt-20 mx-6 flex justify-center bg-gray-800 '>
            <div className='flex w-5/6 '>

                <div className=' w-4/5   m-2 ' style={{ overflowX: 'hidden' }} >
                    <p className='text-xl pl-2 mb-2'>Your Addresses</p>

                    <div className='h-[50vh]  bg-gray-300 overflow-y-auto'>
                        {
                            addresses.length > 0 && addresses.map(
                                (i) => (
                                    <div onClick={() => { setSelAddId(i.id) }} key={i?.id}>
                                        <AddressCard item={i} isSelected={i.id === selAddId} />
                                    </div>

                                )
                            )

                        }
                    </div>
                    <AddAddressModal onClose={onClose} isOpen={isOpen} />
                    <div
                        onClick={onOpen}

                        className='cursor-pointer text-xl mt-2 flex items-center space-x-2  shadow-md'>
                        <MdOutlineEditLocationAlt className='text-orange-400 text-2xl' />
                        <span > Add new Address</span>
                        {/* <p>{selAddId}</p> */}
                    </div>

                    <Button colorScheme="orange" className='mt-2' size="md" isDisabled={setDisable()} onClick={(e) => handlecreateOrder(e)}>
                        Order
                    </Button>



                </div>

                <div className='w-2/5 p-2'>
                    <Cart restaurantId={rid} />
                    <hr />



                </div>
            </div>
        </div>
    )
}

export default CartPage

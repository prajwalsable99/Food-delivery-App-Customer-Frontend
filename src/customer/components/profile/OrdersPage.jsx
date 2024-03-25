import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrdersAction } from '../../../redux/order/orderAction';
import { FcAddressBook } from "react-icons/fc";
import OrderDetails from './OrderDetails';
const OrdersPage = () => {

    const token = localStorage.getItem("token");

    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            dispatch(getOrdersAction({ token }))
        }
    }, [])

    const { myorders } = useSelector(store => store.order);


    const [isOpen, setIsOpen] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);
    

    const handleOpenModal = (ord) => {
        setCurrentOrder(ord)
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };
    return (
        <div className="container p-2 mx-auto sm:p-4 text-gray-100">
            <div className='flex  '>
                <p className="mb-4 text-2xl font-semibold leading-tight">
                    Orders</p>
                <FcAddressBook className='text-4xl'></FcAddressBook>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                        <col className="w-1/6" />
                    </colgroup>
                    <thead className="bg-gray-700">
                        <tr className="text-left">
                            <th className="p-3">Order Id</th>
                            <th className="p-3">Restaurant</th>
                            <th className="p-3">Order Date</th>
                            <th className="p-3">transaction-id</th>
                            <th className="p-3 ">Amount</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myorders?.length > 0 && myorders?.map((order) => (

                                <tr key={order?.id} 
                                
                                onClick={()=>{handleOpenModal(order)}}
                                className="border-b border-opacity-20 border-gray-700 bg-gray-900 cursor-pointer ">
                                    <td className="p-3">{order?.id}</td>
                                    <td className="p-3">{order?.items[0]?.food?.restaurant?.name}</td>
                                    <td className="p-3">{new Date(order?.createdAt).toLocaleString()}<br /></td>

                                    <td className="p-3"><br />{order.transactionId || "Offline payment"}</td>
                                    <td className="p-3  text-white">{order?.totalAmount}</td>
                                    <td className={order?.orderStatus === "PENDING" ? "p-3 text-red-500" : "p3 text-green-500"}> {/* Adjust this column */}
                                        {order?.orderStatus}
                                    </td>
                                </tr>
                            ))

                        }




                        {/* Additional rows */}
                    </tbody>
                </table>
            </div>

            <OrderDetails isOpen={isOpen} onClose={handleCloseModal} order={currentOrder} ></OrderDetails>
        </div>
    );
}

export default OrdersPage;

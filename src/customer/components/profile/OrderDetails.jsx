import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import React from 'react';

const OrderDetails = ({ order, isOpen, onClose }) => {

    console.log(order)
    if (!order) return null; // Ensure order is not null before rendering

    const { customer, totalAmount, orderStatus, createdAt, transactionId, deliveryAddress, items } = order;

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader color={"orange"}>Order Details</ModalHeader>
                <ModalCloseButton color={"orange"} />
                <ModalBody>
                    <div className="border border-gray-200 p-4 text-black rounded-md shadow-md">

                        <div className="mb-4 bg-orange-300 p-2 rounded-md">
                            <p><span className="font-semibold">Order ID:</span> {order.id}</p>
                            {customer && (
                                <>
                                    <p><span className="font-semibold text-sm">Customer Name:</span> {customer.fullName}</p>
                                    <p><span className="font-semibold text-sm">Email:</span> {customer.email}</p>
                                </>
                            )}
                            <p><span className="font-semibold text-sm">Total Amount:</span> ${totalAmount}</p>
                            <p><span className="font-semibold text-sm">Order Status:</span> {orderStatus}</p>
                            <p><span className="font-semibold text-sm">Created At:</span> {new Date(createdAt).toLocaleString()}</p>
                            <p><span className="font-semibold text-sm">Transaction ID:</span> {transactionId}</p>
                        </div>
                        {deliveryAddress && (
                            <div className="mb-4  bg-orange-200 p-2 rounded-md">
                                <h3 className="text-lg font-semibold mb-2">Delivery Address</h3>
                                <p>{deliveryAddress.street}, {deliveryAddress.city}, {deliveryAddress.state}, {deliveryAddress.postalCode}, {deliveryAddress.country}</p>
                            </div>
                        )}
                        <div className="overflow-x-auto  h-[20vh]">
                            <table className="min-w-full">
                                <thead className="bg-gray-800 text-white">
                                    <tr>
                                        <th className="px-6 py-3">Item</th>
                                        <th className="px-6 py-3">Quantity</th>
                                        <th className="px-6 py-3">Total Price</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-900">
                                    {items.map(item => (
                                        <tr key={item.id}>
                                            <td className="px-6 py-4">{item.food.name}</td>
                                            <td className="px-6 py-4">{item.quantity}</td>
                                            <td className="px-6 py-4">{item.totalPrice}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default OrderDetails;
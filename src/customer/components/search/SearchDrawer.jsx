import {  Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { searchFood } from "../../../redux/food/foodAction";

const SearchDrawer = ({ isOpen, onClose }) => {

    const dispatch = useDispatch();
    const token = localStorage.getItem("token");

    const searchfood = (query) => {

        // console.log(query)
        if (token && query !== "") {
            dispatch(searchFood({ query, token }))
        }

    }
    const { searchfoodlist } = useSelector(store => store.food);

    return (
        <>

            <Drawer

                isOpen={isOpen}
                placement='right'
                onClose={onClose}

            >
                <DrawerOverlay />
                <DrawerContent textColor={"black"} >
                    <DrawerCloseButton />
                    <DrawerHeader>Search Food</DrawerHeader>

                    <DrawerBody >
                        <input

                            onChange={(e) => { searchfood(e.target.value) }}
                            type="text"
                            placeholder="Type here..."
                            className="w-full px-3 py-2 border rounded-md focus:ring-orange-500 focus:border-orange-500"
                        />

                        <div className="mt-2">
                            {searchfoodlist.length > 0 && searchfoodlist.map((food) => (
                                <div key={food?.id} className="bg-white rounded-lg shadow-md p-4 mb-4">
                                    <p className="text-sm font-semibold">{food?.name}</p>
                                    <p className="text-gray-600">{food?.foodCategory?.name}</p>
                                </div>
                            ))}
                        </div>


                    </DrawerBody>


                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SearchDrawer;
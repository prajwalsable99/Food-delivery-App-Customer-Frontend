import { CREATE_ORDER, GET_ALL_ORDERS } from "./orderActionType"



const initialValues = {

    createdorder:null,
    myorders: [],
 



}

export const orderReducer = (store = initialValues, action) => {

    if (action.type === CREATE_ORDER) {

        return { ...store, createdorder: action.payload }
    } else if (action.type === GET_ALL_ORDERS) {

        return { ...store, myorders: action.payload }

    }


    return store;

}
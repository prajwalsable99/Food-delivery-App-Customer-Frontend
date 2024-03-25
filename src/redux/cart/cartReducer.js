import { ADD_TO_CART, CLEAR_CART, GET_CART, REMOVE_FROM_CART } from "./cartActionType"



const initialValues = {

  mycart:null,
  addeditem:null,
  removeditem:null,
  clearcart:null,



}

export const cartReducer = (store = initialValues, action) => {

    if (action.type === GET_CART) {

        return { ...store, mycart: action.payload }

    } else if (action.type === ADD_TO_CART) {

        return { ...store, addeditem: action.payload }

    } else if (action.type === REMOVE_FROM_CART) {

        return { ...store, removeditem: action.payload }

    } else if (action.type === CLEAR_CART) {

        return { ...store, clearcart: action.payload }
    }


    return store;

}
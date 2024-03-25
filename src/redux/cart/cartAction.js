import { ADD_TO_CART, CLEAR_CART, GET_CART, REMOVE_FROM_CART } from "./cartActionType";

export const getCartAction= (data) => async (dispatch) => {
    try {

        const res = await fetch(
            `http://localhost:8080/api/cart/my`,

            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + data.token,
                }

            }
        );


        const response = await res.json();
            // console.log(response)
    


        dispatch({ type: GET_CART, payload: response })



    } catch (error) {

        console.log(error)
    }
}

export const addToCartAction = (data) => async (dispatch) => {


    try {

        const res = await fetch(
            `http://localhost:8080/api/cart/add/food/${data.foodId}` ,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + data.token,
                }

            }
        );


        const resp = await res.json();
        const statusCode = res.status; 
        
      
      
        dispatch({ type: ADD_TO_CART, payload: resp })
        return statusCode===200;



    } catch (error) {

        console.log(error)
       
    }
}

export const removeFromCartAction = (data) => async (dispatch) => {


    try {

        const res = await fetch(
            `http://localhost:8080/api/cart/remove/cartitem/${data.cartItemId}` ,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + data.token,
                }

            }
        );

        const statusCode = res.status; 
        const resp = await res.json();
      
      
        dispatch({ type: REMOVE_FROM_CART, payload: resp })
        return statusCode===200;



    } catch (error) {

        console.log(error)
       
    }
}


export const clearCartAction = (data) => async (dispatch) => {


    try {

        const res = await fetch(
            `http://localhost:8080/api/cart/clear` ,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + data.token,
                }

            }
        );


        const resp = await res.json();

        console.log(resp)
      
      
        dispatch({ type: CLEAR_CART, payload: resp })
        



    } catch (error) {

        console.log(error)
       
    }
}



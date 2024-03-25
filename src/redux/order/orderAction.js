import { CREATE_ORDER, GET_ALL_ORDERS } from "./orderActionType";

export const getOrdersAction= (data) => async (dispatch) => {
    try {

        const res = await fetch(
            `http://localhost:8080/api/orders/my`,

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
    


        dispatch({ type: GET_ALL_ORDERS, payload: response })



    } catch (error) {

        console.log(error)
    }
}

export const createOrderAction = (reqdata) => async (dispatch) => {


    try {

        const res = await fetch(
            `http://localhost:8080/api/orders/create` ,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + reqdata.token,
                },
                body: JSON.stringify(reqdata.data)


            }
        );


        const resp = await res.json();
        const statusCode = res.status; 
        
      
      
        dispatch({ type: CREATE_ORDER, payload: resp })
        return statusCode===201;



    } catch (error) {

        console.log(error)
       
    }
}

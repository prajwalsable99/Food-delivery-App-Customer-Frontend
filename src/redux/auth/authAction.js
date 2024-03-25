import { ADD_ADDRESS, GET_ADDRESSES, LOG_OUT, REQ_USER, SIGN_IN, SIGN_UP,} from "./authActionType";

export const sigupAction = (data) => async (dispatch) => {


    try {

        const res = await fetch(
            "http://localhost:8080/auth/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(data)

            }
        );


        const resp = await res.json();

        // console.log("sign up user data", resp)

        if(resp.jwt){

            dispatch({ type: SIGN_UP, payload: resp })
            return resp;
        }else{
            dispatch({ type: SIGN_UP, payload: null})
            return null;
        }




    } catch (error) {
        dispatch({ type: SIGN_UP, payload: null})
        console.log(error)
        return null;
    }
}

export const siginAction = (data) => async (dispatch) => {


    try {

        const res = await fetch(
            "http://localhost:8080/auth/signin",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify(data)

            }
        );


        const resp = await res.json();
        // console.log("sign in user data", resp);
        if(resp.jwt){

            localStorage.setItem("token",resp.jwt);
            dispatch({ type: SIGN_IN, payload: resp })
            return resp;
        }else{
            dispatch({ type: SIGN_IN, payload: null})
            return null;
        }
        



    } catch (error) {

        console.log(error)
        dispatch({ type: SIGN_IN, payload: null})
    }
}

export const LogoutAction = () => async (dispatch) => {


    try {

        localStorage.removeItem("token");
        

        dispatch({type:LOG_OUT,payload:null})
        // console.log("logged out action")



    } catch (error) {

        console.log(error)
    }
}

export const requserAction = (jwt) => async (dispatch) => {


    try {

        const res = await fetch(
            "http://localhost:8080/api/users/profile",

            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + jwt,
                }

            }
        );


        const requser = await res.json();

        // console.log("req  user data", requser)


        dispatch({ type: REQ_USER, payload: requser })



    } catch (error) {

        console.log(error)
    }
}


export const getAddressesAction = (jwt) => async (dispatch) => {


    try {

        const res = await fetch(
            "http://localhost:8080/api/users/addresses",

            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + jwt,
                }

            }
        );


        const resp = await res.json();

       
            // console.log(resp)

        dispatch({ type: GET_ADDRESSES, payload: resp})



    } catch (error) {

        console.log(error)
    }
}

export const addAddressAction = (data) => async (dispatch) => {


    try {

        const res = await fetch(
            "http://localhost:8080/api/users/add/address",
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + data.token,
                },
                body: JSON.stringify(data.data)

            }
        );


        const resp = await res.json();
        // console.log("sign in user data", resp);
        
            dispatch({ type: ADD_ADDRESS, payload: resp })
            
        
        



    } catch (error) {

        console.log(error)
        dispatch({ type: SIGN_IN, payload: null})
    }
}
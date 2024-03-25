import { ADD_FAV_RESTAURANT, GET_ALL_RESTAURANT, GET_FAVS_RESTAURANT, GET_ONE_RESTAURANT } from "./restaurantActionType";

export const getAllRestaurantssAction = (token) => async (dispatch) => {
    try {

        const res = await fetch(
            `http://localhost:8080/api/restaurants/all`,

            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                }

            }
        );


        const response = await res.json();

    


        dispatch({ type: GET_ALL_RESTAURANT, payload: response })



    } catch (error) {

        console.log(error)
    }
}

export const getFavsRestaurantssAction = (token) => async (dispatch) => {
    try {

        const res = await fetch(
            `http://localhost:8080/api/users/favs`,

            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + token,
                }

            }
        );


        const response = await res.json();

    


        dispatch({ type: GET_FAVS_RESTAURANT, payload: response })



    } catch (error) {

        console.log(error)
    }
}


export const getOneRestaurantsAction = (data) => async (dispatch) => {
    try {

        const res = await fetch(
            `http://localhost:8080/api/restaurants/id/${data.restaurantId}`,

            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + data.token,
                }

            }
        );


        const response = await res.json();



        dispatch({ type: GET_ONE_RESTAURANT, payload: response })



    } catch (error) {

        console.log(error)
    }
}

export const addToFavAction = (data) => async (dispatch) => {


    try {

        const res = await fetch(
            `http://localhost:8080/api/restaurants/fav/${data.restaurantId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + data.token,

                },
                body: JSON.stringify(data.data)

            }
        );


        const response = await res.json();


    


        dispatch({ type: ADD_FAV_RESTAURANT, payload: response })

        return response.me


    } catch (error) {

        console.log(error)

    }
}




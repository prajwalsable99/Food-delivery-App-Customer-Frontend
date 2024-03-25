import { GET_ALL_CATEGORIES, GET_ALL_FOODS, GET_FOOD_BY_CATEGORY, SEARCH_FOOD } from "./foodActionType";




export const getAllCategoriesAction = (data) => async (dispatch) => {
    try {

        const res = await fetch(
            `http://localhost:8080/api/category/restaurant/${data.restaurantId}`,

            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + data.token,
                }

            }
        );


        const response = await res.json();

    


        dispatch({ type: GET_ALL_CATEGORIES, payload: response })



    } catch (error) {

        console.log(error)
    }
}


export const getFoodByCategory = (data) => async (dispatch) => {
    try {

        const res = await fetch(
            `http://localhost:8080/api/food/restaurant/${data.restaurantId}/food/category/${data.categoryName}`,

            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + data.token,
                }

            }
        );


        const response = await res.json();

    


        dispatch({ type: GET_FOOD_BY_CATEGORY, payload: response })



    } catch (error) {

        console.log(error)
    }
}

export const searchFood = (data) => async (dispatch) => {
    try {

        const res = await fetch(
            `http://localhost:8080/api/food/search?query=${data.query}`,

            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + data.token,
                }

            }
        );


        const response = await res.json();

    


        dispatch({ type: SEARCH_FOOD, payload: response })



    } catch (error) {

        console.log(error)
    }
}

export const getAllFood= (data) => async (dispatch) => {
    try {

        const res = await fetch(
            `http://localhost:8080/api/food/restaurant/all/${data.restaurantId}?isveg=${data.isveg}&isseasonal=${data.isseasonal}&isnonveg=${data.isnonveg}`,

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
    


        dispatch({ type: GET_ALL_FOODS, payload: response })



    } catch (error) {

        console.log(error)
    }
}

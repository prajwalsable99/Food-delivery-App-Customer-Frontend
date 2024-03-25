import { ADD_FAV_RESTAURANT, GET_ALL_RESTAURANT, GET_FAVS_RESTAURANT, GET_ONE_RESTAURANT } from "./restaurantActionType"

const initialValues = {

    restaurantslist: [],
    current_res: null,
    fav:null,
    favorites:[]
  

}

export const restaurantReducer = (store = initialValues, action) => {

    if (action.type === GET_ALL_RESTAURANT) {

        return { ...store, restaurantslist: action.payload }
    } else if (action.type === GET_ONE_RESTAURANT) {

        return { ...store, current_res: action.payload }
    } else if (action.type === ADD_FAV_RESTAURANT) {

        return { ...store, fav: action.payload }
    }else if (action.type===GET_FAVS_RESTAURANT){
        return { ...store, favorites: action.payload }
    }


    return store;

}
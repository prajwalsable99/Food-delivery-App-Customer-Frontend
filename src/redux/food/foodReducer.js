import { GET_ALL_CATEGORIES, GET_ALL_FOODS, GET_FOOD_BY_CATEGORY, SEARCH_FOOD } from "./foodActionType"


const initialValues = {

    foodslist: [],
    categorieslist: [],
    searchfoodlist: [],



}

export const foodReducer = (store = initialValues, action) => {

    if (action.type === GET_ALL_FOODS) {

        return { ...store, foodslist: action.payload }
    } else if (action.type === GET_FOOD_BY_CATEGORY) {

        return { ...store, foodslist: action.payload }

    } else if (action.type === SEARCH_FOOD) {

        return { ...store, searchfoodlist: action.payload }
    } else if (action.type === GET_ALL_CATEGORIES) {
        return { ...store, categorieslist: action.payload }
    }


    return store;

}
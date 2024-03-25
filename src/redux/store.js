import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import { authReducer } from "./auth/authReducer";
import { thunk } from "redux-thunk";
import { restaurantReducer } from "./restaurant/restaurantReducer";
import { foodReducer } from "./food/foodReducer";
import { cartReducer } from "./cart/cartReducer";
import { orderReducer } from "./order/orderReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer=combineReducers(
    {
        auth:authReducer,
        restaurant:restaurantReducer,
        food:foodReducer,
        cart:cartReducer,
        order:orderReducer
    }
)


export const store=legacy_createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
  ))
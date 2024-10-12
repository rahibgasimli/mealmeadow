import { combineReducers, createStore } from "redux";
import { cardListReducer } from "../reducers/cartlist.reducers";
const reducers = combineReducers({
    cartList: cardListReducer,
    // favList:
})
export const globalState = createStore(reducers);
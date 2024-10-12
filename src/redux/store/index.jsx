import { createStore } from "redux";
import { cardListReducer } from "../reducers/cartlist.reducers";

export const globalState = createStore(cardListReducer);
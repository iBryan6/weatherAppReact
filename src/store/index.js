import { createStore, combineReducers } from "redux";
import favoriteReducer from "./reducers/favoriteReducer";

const reducers = combineReducers({
  favoriteReducer
});

const store = createStore(reducers);
 export default store;
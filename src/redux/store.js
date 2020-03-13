import { createStore, combineReducers } from "redux";
import favorites from "./reducers/favorites";

const reducers = combineReducers({
  favorites
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

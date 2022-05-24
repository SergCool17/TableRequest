import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { postsReducer } from "./post-reducer";

let reducers = combineReducers({
  postsData: postsReducer
});

const composeEnchancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  reducers,
  composeEnchancers(applyMiddleware(thunkMiddleware))
);

window.store = store;
export default store;

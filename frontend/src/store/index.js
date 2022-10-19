import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  someAction: () => "a",
});

const middleware = [thunkMiddleware];

const composeEnhancers = compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
  enhancers: composeEnhancers,
});

// createStore(rootReducer, composeEnhancers);

export default store;

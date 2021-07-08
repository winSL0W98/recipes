import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import rootReducer from "./reducers/rootReducer";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : composeWithDevTools;

const configureStore = (preloadedState) =>
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(thunk, routerMiddleware(createBrowserHistory()))
    )
  );

const storeSupport = configureStore({});

export default storeSupport;

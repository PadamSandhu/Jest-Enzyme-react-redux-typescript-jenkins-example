import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import rootReducer from "./store/indexReducers";
// import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
    <Provider store= {store} >
        <App/>
    </Provider>
,
document.getElementById("root")
);

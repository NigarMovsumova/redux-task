import {createStore} from "redux";
import React from "react";
import ReactDOM from "react-dom";
import reducers from "./reducers";
import {Provider} from "react-redux";
import AppComponent from "./components/AppComponent";

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <AppComponent/>
    </Provider>,
    document.querySelector("#root")
);
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {Provider} from "react-redux";
import store from "./Redux/redux-store";
import {HashRouter} from "react-router-dom";


ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();

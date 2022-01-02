import reportWebVitals from './reportWebVitals';
import {newStateType, store} from "./Redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";


export let rerenderEntireTree = (state: newStateType) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

reportWebVitals();



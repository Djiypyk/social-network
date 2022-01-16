import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import {newStateType} from "./Redux/store"
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

store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state)
})

reportWebVitals();



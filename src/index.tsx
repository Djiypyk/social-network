import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {store, ReduxStoreType} from './Redux/redux-store';


export let rerenderEntireTree = (state: ReduxStoreType) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

reportWebVitals();



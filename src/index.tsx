import reportWebVitals from './reportWebVitals';
import {addPost, newStateType, state, updateNewPostText} from "./Redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";


export const rerenderEntireTree = (state: newStateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state)

reportWebVitals();



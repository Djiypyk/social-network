import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {Provider} from "react-redux";
import store from "./Redux/redux-store";


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


//
// export let rerenderEntireTree = (state: ReduxStoreType) => {
//     ReactDOM.render(
//         <Provider store={store}>
//             <App/>
//         </Provider>,
//         document.getElementById('root')
//     );
// }
//
// rerenderEntireTree(store.getState())
//
// store.subscribe(() => rerenderEntireTree(store.getState()))
//
reportWebVitals();
//
//

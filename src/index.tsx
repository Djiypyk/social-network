import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, state} from "./Redux/state";


ReactDOM.render(
    <React.StrictMode>
        <App dialogsPageData={state.dialogPage}
             profilePageData={state.profilePage}
             addPost={addPost}/>
    </React.StrictMode>
    ,
    document.getElementById('root')
);


reportWebVitals();



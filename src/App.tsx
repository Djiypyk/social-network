import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Dialogs from "./components/Dialogs/Dialogs";
import NewsField from "./components/NewsField/NewsField";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";



function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path="/profile" component={(props: any)=> <Profile/>}/>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/newsField" component={NewsField}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>

                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

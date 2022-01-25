import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Navbar, {PATH} from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import NewsField from "./components/NewsField/NewsField";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/Users";


const App: React.FC = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path={PATH.profile} element={<Profile/>}/>
                        <Route path={`${PATH.dialogs}/*`}
                               element={<DialogsContainer />}/>
                        <Route path={PATH.users} element={<Users/>}/>
                        <Route path={PATH.newsField} element={<NewsField/>}/>
                        <Route path={PATH.music} element={<Music/>}/>
                        <Route path={PATH.settings} element={<Settings/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;

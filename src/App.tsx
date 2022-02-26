import React from 'react';

import './App.css';
import Navbar, {PATH} from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NewsField from "./components/NewsField/NewsField";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App: React.FC = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path={`${PATH.profile}/`} element={<ProfileContainer/>}/>
                        <Route path={`${PATH.profile}/:userId`} element={<ProfileContainer/>}/>
                        <Route path={`${PATH.dialogs}/*`}
                               element={<DialogsContainer />}/>
                        <Route path={PATH.users} element={<UsersContainer/>}/>
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

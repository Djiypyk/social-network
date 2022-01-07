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
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {newStateType} from "./Redux/state";

type AppProps = {
    state: newStateType
    dispatch: (action: any) => void
}

const App: React.FC<AppProps> = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile postsData={props.state.profilePage.postsData}
                                                                 newPostText={props.state.profilePage.newPostText}
                                                                 dispatch={props.dispatch}/>}/>
                        <Route path="/dialogs/*"
                               element={<Dialogs dialogsData={props.state.dialogPage.dialogsData}
                                                 messagesData={props.state.dialogPage.messagesData}
                                                 dispatch={props.dispatch}/>}/>
                        <Route path="/" element={<NewsField/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;

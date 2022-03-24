import React from 'react';
import './App.css';
import Navbar, {PATH} from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import NewsField from "./components/NewsField/NewsField";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {AppStateType} from "./Redux/redux-store";
import {compose} from "redux";
import {initializeAppTC} from "./Redux/app-reducer";
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';


class App extends React.Component<propsPostsType> {
    componentDidMount() {
        this.props.initializeAppTC()
    }
    render() {

        if (!this.props.initialized) {
            return <div className="preloader"><CircularProgress/></div>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path={`${PATH.profile}/`} element={<ProfileContainer/>}/>
                        <Route path={`${PATH.profile}/:userId`} element={<ProfileContainer/>}/>
                        <Route path={`${PATH.dialogs}/*`}
                               element={<DialogsContainer/>}/>
                        <Route path={PATH.users} element={<UsersContainer/>}/>
                        <Route path={PATH.login} element={<Login/>}/>
                        <Route path={PATH.newsField} element={<NewsField/>}/>
                        <Route path={PATH.music} element={<Music/>}/>
                        <Route path={PATH.settings} element={<Settings/>}/>
                        <Route path="/404" element={<h1>404: PAGE NOT FOUND</h1>}/>
                        {/*<Route path="*" element={<Navigate to='/404'/>}/>*/}
                    </Routes>
                </div>
                <Footer/>
            </div>

        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    connect<mapStateType, mapDispatchType, ownPropsType, AppStateType>(
        mapStateToProps, {initializeAppTC}))(App)

//Types

type mapStateType = {
    initialized: boolean
}
type mapDispatchType = {
    initializeAppTC: () => void
}
type ownPropsType = {}

type propsPostsType = mapStateType & mapDispatchType & ownPropsType

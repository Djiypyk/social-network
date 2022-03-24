import styles from './Navbar.module.css'
import React from "react";
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {logOutTC} from "../../Redux/auth-reducer";
import {Button} from "@mui/material";
import {AppStateType} from "../../Redux/redux-store";

export const PATH = {
    profile: '/profile',
    dialogs: '/dialogs',
    newsField: '/',
    settings: '/settings',
    users: '/users',
    music: '/music',
    login: '/login'
}

const Navbar: React.FC = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)

    const logOut = () => dispatch(logOutTC())


    return <>
        <nav className={styles.nav}>
            <div><NavLink className={({isActive}) => `${styles.normal} ${isActive ? styles.active : ''}`}
                          to={PATH.profile}>
                Profile</NavLink>
            </div>
            <div><NavLink
                className={({isActive}) => `${styles.normal} ${isActive ? styles.active : ''}`}
                to={PATH.dialogs}>Messages</NavLink></div>
            <div><NavLink
                className={({isActive}) => `${styles.normal} ${isActive ? styles.active : ''}`}
                to={PATH.users}>Users</NavLink></div>
            <div><NavLink
                className={({isActive}) => `${styles.normal} ${isActive ? styles.active : ''}`}
                to={PATH.newsField}>News Field</NavLink></div>
            <div><NavLink
                className={({isActive}) => `${styles.normal} ${isActive ? styles.active : ''}`}
                to={PATH.settings}>Settings</NavLink></div>
            <div><NavLink
                className={({isActive}) => `${styles.normal} ${isActive ? styles.active : ''}`}
                to={PATH.music}>Music</NavLink></div>
            {!isAuth ? null : <Button color={'secondary'} variant={'contained'}
                                     onClick={logOut}>Log Out</Button>}
        </nav>

    </>
}


export default Navbar;
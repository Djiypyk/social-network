import styles from './Navbar.module.css'
import React from "react";
import {NavLink} from 'react-router-dom';

export const PATH = {
    profile: '/profile',
    dialogs: '/dialogs',
    newsField: '/',
    settings: '/settings',
    users: '/users',
    music: '/music'
}

const Navbar: React.FC = () => {


    return (
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

        </nav>
    )
}


export default Navbar;
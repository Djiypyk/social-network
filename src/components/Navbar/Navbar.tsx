import styles from './Navbar.module.css'
import React from "react";
import {NavLink} from 'react-router-dom';


const Navbar: React.FC = () => {


    return (
        <nav className={styles.nav}>

            <div><NavLink className={({isActive}) => `${styles.normal} ${isActive ? styles.active : ''}`}
                          to="/profile">
                Profile</NavLink>
            </div>
            <div><NavLink
                className={({isActive}) => `${styles.normal} ${isActive ? styles.active : ''}`}
                to="/dialogs">Messages</NavLink></div>
            <div><NavLink
                className={({isActive}) => `${styles.normal} ${isActive ? styles.active : ''}`}
                to="/">News Field</NavLink></div>
            <div><NavLink
                className={({isActive}) => `${styles.normal} ${isActive ? styles.active : ''}`}
                to="settings">Settings</NavLink></div>
            <div><NavLink
                className={({isActive}) => `${styles.normal} ${isActive ? styles.active : ''}`}
                to="music">Music</NavLink></div>

        </nav>
    )
}


export default Navbar;
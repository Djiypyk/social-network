import styles from './Navbar.module.css'
import React from "react";
import {NavLink} from 'react-router-dom';
import { useLocation } from 'react-router';


const Navbar: React.FC = (props: any) => {

    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <nav className={styles.nav}>

            <div><NavLink
                className={splitLocation[1] === 'profile' ? styles.active : styles.nav_list}
                to="/profile">Profile</NavLink></div>
            <div><NavLink className={splitLocation[1] === 'messages' ? styles.active : styles.nav_list} to="/messages">Messages</NavLink></div>
            <div><NavLink className={splitLocation[1] === 'newsField' ? styles.active : styles.nav_list} to="/newsField">News Field</NavLink></div>
            <div><NavLink className={splitLocation[1] === 'settings' ? styles.active : styles.nav_list} to="settings">Settings</NavLink></div>
            <div><NavLink className={splitLocation[1] === 'music' ? styles.active : styles.nav_list} to="music">Music</NavLink></div>

        </nav>
    )
}

export default Navbar;
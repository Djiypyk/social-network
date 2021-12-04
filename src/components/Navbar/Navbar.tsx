import styles from './Navbar.module.css'
import React from "react";
import {NavLink} from 'react-router-dom';
import {useLocation} from 'react-router';


const Navbar: React.FC = () => {

    const activeStyle: any = {
        textDecoration: 'none',
        color: 'honeydew'
    }



    return (
        <nav className={styles.nav}>

            <div><NavLink style={({isActive}) => isActive ? activeStyle : undefined}
                          className={styles.nav_list}
                          to="/profile">
                Profile</NavLink>
            </div>
            <div><NavLink style={({isActive}) => isActive ? activeStyle : undefined}
                          className={styles.nav_list}
                          to="/dialogs">Messages</NavLink></div>
            <div><NavLink style={({isActive}) => isActive ? activeStyle : undefined}
                          className={styles.nav_list}
                          to="/newsField">News Field</NavLink></div>
            <div><NavLink style={({isActive}) => isActive ? activeStyle : undefined}
                          className={styles.nav_list}
                          to="settings">Settings</NavLink></div>
            <div><NavLink style={({isActive}) => isActive ? activeStyle : undefined}
                          className={styles.nav_list}
                          to="music">Music</NavLink></div>

        </nav>
    )
}

export default Navbar;
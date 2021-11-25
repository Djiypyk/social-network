import styles from './Navbar.module.css'
import React from "react";

const Navbar: React.FC = (props: any) => {
    return (
        <nav className={styles.nav}>
            <div><a className={styles.nav_list} href="/profile">Profile</a></div>
            <div><a className={styles.nav_list} href="/messages">Messages</a></div>
            <div><a className={styles.nav_list} href="/newsField">News Field</a></div>
            <div><a className={styles.nav_list} href="settings">Settings</a></div>
            <div><a className={styles.nav_list} href="music">Music</a></div>

        </nav>
    )
}

export default Navbar;
import React from "react";
import styles from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props: any) => {

    const activeStyle: any = {
        textDecoration: 'none',
        color: 'rgb(119, 85, 0)'
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/1"
                             style={({isActive}) => isActive ? activeStyle : undefined}
                    >Name 1</NavLink></div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/2' style={({isActive}) => isActive ? activeStyle : undefined}
                    >Name 2</NavLink></div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/3'
                             style={({isActive}) => isActive ? activeStyle : undefined}
                    >Name 3</NavLink></div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/4'
                             style={({isActive}) => isActive ? activeStyle : undefined}
                    >Name 4</NavLink></div>
                <div className={styles.dialog}>
                    <NavLink to='/dialogs/5'
                             style={({isActive}) => isActive ? activeStyle : undefined}
                    >Name 5</NavLink></div>
            </div>
            <div className={styles.messages}>
                <div className={styles.message_input}>
                    <textarea placeholder="Write your message"/>
                    <button className={styles.add_button}> Send message</button>
                </div>
            </div>


        </div>
    )
}


export default Dialogs;
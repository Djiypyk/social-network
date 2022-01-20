import React from "react";
import styles from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import {DialogsDataType} from "../../../Redux/redux-store";



const DialogItem: React.FC<DialogsDataType> = (props) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={styles.dialog}>
            <NavLink to={path}
                     className={({isActive})=> `${styles.normal} ${isActive ? styles.active :''}`}
            >{props.name}</NavLink>
        </div>

    )

}

export default DialogItem;
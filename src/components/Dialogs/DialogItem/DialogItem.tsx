import React from "react";
import styles from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../Redux/dialogs-reducer";




const DialogItem: React.FC<DialogType> = (props) => {
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
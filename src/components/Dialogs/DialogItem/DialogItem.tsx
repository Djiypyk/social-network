import React from "react";
import styles from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import {DialogsDataType} from "../../../index";

const activeStyle: any = {
    textDecoration: 'none',
    color: 'rgb(119, 85, 0)'
}

// type DialogItemTypeProps = {
//     name: string,
//     key: number
// }

const DialogItem: React.FC<DialogsDataType> = (props) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={styles.dialog}>
            <NavLink to={path}
                     style={({isActive}) => isActive ? activeStyle : undefined}
            >{props.name}</NavLink>
        </div>

    )

}

export default DialogItem;
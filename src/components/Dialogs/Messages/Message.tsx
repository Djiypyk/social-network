import React from "react";
import styles from '../Dialogs.module.css'
import {MessagesDataType} from "../../../Redux/dialogs-reducer";

const Message: React.FC<MessagesDataType> = (props) => {
    return <div className={styles.message}>{props.message}</div>;
};

export default Message;

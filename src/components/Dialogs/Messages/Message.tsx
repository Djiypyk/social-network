import React from "react";
import styles from '../Dialogs.module.css'

type MessageTypeProps = {
    message: string
}

const Message: React.FC<MessageTypeProps> = (props) => {
    return <div className={styles.message}>{props.message}</div>;
};

export default Message;

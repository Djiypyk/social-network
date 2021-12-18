import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {DialogPageType} from "../../index";


const Dialogs: React.FC<DialogPageType> = (props) => {


    const dialogsElements = props.dialogsData
        .map((d) => <DialogItem id={d.id} name={d.name}/>)

    const messagesElements = props.messagesData
        .map((m) => <Message id={m.id} message={m.message}/>)

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}

                <div className={styles.message_input}>
                    <textarea placeholder="Write your message"/>
                    <button className={styles.add_button}> Send message</button>
                </div>
            </div>


        </div>
    )
}


export default Dialogs;
import React, {ChangeEvent} from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {ReduxStoreType} from "../../Redux/redux-store";


type DialogsPagePropsType = {
    state: ReduxStoreType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}


const Dialogs: React.FC<DialogsPagePropsType> = (props) => {

    const dialogsElements = props.state.dialogsPage.dialogsData
        .map((d) => <DialogItem id={d.id} name={d.name}/>)

    const messagesElements = props.state.dialogsPage.messagesData
        .map((m) => <Message id={m.id} message={m.message}/>)

    const newMessageBody = props.state.dialogsPage.newMessageText

    const onSendMessage = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            let body = e.currentTarget.value
            props.updateNewMessageBody(body)
        }
    }
    const onKeyDownSendMessage = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            props.sendMessage()
        }
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}

                <div className={styles.message_input}>
                    <textarea value={newMessageBody} onKeyPress={onKeyDownSendMessage} onChange={onNewMessageChange}
                              placeholder="Write your message"/>
                    <button className={styles.add_button} onClick={onSendMessage}> Send message</button>
                </div>
            </div>


        </div>
    )
}


export default Dialogs;
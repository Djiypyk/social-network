import React, {ChangeEvent} from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {
    DialogsDataType,
    MessagesDataType,
} from "../../Redux/redux-store";
import {sendMessageCreator, updateNewMessageCreator} from "../../Redux/dialogs-reducer";


type DialogsPagePropsType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
    dispatch: (action: any) => void
    newMessageText: string
}


const Dialogs: React.FC<DialogsPagePropsType> = (props) => {

    const dialogsElements = props.dialogsData
        .map((d) => <DialogItem id={d.id} name={d.name}/>)

    const messagesElements = props.messagesData
        .map((m) => <Message id={m.id} message={m.message}/>)

    const newMessageBody = props.newMessageText

    const onSendMessage = () => {
        props.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            let body = e.currentTarget.value
            props.dispatch(updateNewMessageCreator(body))
        }
    }
    const onKeyDownSendMessage = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            props.dispatch(sendMessageCreator())
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
                    <textarea value={newMessageBody} onKeyPress={onKeyDownSendMessage} onChange={onNewMessageChange} placeholder="Write your message"/>
                    <button className={styles.add_button} onClick={onSendMessage}> Send message</button>
                </div>
            </div>


        </div>
    )
}


export default Dialogs;
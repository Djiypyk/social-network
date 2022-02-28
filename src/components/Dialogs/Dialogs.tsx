import React, {ChangeEvent} from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {DialogPageType} from "../../Redux/redux-store";
import {PATH} from "../Navbar/Navbar";
import {Navigate} from "react-router-dom";


type DialogsPagePropsType = {
    dialogs: DialogPageType
    textBody: string
    sendMessageAC: ()=>void
    onChangeMessageAC: (text:string)=>void
    isAuth: boolean
}

const Dialogs: React.FC<DialogsPagePropsType> = (props) => {

    const dialogsElements = props.dialogs.dialogsData
        .map((d) => <DialogItem key={d.id} id={d.id} name={d.name}/>)

    const messagesElements = props.dialogs.messagesData
        .map((m) => <Message key={m.id} id={m.id} message={m.message}/>)

    const newMessageBody = props.textBody

    const onSendMessage = () => {
        props.sendMessageAC()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            let body = e.currentTarget.value
            props.onChangeMessageAC(body)
        }
    }
    const onKeyDownSendMessage = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            props.sendMessageAC()
        }
    }
     if (!props.isAuth) return <Navigate to={PATH.login} />
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
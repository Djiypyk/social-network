import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {DialogPageType} from "../../Redux/redux-store";
import {AddMessageForm} from "./AddMessageForm/AddMessageForm1111";


type DialogsPagePropsType = {
    dialogs: DialogPageType
    textBody: string
    sendMessageAC: (text:string) => void
    isAuth: boolean
}

const Dialogs: React.FC<DialogsPagePropsType> = (props) => {

    const dialogsElements = props.dialogs.dialogsData
        .map((d) => <DialogItem key={d.id} id={d.id} name={d.name}/>)

    const messagesElements = props.dialogs.messagesData
        .map((m) => <Message key={m.id} id={m.id} message={m.message}/>)


    // if (!props.isAuth) return <Navigate to={PATH.login}/>
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <AddMessageForm textBody={props.textBody} sendMessageAC={props.sendMessageAC}/>
            </div>


        </div>
    )
}

export default Dialogs;
import React from "react";
import styles from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import {DialogPageType} from "../../Redux/redux-store";
import {AddMessageForm} from "./AddMessageForm/AddItemForm";


type DialogsPagePropsType = {
    dialogs: DialogPageType
    textBody: string
    sendMessageAC: () => void
    onChangeMessageAC: (text: string) => void
    isAuth: boolean
}

const Dialogs: React.FC<DialogsPagePropsType> = (props) => {

    const dialogsElements = props.dialogs.dialogsData
        .map((d) => <DialogItem key={d.id} id={d.id} name={d.name}/>)

    const messagesElements = props.dialogs.messagesData
        .map((m) => <Message key={m.id} id={m.id} message={m.message}/>)


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messagesElements}
                <AddMessageForm textBody={props.textBody} sendMessageAC={props.sendMessageAC}
                                onChangeMessageAC={props.onChangeMessageAC}/>
            </div>


        </div>
    )
}

export default Dialogs;
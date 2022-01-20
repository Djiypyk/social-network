import React from "react";
import {sendMessageCreator, updateNewMessageCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {ReduxStoreType} from "../../Redux/redux-store";


type DialogsPagePropsType = {
    state: ReduxStoreType
    dispatch: (action: any) => void
}


const DialogsContainer: React.FC<DialogsPagePropsType> = (props) => {

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (body: string) => {
        props.dispatch(updateNewMessageCreator(body))
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    state={props.state}/>
}


export default DialogsContainer;
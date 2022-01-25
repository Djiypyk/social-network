import React from "react";
import {onChangeMessageAC, sendMessageAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStateType, DialogPageType,} from "../../Redux/redux-store";
import {connect} from "react-redux";


type mapStateType = {
    dialogs: DialogPageType
    textBody: string
}

type mapDispatchType = {
    onChangeMessageAC: (body: string) => void
    sendMessageAC: () => void
}
type ownPropsType = {}


const mapStateToProps = (state: AppStateType) => ({
    dialogs: state.dialogsPage,
    textBody: state.dialogsPage.newMessageText
})


const DialogsContainer = connect<mapStateType, mapDispatchType, ownPropsType, AppStateType>(
    mapStateToProps,
    {
        onChangeMessageAC,
        sendMessageAC
    })(Dialogs)

export default DialogsContainer;
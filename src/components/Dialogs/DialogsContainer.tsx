import React from "react";
import {sendMessageAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStateType, DialogPageType,} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


type mapStateType = {
    dialogs: DialogPageType
}

type mapDispatchType = {
    sendMessageAC: (text: string) => void
}
type ownPropsType = {}


const mapStateToProps = (state: AppStateType) => ({
    dialogs: state.dialogsPage,
})
const DialogsContainer = compose<React.ComponentType>(
    connect<mapStateType, mapDispatchType, ownPropsType, AppStateType>(
        mapStateToProps,
        {
            sendMessageAC
        }),
    WithAuthRedirect
)(Dialogs)

export default DialogsContainer;
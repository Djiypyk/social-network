import {onChangeMessageAC, sendMessageAC} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {AppStateType, DialogPageType,} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {PATH} from "../Navbar/Navbar";
import React from "react";


type mapStateType = {
    dialogs: DialogPageType
    textBody: string
    isAuth: boolean
}

type mapDispatchType = {
    onChangeMessageAC: (body: string) => void
    sendMessageAC: () => void
}
type ownPropsType = {}


const mapStateToProps = (state: AppStateType) => ({
    dialogs: state.dialogsPage,
    textBody: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth
})
const AuthRedirectComponent = (props: any) => {
    if (props.isAuth) return <Navigate to={PATH.login} />
    return <Dialogs {...props}/>
}

const DialogsContainer = connect<mapStateType, mapDispatchType, ownPropsType, AppStateType>(
    mapStateToProps,
    {
        onChangeMessageAC,
        sendMessageAC
    })(AuthRedirectComponent)

export default DialogsContainer;
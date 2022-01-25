import {DialogPageType,} from "./redux-store";
import {v1} from "uuid";


const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

type DialogsType = {
    id: string
    name: string
}
type MessagesDataType = {
    id: string
    message: string
}


const initialState = {
    dialogsData: [
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Glen'},
        {id: v1(), name: 'Yana'},
        {id: v1(), name: 'Gloria'},
        {id: v1(), name: 'Nikolai'},
    ] as Array<DialogsType>,
    messagesData: [
        {id: v1(), message: 'Hello, it`s me.'},
        {id: v1(), message: 'Hello!'},
        {id: v1(), message: 'All you ready?'}
    ] as Array<MessagesDataType>,
    newMessageText: ' '
}

export type initialStateType = typeof initialState
type onChangeMessageActionType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    body: string
}
type sendMessageActionType = {
    type: typeof SEND_MESSAGE
}
type actionType = sendMessageActionType | onChangeMessageActionType

export const dialogsReducer = (state: DialogPageType = initialState, action: actionType): initialStateType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {...state, messagesData: [...state.messagesData], newMessageText: action.body}
        }
        case SEND_MESSAGE: {
            let messageText = state.newMessageText
            return {
                ...state,
                newMessageText: ' ',
                messagesData: [...state.messagesData, {id: v1(), message: messageText}]
            }


        }
        default:
            return state
    }
}
export const sendMessageAC = (): sendMessageActionType => {
    return {type: SEND_MESSAGE}
}

export const onChangeMessageAC = (body: string): onChangeMessageActionType => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, body: body}
}
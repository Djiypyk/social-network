import {v1} from "uuid";
import {DialogPageType} from "./redux-store";

const SEND_MESSAGE = 'SEND-MESSAGE'

export type DialogType = {
    id: string
    name: string
}
export type MessagesDataType = {
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
    ] as Array<DialogType>,
    messagesData: [
        {id: v1(), message: 'Hello, it`s me.'},
        {id: v1(), message: 'Hello!'},
        {id: v1(), message: 'All you ready?'}
    ] as Array<MessagesDataType>,

}

export type initialStateType = typeof initialState
type sendMessageActionType = {
    type: typeof SEND_MESSAGE
    text: string
}
type actionType = sendMessageActionType

export const dialogsReducer = (state: DialogPageType = initialState, action: actionType): initialStateType => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let messageText = action.text
            return {
                ...state,
                messagesData: [...state.messagesData, {id: v1(), message: messageText}]
            }
        }
        default:
            return state
    }
}
export const sendMessageAC = (text:string): sendMessageActionType => {
    return {type: SEND_MESSAGE, text}
}

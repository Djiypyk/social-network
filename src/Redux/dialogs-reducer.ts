import {v1} from "uuid";
import {DialogPageType} from "./redux-store";

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

export const dialogsReducer = (state: DialogPageType = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case 'dialogs/SEND-MESSAGE': {
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
export const sendMessageAC = (text: string) => {
    return {type: 'dialogs/SEND-MESSAGE', text} as const
}

//Types

export type initialStateType = typeof initialState
type sendMessageActionType = ReturnType<typeof sendMessageAC>
type actionType = sendMessageActionType
export type DialogType = {
    id: string
    name: string
}
export type MessagesDataType = {
    id: string
    message: string
}

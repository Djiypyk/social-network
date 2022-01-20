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
        {id: v1(), name: 'Nikolai'}
    ] as Array<DialogsType>,
    messagesData: [
        {id: v1(), message: 'Hello, it`s me.'},
        {id: v1(), message: 'Hello!'},
        {id: v1(), message: 'All you ready?'}
    ] as Array<MessagesDataType>,
    newMessageText: ' '
}

export type initialStateType = typeof initialState

type actionType = {
    type: typeof SEND_MESSAGE | typeof UPDATE_NEW_MESSAGE_TEXT
    body: string
}


export const dialogsReducer = (state: DialogPageType = initialState, action: actionType): initialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageText
            state.messagesData.push({id: v1(), message: body})
            state.newMessageText = ' '
            return state
        default:
            return state
    }
}
export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE}
}
export const updateNewMessageCreator = (body: string) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, body: body}
}
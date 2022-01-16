import {DialogPageType,} from "./store";
import {v1} from "uuid";


const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
    dialogsData: [
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Glen'},
        {id: v1(), name: 'Yana'},
        {id: v1(), name: 'Gloria'},
        {id: v1(), name: 'Nikolai'}
    ],
    messagesData: [
        {id: v1(), message: 'Hello, it`s me.'},
        {id: v1(), message: 'Hello!'},
        {id: v1(), message: 'All you ready?'}
    ],
    newMessageText: ' '
}

export const dialogsReducer = (state: DialogPageType = initialState, action: any) => {
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
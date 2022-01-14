import {DialogPageType,} from "./state";
import {v1} from "uuid";


const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const dialogsReducer = (state: DialogPageType, action: any) => {
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
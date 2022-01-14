import {DialogPageType,} from "./state";
import {v1} from "uuid";


const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

export const dialogsReducer = (state: DialogPageType, action: any) => {
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.body

    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageText
        state.messagesData.push({id: v1(), message: body})
        state.newMessageText = ' '

    }
    return state
}
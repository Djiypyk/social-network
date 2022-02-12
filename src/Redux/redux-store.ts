import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer, DialogType, MessagesDataType} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";


export type DialogPageType = {
    dialogsData: DialogType[]
    messagesData: MessagesDataType[]
    newMessageText: string
}



type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
})

let store = createStore(rootReducer)
export default store
//@ts-ignore
window.store = store



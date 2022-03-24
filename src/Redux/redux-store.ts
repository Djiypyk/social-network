import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer, DialogType, MessagesDataType} from "./dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";







let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))
export default store
//@ts-ignore
window.store = store


type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export type DialogPageType = {
    dialogsData: DialogType[]
    messagesData: MessagesDataType[]
}
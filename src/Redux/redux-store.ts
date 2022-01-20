import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export type PostItemType = {
    id: string
    message: string
    likesCounts: number

}

export type PostsType = {
    postsData: PostItemType[]
    newPostText: string

}

export type DialogsDataType = {
    id: string
    name: string
}
export type MessagesDataType = {
    id: string
    message: string
}

export type DialogPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
    newMessageText: string
}
type newStoreType = {
    profilePage: PostsType
    dialogsPage: DialogPageType
}


export type ReduxStoreType =
    {
        profilePage: PostsType
        dialogsPage: DialogPageType
        subscribe: (observer: any) => void
        dispatch: (action: any) => void
        getState: () => ReduxStoreType
    }

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export let store: ReduxStoreType = createStore(reducers)
//@ts-ignore
window.store = store


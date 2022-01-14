import {v1} from "uuid"
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


export type newStateType = {
    profilePage: PostsType
    dialogPage: DialogPageType
}

export type StoreType = {
    _state: newStateType
    getState: () => newStateType
    _callSubscriber: (state: newStateType) => void
    subscribe: (observer: any) => void
    dispatch: (action: any) => void

}

export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: v1(), message: 'Hi. How are you?', likesCounts: 15},
                {id: v1(), message: 'Hi, there.', likesCounts: 17},
                {id: v1(), message: 'Wow,  it`s my first post.', likesCounts: 12}
            ],
            newPostText: ' '
        },
        dialogPage: {
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

    },
    getState() {
        return this._state
    },

    _callSubscriber(state: newStateType) {
        console.log('')
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)

        this._callSubscriber(this._state)
       },
}



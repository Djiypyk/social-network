import {v1} from "uuid"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'

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
        if (action.type === ADD_POST) {
            const newPost: PostItemType = {
                id: v1(), message: this._state.profilePage.newPostText, likesCounts: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogPage.newMessageText = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogPage.newMessageText
            this._state.dialogPage.messagesData.push({id: v1(), message: body})
            this._state.dialogPage.newMessageText = ' '
            this._callSubscriber(this._state)

        }
    },
}
export const addPostActionCreator = () => {

    return {type: ADD_POST}
}
export const onPostChangeActionCreator = (text: string) => {

    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE}
}
export const updateNewMessageCreator = (body: string) => {

    return {type: UPDATE_NEW_MESSAGE_TEXT, body: body}
}

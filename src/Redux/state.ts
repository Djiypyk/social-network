import {v1} from "uuid"

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
}


export type newStateType = {
    profilePage: PostsType
    dialogPage: DialogPageType

}

export type StoreType = {
    _state: newStateType
    getState: () => newStateType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    rerenderEntireTree: (state: newStateType) => void
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
            ]
        }

    },
    getState() {
        return this._state
    },
    // addPost() {
    //     const newPost: PostItemType = {
    //         id: v1(), message: this._state.profilePage.newPostText, likesCounts: 0
    //     }
    //     this._state.profilePage.postsData.push(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this.rerenderEntireTree(this._state)
    // },
    // updateNewPostText(newText: string) {
    //     this._state.profilePage.newPostText = newText
    //     this.rerenderEntireTree(this._state)
    // },
    rerenderEntireTree(state: newStateType) {
        console.log('')
    },
    subscribe(observer: any) {
        this.rerenderEntireTree = observer
    },
    dispatch(action) {
        if(action.type === 'ADD-POST'){
            const newPost: PostItemType = {
                id: v1(), message: this._state.profilePage.newPostText, likesCounts: 0
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.newPostText = ''
            this.rerenderEntireTree(this._state)

        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText
            this.rerenderEntireTree(this._state)
        }
    },
}

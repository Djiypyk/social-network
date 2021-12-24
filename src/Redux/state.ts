import { v1 } from "uuid"

export type PostItemType = {
    id: string
    message: string
    likesCounts: number


}
export type PostsType = {
    postsData: PostItemType[]
    addPost: (message: string | undefined) => void
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

export type StateType = {
    profilePageData: PostsType
    dialogsPageData: DialogPageType



}

export const state =
    {
        profilePage: {
            postsData: [
                {id: v1(), message: 'Hi. How are you?', likesCounts: 15},
                {id: v1(), message: 'Hi, there.', likesCounts: 17},
                {id: v1(), message: 'Wow,  it`s my first post.', likesCounts: 12}
            ],
        },
        dialogPage: {
            dialogsData: [
                {name: 'Alex', id: v1()},
                {name: 'Glen', id: v1()},
                {name: 'Yana', id: v1()},
                {name: 'Gloria', id: v1()},
                {name: 'Nikolai', id: v1()}
            ],
            messagesData: [
                {id: v1(), message: 'Hello, it`s me.'},
                {id: v1(), message: 'Hello!'},
                {id: v1(), message: 'All you ready?'}
            ]
        },
        sidebar: {}
    }

// export type AddBtnPost = { addPost: (message: string | undefined) => void }

export const addPost = (message: string | '') => {
    const newPost: PostItemType = {
        id: v1(), message: message, likesCounts: 0
    }
    state.profilePage.postsData.push(newPost)
}
import {v1} from "uuid"
import {rerenderEntireTree} from "../index";

export type PostItemType = {
    id: string
    message: string
    likesCounts: number


}

export type PostsType = {
    postsData: PostItemType[]

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

export const state: newStateType =
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
        }
    }


export const addPost = (message: string) => {
    const newPost: PostItemType = {
        id: v1(), message: message, likesCounts: 0
    }
    state.profilePage.postsData.push(newPost)
    rerenderEntireTree(state)
}

const rerenderEntireTree = () => {
    console.log('')
}

const subscriber = (something) => {
    rerenderEntireTree = something
}
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const state =
    {
        postsData: [
            {id: 1, message: 'Hi. How are you?', likesCounts: 15},
            {id: 2, message: 'Hi, there.', likesCounts: 17},
            {id: 2, message: 'Wow,  it`s my first post.', likesCounts: 12}
        ],
        dialogPage: {
            dialogsData: [
                {name: 'Alex', id: 1},
                {name: 'Glen', id: 2},
                {name: 'Yana', id: 3},
                {name: 'Gloria', id: 4},
                {name: 'Nikolai', id: 5}
            ],
            messagesData: [
                {id: 1, message: 'Hello, it`s me.'},
                {id: 2, message: 'Hello!'},
                {id: 3, message: 'All you ready?'}
            ]
        }
    }

export type PostsItemsType = {
    id: number
    message: string
    likesCounts: number
}
export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}

export type PostsType = {
    postsData: PostsItemsType[]
}
export type DialogPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}


export type StateType = {
    postsData: PostsType
    dialogsData: DialogPageType

}


ReactDOM.render(
    <React.StrictMode>
        <App dialogsData={state.dialogPage}
             messagesData={state.dialogPage}
             postsData={state.postsData}/>
    </React.StrictMode>
    ,
    document.getElementById('root')
);


reportWebVitals();


// export type PostItemType = {
//     id: number
//     message: string
//     likesCounts: number
// }
//
// export type MessageItemType = {
//     id: number
//     message: string
// }
//
// export type DialogItemType = {
//     id: number
//     name: string
// }
//
//
// export type PostsDataType = {
//     postsData: Array<PostItemType>
// }
//
// export type MessagesDataType = {
//     messagesData: Array<MessageItemType>
// }
// export type DialogsDataType = {
//     dialogsData: Array<DialogItemType>
// }
//
// export type DataType = {
//
//     postsData?: PostsDataType
//     dialogsData?: DialogsDataType
//     messagesData?: MessagesDataType
//
// }
//
// const postsData = [
//     {id: 1, message: 'Hi. How are you?', likesCounts: 15},
//     {id: 2, message: 'Hi, there.', likesCounts: 17},
//     {id: 2, message: 'Wow,  it`s my first post.', likesCounts: 12}
// ]
//
// const dialogsData = [
//     {name: 'Alex', id: 1},
//     {name: 'Glen', id: 2},
//     {name: 'Yana', id: 3},
//     {name: 'Gloria', id: 4},
//     {name: 'Nikolai', id: 5}
// ]
//
//
// const messagesData = [
//     {id: 1, message: 'Hello, it`s me.'},
//     {id: 2, message: 'Hello!'},
//     {id: 3, message: 'All you ready?'}
// ]


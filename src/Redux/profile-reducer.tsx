import {PostItemType, PostsType} from "./redux-store";
import {v1} from "uuid";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


const initialState = {
    postsData: [
        {id: v1(), message: 'Hi. How are you?', likesCounts: 15},
        {id: v1(), message: 'Hi, there.', likesCounts: 17},
        {id: v1(), message: 'Wow,  it`s my first post.', likesCounts: 12}
    ],
    newPostText: ' '
}

export type initialStateProfileType = typeof initialState


type profileActionType = addPostACType | onPostChangeACType

export const profileReducer = (state: PostsType = initialState, action: profileActionType): initialStateProfileType => {
    const stateCopy = {...state, postsData: [...state.postsData]}

    switch (action.type) {
        case ADD_POST:
            const newPost: PostItemType = {
                id: v1(), message: state.newPostText, likesCounts: 0
            }
            stateCopy.postsData.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newText
            return stateCopy
        default:
            return state
    }
}

type addPostACType = {
    type: typeof ADD_POST
}

type onPostChangeACType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

export const addPostAC = (): addPostACType => {
    return {type: ADD_POST}
}
export const onPostChangeAC = (text: string): onPostChangeACType => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

import {PostItemType, PostsType} from "./state";
import {v1} from "uuid";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const profileReducer = (state: PostsType, action: any) => {

    switch (action.type) {
        case ADD_POST:
            const newPost: PostItemType = {
                id: v1(), message: state.newPostText, likesCounts: 0
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const onPostChangeActionCreator = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

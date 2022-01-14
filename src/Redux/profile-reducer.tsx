import {PostItemType, PostsType} from "./state";
import {v1} from "uuid";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const profileReducer = (state:PostsType, action:any) => {

    if (action.type === ADD_POST) {
        const newPost: PostItemType = {
            id: v1(), message: state.newPostText, likesCounts: 0
        }
        state.postsData.push(newPost)
        state.newPostText = ''

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText

    }
    return state
}
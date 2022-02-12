import {v1} from "uuid";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

export type PostType = {
    id: string
    message: string
    likesCounts: number

}
export type InitialStateProfileType = {
    postsData: PostType[]
    newPostText: string
    profile: ProfileType

}
type addPostAT = {
    type: typeof ADD_POST
}

type onPostChangeAT = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}


export type PhotoType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    aboutMe: string | null
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    userId: number | null
    photos?: PhotoType
}
type UserProfileAT = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

const initialState = {
    postsData: [
        {id: v1(), message: 'Hi. How are you?', likesCounts: 15},
        {id: v1(), message: 'Hi, there.', likesCounts: 17},
        {id: v1(), message: 'Wow,  it`s my first post.', likesCounts: 12}
    ],
    newPostText: ' ',
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null,
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: null,
        userId: 2,
        photos: {
            small: null,
            large: null,
        }
    },
}

type profileActionType = addPostAT | onPostChangeAT | UserProfileAT

export const profileReducer = (state: InitialStateProfileType = initialState, action: profileActionType): InitialStateProfileType => {


    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: v1(), message: state.newPostText, likesCounts: 0
            }
            return {...state, newPostText: '', postsData: [newPost, ...state.postsData]}
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: {...action.profile}}
        }
        default:
            return state
    }
}


export const addPostAC = (): addPostAT => {
    return {type: ADD_POST}
}
export const onPostChangeAC = (text: string): onPostChangeAT => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}
export const setUserProfileAC = (profile: ProfileType): UserProfileAT => {
    return {type: SET_USER_PROFILE, profile}
}

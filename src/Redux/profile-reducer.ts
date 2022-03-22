import {v1} from "uuid";
import {Dispatch} from "react";
import {profileAPI} from "../api/profileAPI";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'

export type PostType = {
    id: string
    message: string
    likesCounts: number
}

export type InitialStateProfileType = {
    postsData: PostType[]
    profile: ProfileType
    status: string

}
type addPostAT = {
    type: typeof ADD_POST
    message:string
}

type UserProfileAT = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

type UserStatusAT = {
    type: typeof SET_STATUS
    status: string
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


const initialState = {
    postsData: [
        {id: v1(), message: 'Hi. How are you? I wish you nice day!', likesCounts: 15},
        {id: v1(), message: 'Hi, there.', likesCounts: 17},
        {id: v1(), message: 'Wow,  it`s my first post.', likesCounts: 12}
    ],
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: 'https://vk.com/hoziain4eloveka',
            twitter: null,
            instagram: 'https://www.instagram.com/zarezako.nick/',
            youtube: null,
            github: 'https://github.com/Djiypyk',
            mainLink: null,
        },
        lookingForAJob: true,
        lookingForAJobDescription: 'Frontend Developer',
        fullName: 'Nikolai Zarazaka',
        userId: 16125,
        photos: {
            small: null,
            large: null,
        },

    },
    status: ''

}

type profileActionType = addPostAT |  UserProfileAT | UserStatusAT

export const profileReducer = (state: InitialStateProfileType = initialState, action: profileActionType): InitialStateProfileType => {


    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: v1(), message: action.message, likesCounts: 0
            }
            return {...state, postsData: [newPost, ...state.postsData]}
        }
        case SET_USER_PROFILE: {
            return {...state, profile: {...action.profile}}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}


export const addPostAC = (message:string): addPostAT => {
    return {type: ADD_POST, message}
}
export const setUserProfileAC = (profile: ProfileType): UserProfileAT => {
    return {type: SET_USER_PROFILE, profile}
}
export const setUserStatus = (status: string): UserStatusAT => {
    return {type: SET_STATUS, status}
}

export const getUserStatusTC = (userId: string | number) => (dispatch: Dispatch<profileActionType>) => {
    profileAPI.getUserStatus(userId).then(res => {
        dispatch(setUserStatus(res.data))
    })
}

export const updateUserStatusTC = (status: string) => (dispatch: Dispatch<profileActionType>) => {
    profileAPI.updateUserStatus(status).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    })
}

export const getUserProfileTC = (userId: number | string) => (dispatch: Dispatch<profileActionType>) => {
    profileAPI.getProfile(userId)
        .then(res => {
            dispatch(setUserProfileAC(res.data))
        })
}

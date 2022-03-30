import {v1} from "uuid";
import {Dispatch} from "react";
import {profileAPI} from "../api/profileAPI";

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
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null,
        },
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 16125,
        photos: {
            small: ' ',
            large: ' ',
        },

    },
    status: ''
}

export const profileReducer = (state: InitialStateProfileType = initialState, action: profileActionType): InitialStateProfileType => {
    switch (action.type) {
        case 'ADD-POST': {
            const newPost = {
                id: v1(), message: action.message, likesCounts: 0
            }
            return {...state, postsData: [newPost, ...state.postsData]}
        }
        case "DELETE_POST":
            return {...state, postsData: state.postsData.filter(p => p.id !== action.id)}
        case 'SET-USER-PROFILE': {
            return {...state, profile: {...action.profile}}
        }
        case 'SET-STATUS': {
            return {...state, status: action.status}
        }
        case "SAVE_PHOTO":
            return {...state, profile: {...state.profile, photos: action.photo}}
        case "SAVE_USER_PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPostAC = (message: string) => {
    return {type: 'ADD-POST', message} as const
}
export const setUserProfileAC = (profile: ProfileType) => {
    return {type: 'SET-USER-PROFILE', profile} as const
}
export const setUserStatus = (status: string) => {
    return {type: 'SET-STATUS', status} as const
}
export const deletePostAC = (id: string) => {
    return {type: 'DELETE_POST', id} as const
}
export const savePhotoSuccessAC = (photo: any) => {
    return {type: 'SAVE_PHOTO', photo} as const
}
export const saveUserProfileAC = (profile: ProfileType) => {
    return {type: 'SAVE_USER_PROFILE', profile} as const
}

//Thunk
export const getUserStatusTC = (userId: string | number) => async (dispatch: Dispatch<profileActionType>) => {
    let res = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(res.data))
}

export const updateUserStatusTC = (status: string) => async (dispatch: Dispatch<profileActionType>) => {
    let res = await profileAPI.updateUserStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export const getUserProfileTC = (userId: number | string) => async (dispatch: Dispatch<profileActionType>) => {
    let res = await profileAPI.getProfile(userId)
    dispatch(setUserProfileAC(res.data))
}
export const savePhotoTC = (photo: File) => async (dispatch: Dispatch<any>) => {
    let res = await profileAPI.savePhoto(photo)
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccessAC(res.data.data.photos))
    }
}
export const saveProfileTC = (profile: ProfileType) => async (dispatch: Dispatch<any>, getState:any) => {
    const userId = getState().auth.userId
    let res = await profileAPI.saveProfile(profile)

    if (res.data.resultCode === 0) {
        dispatch(getUserProfileTC(userId))
    }
}

//Types

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
type AddPostAT = ReturnType<typeof addPostAC>
type UserProfileAT = ReturnType<typeof setUserProfileAC>
type UserStatusAT = ReturnType<typeof setUserStatus>
type DeletePostAT = ReturnType<typeof deletePostAC>
type SavePhotoAT = ReturnType<typeof savePhotoSuccessAC>
type saveUserProfileAT = ReturnType<typeof saveUserProfileAC>
export type PhotoType = {
    small?: string | null
    large?: string | null
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
type profileActionType =
    | AddPostAT
    | UserProfileAT
    | UserStatusAT
    | DeletePostAT
    | SavePhotoAT
    | saveUserProfileAT

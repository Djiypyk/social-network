import {Dispatch} from "react";
import {headerAPI, LoginDataType} from "../api/headerAPI";

const SET_USER_DATA = 'SET_USER_DATA'

export type UserDataType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}
type setUserDataAT = {
    type: typeof SET_USER_DATA
    payload: UserDataType[]
    isAuth: boolean
}

type AuthActionType = setUserDataAT

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

export type initialStateUsersType = typeof initialState


export const authReducer = (state: initialStateUsersType = initialState, action: AuthActionType): initialStateUsersType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.payload, isAuth: action.isAuth
            }
        default:
            return state
    }

}

export const setAuthUserDataAC = (
    id: string | null, email: string | null,
    login: string | null, isAuth: boolean): setUserDataAT => {
    return {type: SET_USER_DATA, payload: {id, email, login}, isAuth}
}

export const getAuthUserDataTC = () => (dispatch: Dispatch<AuthActionType>) => {
    headerAPI.me()
        .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserDataAC(id, login, email, true)) // !!----> login, email, userId
                }
            }
        )
}

export const loginTC = (data: LoginDataType[]) => (dispatch: Dispatch<AuthActionType>) => {
    headerAPI.login(data)
        .then(response => {
            console.log(response)
            // if (response.data.resultCode === 0) {
            //     dispatch(getAuthUserDataTC())
            // }
        })
}

export const logOutTC = () => (dispatch: Dispatch<AuthActionType>) => {
    headerAPI.logOut()
        .then(response => {
            console.log(response)
            // if (response.data.resultCode === 0) {
            //     dispatch(setAuthUserDataAC(null, null, null, false))
            // }
        })
}
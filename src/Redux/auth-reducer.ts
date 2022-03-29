import {Dispatch} from "redux";
import {authAPI, LoginDataType} from "../api/authAPI";

const initialState = {
    id: null as null | number,
    email: null as null | string,
    login: '' as null | string,
    isAuth: false as boolean,
    errors: [''] as string[]
};

export const authReducer = (state: initialStateUsersType = initialState, action: AuthActionType): initialStateUsersType => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
            return {
                ...state, ...action.data
            }
        case "auth/SET_ERRORS":
            return {...state, errors: action.errors}
        default:
            return state
    }
}
export const setAuthUserDataAC = (id: number | null, login: string | null, email: string | null, isAuth: boolean): setUserDataAT => ({
    type: 'auth/SET_USER_DATA',
    data: {id, login, email, isAuth}
})
export const setErrors = (errors: string[]): setErrorsAC => ({type: 'auth/SET_ERRORS', errors})

//Thunk

export const getAuthUserDataTC = () => async (dispatch: Dispatch<AuthActionType>) => {
    let res = await authAPI.me()
    if (res.data.resultCode === 0) {
        let {id, login, email} = res.data.data
        dispatch(setAuthUserDataAC(id, login, email, true))
    }
}

export const loginTC = (data: LoginDataType) => async (dispatch: Dispatch<any>) => {
    let res = await authAPI.login(data)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
    } else if (res.data.resultCode === 1) {
        dispatch(setErrors(res.data.messages))
    }
}

export const logOutTC = () => async (dispatch: Dispatch<AuthActionType>) => {
    let res = await authAPI.logOut()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false))
    }
}

// Types

type setErrorsAC = {
    type: 'auth/SET_ERRORS'
    errors: string[]
}
export type setUserDataAT = {
    type: 'auth/SET_USER_DATA'
    data: {
        id: number | null,
        email: string | null,
        login: string | null,
        isAuth: boolean
    }
}
export type initialStateUsersType = typeof initialState
export type AuthActionType = setUserDataAT | setErrorsAC
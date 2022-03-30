import {Dispatch} from "redux";
import {authAPI, LoginDataType} from "../api/authAPI";
import {securityAPI} from "../api/securityAPI";

const initialState = {
    id: null as null | number,
    email: null as null | string,
    login: '' as null | string,
    isAuth: false as boolean,
    errors: [''] as string[],
    captchaUrl: null as null | string
};

export const authReducer = (state: initialStateUsersType = initialState, action: AuthActionType): initialStateUsersType => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
        case "auth/GET_CAPTCHA_URL_SUCCESS":
            return {
                ...state, ...action.payload
            }
        case "auth/SET_ERRORS":
            return {...state, errors: action.errors}

        default:
            return state
    }
}
export const setAuthUserDataAC = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => ({
    type: 'auth/SET_USER_DATA',
    payload: {id, login, email, isAuth}
} as const)
export const setErrors = (errors: string[]): setErrorsAC => ({type: 'auth/SET_ERRORS', errors})
export const getCaptchaUrlSuccessAC = (captchaUrl: string | null) => {
    return {type: 'auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}} as const
}

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
    } else {
        if (res.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        dispatch(setErrors(res.data.messages))
    }
}

export const logOutTC = () => async (dispatch: Dispatch<AuthActionType>) => {
    let res = await authAPI.logOut()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch<AuthActionType>) => {
    let res = await securityAPI.getCaptchaUrl()
    const captchaUrl = res.data.url
    dispatch(getCaptchaUrlSuccessAC(captchaUrl))
}

// Types

type setErrorsAC = {
    type: 'auth/SET_ERRORS'
    errors: string[]
}
export type setUserDataAT = ReturnType<typeof setAuthUserDataAC>
export type getCaptchaUrlSuccessAT = ReturnType<typeof getCaptchaUrlSuccessAC>
export type initialStateUsersType = typeof initialState
export type AuthActionType = setUserDataAT | setErrorsAC | getCaptchaUrlSuccessAT

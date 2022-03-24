import {Dispatch} from "redux";
import {headerAPI, LoginDataType} from "../api/headerAPI";

const initialState = {
    id: null as null | number,
    email: null as null | string,
    login: '' as null | string,
    isAuth: false as boolean
};

export type initialStateUsersType = typeof initialState

export const authReducer = (state: initialStateUsersType = initialState, action: AuthActionType): initialStateUsersType => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
            return {
                ...state, ...action.data
            }
        default:
            return state
    }
}

export const setAuthUserDataAC = (id: number | null, login: string | null, email: string | null, isAuth: boolean): setUserDataAT => ({
    type: 'auth/SET_USER_DATA',
    data: {id, login, email, isAuth}
})

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

export const loginTC = (data: LoginDataType) => (dispatch: Dispatch<any>) => {
    headerAPI.login(data)
        .then((res) => {
            console.log(res)
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            }
        })
}

export const logOutTC = () => (dispatch: Dispatch<AuthActionType>) => {
    headerAPI.logOut()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserDataAC(null, null, null, false))
            }
        })
}

// Types

type setUserDataAT = {
    type: 'auth/SET_USER_DATA'
    data: {
        id: number | null,
        email: string | null,
        login: string | null,
        isAuth: boolean
    }
}

type AuthActionType = setUserDataAT

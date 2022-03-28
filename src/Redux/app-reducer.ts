import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {getAuthUserDataTC, setUserDataAT} from "./auth-reducer";
import {AppStateType} from "./redux-store";

const initialState = {
    initialized: false
};
export const appReducer = (state: initialStateUsersType = initialState, action: AppActionType): initialStateUsersType => {
    switch (action.type) {
        case "app/INITIALIZED_SUCCESS":
            return {...state, initialized: true}
        default:
            return state
    }
}

export const initializedSuccessAC = () => ({type: 'app/INITIALIZED_SUCCESS'})
export const initializeAppTC = (): ThunkAction<any, AppStateType, any, AppActionType> => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserDataTC())
    Promise.all([promise]).then(() => dispatch(initializedSuccessAC()))
}

// Types

type SetInitializedAT = {
    type: 'app/INITIALIZED_SUCCESS'
    initialized: boolean
}
export type initialStateUsersType = typeof initialState
type AppActionType = SetInitializedAT | setUserDataAT

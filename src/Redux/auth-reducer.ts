const SET_USER_DATA = 'SET_USER_DATA'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export type UserDataType = {
    userId: string | null,
    email: string | null,
    login: string | null
}
type setUserDataAT = {
    type: typeof SET_USER_DATA
    data: UserDataType[]
}

type ActionType = setUserDataAT
    | toggleIsFetchingAT

type toggleIsFetchingAT = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
};

export type initialStateUsersType = typeof initialState


export const authReducer = (state: initialStateUsersType = initialState, action: ActionType): initialStateUsersType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data, isAuth: true
            }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }

}

export const setAuthUserDataAC = (data: UserDataType[]): setUserDataAT => (
    {type: SET_USER_DATA, data}
)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching})

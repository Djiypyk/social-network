import {v1} from "uuid";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

type followAT = {
    type: typeof FOLLOW
    userID: string
}
type unfollowAT = {
    type: typeof UNFOLLOW
    userID: string
}
type setUsersAT = {
    type: typeof SET_USERS
    users: UserType[]
}
type ActionType = followAT | unfollowAT | setUsersAT
type LocationType = {
    city: string
    country: string
}
export type UserType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    photoUrl: string
    location: LocationType
}

const initialState = {
    users: [

    ] as UserType[]
};

export type initialStateUsersType = typeof initialState


export const usersReducer = (state: initialStateUsersType = initialState, action: ActionType): initialStateUsersType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(
                    u => u.id === action.userID ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state, users:
                    state.users.map(
                        u => u.id === action.userID ? {...u, followed: false} : u)
            }

        case SET_USERS:
            return {
                ...state, users:
                    [...state.users, ...action.users]
            }
        default:
            return state
    }

}

export const followAC = (userID: string) => ({type: FOLLOW, userID})
export const unFollowAC = (userID: string) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: UserType[]) => {
    return {type: SET_USERS, users: users}
}
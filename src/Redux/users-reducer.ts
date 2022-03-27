import {usersAPI} from "../api/usersAPI";
import {Dispatch} from "react";
import {filterValuesI} from "../components/SearchForm/SearchForm";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

const initialState = {
    users: [] as UserType[],
    pagesCount: 5,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as string[],
};

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
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:

            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }

}

// Action
export const followAC = (userID: string): followAT => ({type: FOLLOW, userID})
export const unFollowAC = (userID: string): unfollowAT => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: UserType[]): setUsersAT => {
    return {type: SET_USERS, users: users}
}
export const setCurrentPageAC = (currentPage: number): setCurrentPageAT => ({type: SET_CURRENT_PAGE, currentPage})
export const totalUsersCountAC = (totalCount: number): setTotalUsersAT => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetchingAC = (isFetching: boolean): toggleIsFetchingAT => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: string): toggleIsFollowingProgressAT => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

//Thunk
export const getUsersTC = (currentPage: number, pagesCount: number, filter?: filterValuesI) => (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleIsFetchingAC(true))
    dispatch(setCurrentPageAC(currentPage))
    usersAPI.getUsers(currentPage, pagesCount, filter)
        .then(data => {
            dispatch(toggleIsFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(totalUsersCountAC(data.totalCount))
        })
}

export const followTC = (userId: string) => (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleIsFollowingProgressAC(true, userId))
    usersAPI.followUser(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(followAC(userId))
            }
            dispatch(toggleIsFollowingProgressAC(false, userId))
        })

}

export const unFollowTC = (userId: string) => (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleIsFollowingProgressAC(true, userId))
    usersAPI.unFollowUser(userId)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollowAC(userId))
            }
            dispatch(toggleIsFollowingProgressAC(false, userId))
        })
}

//Types

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
type setCurrentPageAT = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type setTotalUsersAT = { type: typeof SET_TOTAL_USERS_COUNT, totalCount: number }
type toggleIsFetchingAT = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }
type toggleIsFollowingProgressAT = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: boolean,
    userId: string,
}
type ActionType =
    followAT
    | unfollowAT
    | setUsersAT
    | setCurrentPageAT
    | setTotalUsersAT
    | toggleIsFetchingAT
    | toggleIsFollowingProgressAT

type LocationType = {
    city: string
    country: string
}
type PhotosType = {
    small: undefined | string
    large: undefined | string
}
export type UserType = {
    id: string
    followed: boolean
    name: string
    status: string
    photos: PhotosType
    location: LocationType
}
export type initialStateUsersType = typeof initialState
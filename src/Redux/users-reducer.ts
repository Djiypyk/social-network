import {usersAPI} from "../api/usersAPI";
import {Dispatch} from "react";
import {filterValuesI} from "../components/SearchForm/SearchForm";

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
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(
                    u => u.id === action.userID ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW':
            return {
                ...state, users:
                    state.users.map(
                        u => u.id === action.userID ? {...u, followed: false} : u)
            }
        case 'SET-USERS':
            return {...state, users: action.users}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.totalCount}
        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
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
export const followAC = (userID: string): followAT => ({type: 'FOLLOW', userID})
export const unFollowAC = (userID: string): unfollowAT => ({type: 'UNFOLLOW', userID})
export const setUsersAC = (users: UserType[]): setUsersAT => {
    return {type: 'SET-USERS', users: users}
}
export const setCurrentPageAC = (currentPage: number): setCurrentPageAT => ({type: 'SET-CURRENT-PAGE', currentPage})
export const totalUsersCountAC = (totalCount: number): setTotalUsersAT => ({type: 'SET-TOTAL-USERS-COUNT', totalCount})
export const toggleIsFetchingAC = (isFetching: boolean): toggleIsFetchingAT => ({
    type: 'TOGGLE-IS-FETCHING',
    isFetching
})
export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: string): toggleIsFollowingProgressAT =>
    ({
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
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
    type: 'FOLLOW'
    userID: string
}
type unfollowAT = {
    type: 'UNFOLLOW'
    userID: string
}
type setUsersAT = {
    type: 'SET-USERS'
    users: UserType[]
}
type setCurrentPageAT = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}
type setTotalUsersAT = { type: 'SET-TOTAL-USERS-COUNT', totalCount: number }
type toggleIsFetchingAT = { type: 'TOGGLE-IS-FETCHING', isFetching: boolean }
type toggleIsFollowingProgressAT = {
    type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
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
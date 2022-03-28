import {usersAPI} from "../api/usersAPI";
import {Dispatch} from "react";
import {filterValuesI} from "../components/SearchForm/SearchForm";
import {updateObjectInArray} from "../utils/objectHelpers";

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
                users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})
            }
        case 'UNFOLLOW':
            return {
                ...state, users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})
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
export const followAC = (userID: string) => ({type: 'FOLLOW', userID}) as const
export const unFollowAC = (userID: string) => ({type: 'UNFOLLOW', userID}) as const
export const setUsersAC = (users: UserType[]) => {
    return {type: 'SET-USERS', users: users} as const
}
export const setCurrentPageAC = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage}) as const
export const totalUsersCountAC = (totalCount: number) => ({type: 'SET-TOTAL-USERS-COUNT', totalCount}) as const
export const toggleIsFetchingAC = (isFetching: boolean) => ({
    type: 'TOGGLE-IS-FETCHING',
    isFetching
}) as const
export const toggleIsFollowingProgressAC = (isFetching: boolean, userId: string) =>
    ({
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        isFetching,
        userId
    }) as const

// support func
const followUnFollowFlow = async (dispatch: Dispatch<ActionType>,
                                  userId: string,
                                  apiMethod: (userId: string) => Promise<any>,
                                  actionCreator: any) => {
    dispatch(toggleIsFollowingProgressAC(true, userId))
    let data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingProgressAC(false, userId))
}

//Thunk
export const getUsersTC = (currentPage: number, pagesCount: number, filter?: filterValuesI) => async (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleIsFetchingAC(true))
    dispatch(setCurrentPageAC(currentPage))
    let data = await usersAPI.getUsers(currentPage, pagesCount, filter)
    dispatch(toggleIsFetchingAC(false))
    dispatch(setUsersAC(data.items))
    dispatch(totalUsersCountAC(data.totalCount))
}
export const followTC = (userId: string) => async (dispatch: Dispatch<ActionType>) => {
    await followUnFollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followAC)
}
export const unFollowTC = (userId: string) => async (dispatch: Dispatch<ActionType>) => {
    await followUnFollowFlow(dispatch, userId, usersAPI.unFollowUser.bind(usersAPI), unFollowAC)
}

//Types

type FollowAT = ReturnType<typeof followAC>
type UnFollowAT = ReturnType<typeof unFollowAC>
type setUsersAT = ReturnType<typeof setUsersAC>
type setCurrentPageAT = ReturnType<typeof setCurrentPageAC>
type setTotalUsersAT = ReturnType<typeof totalUsersCountAC>
type toggleIsFetchingAT = ReturnType<typeof toggleIsFetchingAC>
type toggleIsFollowingProgressAT = ReturnType<typeof toggleIsFollowingProgressAC>
type ActionType =
    FollowAT
    | UnFollowAT
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
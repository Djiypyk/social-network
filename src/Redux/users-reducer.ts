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
        {
            id: v1(), photoUrl: 'https://w7.pngwing.com/pngs/623/822/png-transparent-computer-icons-smile-smile-cdr-face-people-thumbnail.png',
            followed: true, fullName: 'Dima', status: 'I am boss', location:
                {
                    city: 'Minsk',
                    country: 'Belarus'
                }
        },
        {
            id: v1(),photoUrl: 'https://w7.pngwing.com/pngs/623/822/png-transparent-computer-icons-smile-smile-cdr-face-people-thumbnail.png',
            followed: true, fullName: 'Alex', status: 'I am beautiful', location:
                {
                    city: 'Kemerovo',
                    country: 'Russia'
                }
        },
        {
            id: v1(), photoUrl: 'https://w7.pngwing.com/pngs/623/822/png-transparent-computer-icons-smile-smile-cdr-face-people-thumbnail.png',
            followed: false, fullName: 'Vasya', status: 'I am Vasya', location:
                {
                    city: 'Kiev',
                    country: 'Ukraine'
                }
        },
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
export const setUsersAC = (users: UserType) => {
    return {type: SET_USERS, users: users}
}
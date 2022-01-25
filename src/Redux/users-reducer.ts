import {v1} from "uuid";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

type LocationType = {
    city: string
    country: string
}

type UserType = {
    id: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}
const initialState = {
    users: [
        {
            id: v1(), followed: true, fullName: 'Dima', status: 'I am boss', location:
                {
                    city: 'Minsk',
                    country: 'Belarus'
                }
        },
        {
            id: v1(), followed: true, fullName: 'Alex', status: 'I am beautiful', location:
                {
                    city: 'Kemerovo',
                    country: 'Russia'
                }
        },
        {
            id: v1(), followed: false, fullName: 'Vasya', status: 'I am Vasya', location:
                {
                    city: 'Kiev',
                    country: 'Ukraine'
                }
        },
    ] as Array<UserType>
};

export type initialStateType = typeof initialState


const usersReducer = (state: initialStateType, action: any) => {

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

        default:
            return state
    }

}

export const followAC = (userID: string) => ({type: FOLLOW, userID})
export const unFollowAC = (userID: string) => ({type: UNFOLLOW, userID})
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'

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
type ActionType = followAT | unfollowAT | setUsersAT | setCurrentPageAT | setTotalUsersAT


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

const initialState = {
    users: [] as UserType[],
    pagesCount: 5,
    totalUsersCount: 1,
    currentPage: 5,
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
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:

            return {...state, totalUsersCount: action.totalCount}
        default:
            return state
    }

}

export const followAC = (userID: string) => ({type: FOLLOW, userID})
export const unFollowAC = (userID: string) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users: UserType[]) => {
    return {type: SET_USERS, users: users}
}
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage})
export const totalUsersCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount})

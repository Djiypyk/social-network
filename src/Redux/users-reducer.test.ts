import {
    followAC,
    initialStateUsersType,
    setUsersAC,
    toggleIsFetchingAC,
    unFollowAC,
    usersReducer,
    UserType
} from "./users-reducer";

test('followed should be true', () => {

    const initialState: initialStateUsersType = {
        users: [
            {
                id: "1", followed: false, name: 'Nick', status: 'Hello', photos: {
                    small: undefined,
                    large: undefined
                },
                location: {
                    city: 'Rechitsa',
                    country: 'Belarus'
                }
            },
            {
                id: "2", followed: true, name: 'Alex', status: 'Bye', photos: {
                    small: undefined,
                    large: undefined
                },
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            }]
        ,
        pagesCount: 5,
        totalUsersCount: 1,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [] as string[],
    };
    const action = followAC("1")
    const newState = usersReducer(initialState, action)

    expect(newState.users[0].followed).toBe(true)
    expect(newState.users[0].name).toBe('Nick')
})
test('followed should be false', () => {

    const initialState: initialStateUsersType = {
        users: [
            {
                id: "1", followed: false, name: 'Nick', status: 'Hello', photos: {
                    small: undefined,
                    large: undefined
                },
                location: {
                    city: 'Rechitsa',
                    country: 'Belarus'
                }
            },
            {
                id: "2", followed: true, name: 'Alex', status: 'Bye', photos: {
                    small: undefined,
                    large: undefined
                },
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            }]
        ,
        pagesCount: 5,
        totalUsersCount: 1,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [] as string[],
    };
    const action = unFollowAC("2")
    const newState = usersReducer(initialState, action)

    expect(newState.users[1].followed).toBe(false)
    expect(newState.users[1].name).toBe('Alex')
})
test('array users should be incremented', () => {

    const initialState: initialStateUsersType = {
        users: [
            {
                id: "1", followed: false, name: 'Nick', status: 'Hello', photos: {
                    small: undefined,
                    large: undefined
                },
                location: {
                    city: 'Rechitsa',
                    country: 'Belarus'
                }
            },
            {
                id: "2", followed: true, name: 'Alex', status: 'Bye', photos: {
                    small: undefined,
                    large: undefined
                },
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            }]
        ,
        pagesCount: 5,
        totalUsersCount: 1,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [] as string[],
    };
    const action = toggleIsFetchingAC(true)
    const newState = usersReducer(initialState, action)

    expect(newState.isFetching).toBe(true)

})
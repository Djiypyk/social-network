import {addPostAC, deletePostAC, InitialStateProfileType, profileReducer, setUserStatus} from "./profile-reducer";
import {v1} from "uuid";

test('length of posts should be incremented', () => {
    const initialState: InitialStateProfileType = {
        postsData: [
            {id: v1(), message: 'Hi. How are you? I wish you nice day!', likesCounts: 15},
            {id: v1(), message: 'Hi, there.', likesCounts: 17},
            {id: v1(), message: 'Wow,  it`s my first post.', likesCounts: 12}
        ],
        profile: {
            aboutMe: null,
            contacts: {
                facebook: null,
                website: null,
                vk: 'https://vk.com/hoziain4eloveka',
                twitter: null,
                instagram: 'https://www.instagram.com/zarezako.nick/',
                youtube: null,
                github: 'https://github.com/Djiypyk',
                mainLink: null,
            },
            lookingForAJob: true,
            lookingForAJobDescription: 'Frontend Developer',
            fullName: 'Nikolai Zarazaka',
            userId: 16125,
            photos: {
                small: null,
                large: null,
            },

        },
        status: ''
    }
    let action = addPostAC('Hello world!')
//action
    let newState = profileReducer(initialState, action)
//expect
    expect(newState.postsData.length).toBe(4)
    expect(newState.postsData[3].message).toBe('Hello world!')
})

test('length of posts should be decrement', () => {
    const initialState: InitialStateProfileType = {
        postsData: [
            {id: '0', message: 'Hi. How are you? I wish you nice day!', likesCounts: 15},
            {id: '1', message: 'Hi, there.', likesCounts: 17},
            {id: '2', message: 'Wow,  it`s my first post.', likesCounts: 12}
        ],
        profile: {
            aboutMe: null,
            contacts: {
                facebook: null,
                website: null,
                vk: 'https://vk.com/hoziain4eloveka',
                twitter: null,
                instagram: 'https://www.instagram.com/zarezako.nick/',
                youtube: null,
                github: 'https://github.com/Djiypyk',
                mainLink: null,
            },
            lookingForAJob: true,
            lookingForAJobDescription: 'Frontend Developer',
            fullName: 'Nikolai Zarazaka',
            userId: 16125,
            photos: {
                small: null,
                large: null,
            },

        },
        status: ''
    }
    let action = deletePostAC('1')
//action
    let newState = profileReducer(initialState, action)
//expect
    expect(newState.postsData.length).toBe(2)
})
test('length of posts shouldn`t be decrement id id is incorrect', () => {
    const initialState: InitialStateProfileType = {
        postsData: [
            {id: '0', message: 'Hi. How are you? I wish you nice day!', likesCounts: 15},
            {id: '1', message: 'Hi, there.', likesCounts: 17},
            {id: '2', message: 'Wow,  it`s my first post.', likesCounts: 12}
        ],
        profile: {
            aboutMe: null,
            contacts: {
                facebook: null,
                website: null,
                vk: 'https://vk.com/hoziain4eloveka',
                twitter: null,
                instagram: 'https://www.instagram.com/zarezako.nick/',
                youtube: null,
                github: 'https://github.com/Djiypyk',
                mainLink: null,
            },
            lookingForAJob: true,
            lookingForAJobDescription: 'Frontend Developer',
            fullName: 'Nikolai Zarazaka',
            userId: 16125,
            photos: {
                small: null,
                large: null,
            },

        },
        status: ''
    }
    let action = deletePostAC('1000')
//action
    let newState = profileReducer(initialState, action)
//expect
    expect(newState.postsData.length).toBe(3)
})
test('user status should be correct changed', () => {
    const initialState: InitialStateProfileType = {
        postsData: [
            {id: '0', message: 'Hi. How are you? I wish you nice day!', likesCounts: 15},
            {id: '1', message: 'Hi, there.', likesCounts: 17},
            {id: '2', message: 'Wow,  it`s my first post.', likesCounts: 12}
        ],
        profile: {
            aboutMe: null,
            contacts: {
                facebook: null,
                website: null,
                vk: 'https://vk.com/hoziain4eloveka',
                twitter: null,
                instagram: 'https://www.instagram.com/zarezako.nick/',
                youtube: null,
                github: 'https://github.com/Djiypyk',
                mainLink: null,
            },
            lookingForAJob: true,
            lookingForAJobDescription: 'Frontend Developer',
            fullName: 'Nikolai Zarazaka',
            userId: 16125,
            photos: {
                small: null,
                large: null,
            },

        },
        status: ''
    }
    let action = setUserStatus('Hello. It`s me.')
//action
    let newState = profileReducer(initialState, action)
//expect
    expect(newState.status).toBe('Hello. It`s me.')
    expect(typeof newState.status).toBe('string')
})

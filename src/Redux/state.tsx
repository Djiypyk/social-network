export const state =
    {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi. How are you?', likesCounts: 15},
                {id: 2, message: 'Hi, there.', likesCounts: 17},
                {id: 2, message: 'Wow,  it`s my first post.', likesCounts: 12}
            ],
        },
        dialogPage: {
            dialogsData: [
                {name: 'Alex', id: 1},
                {name: 'Glen', id: 2},
                {name: 'Yana', id: 3},
                {name: 'Gloria', id: 4},
                {name: 'Nikolai', id: 5}
            ],
            messagesData: [
                {id: 1, message: 'Hello, it`s me.'},
                {id: 2, message: 'Hello!'},
                {id: 3, message: 'All you ready?'}
            ]
        },
        sidebar: {}
    }

export type PostItemsType = {
    id: number
    message: string
    likesCounts: number
}
export type PostsType = {
    postsData: PostItemsType[]
}

export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}

export type DialogPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}

export type StateType = {
    profilePageData: PostsType
    dialogsPageData: DialogPageType

}

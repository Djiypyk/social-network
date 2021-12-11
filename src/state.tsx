const state =
    {
        postsData: [
            {id: 1, message: 'Hi. How are you?', likesCounts: 15},
            {id: 2, message: 'Hi, there.', likesCounts: 17},
            {id: 2, message: 'Wow,  it`s my first post.', likesCounts: 12}
        ],
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

    }

type PostItemsType = {
    id: number
    message: string
    likesCounts: number
}
type DialogsDataType = {
    id: number
    name: string
}
type MessagesDataType = {
    id: number
    message: string
}

type DataType = {

    postsData: Array<PostItemsType>
    dialogsData: Array<DialogsDataType>
    messagesData: Array<MessagesDataType>

}
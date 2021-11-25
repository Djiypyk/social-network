import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        dialogsPage: {
            dialogs: [
                { id: 1, name: "Alexander" },
                { id: 2, name: "Nikolai" },
                { id: 3, name: "Vladimir" },
                { id: 4, name: "Ilya" },
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are your do it?" },
                { id: 3, message: "I`am good." },
                { id: 4, message: "Thanks you." },
            ],
            newMessageBody: "",
        },

        profilePage: {
            posts: [
                { id: 1, message: "How are you?", likesCount: 12 },
                { id: 2, message: "It`s my first post", likesCount: 23 },
            ],
            newPostText: "",
        },
        sidebar: {},
    },
    _callSubscriber() {},
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },
};

export default store;

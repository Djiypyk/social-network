const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({ id: 5, message: body });
            return state;
        default:
            return state;
    }
};

export const updateNewMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text,
});
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE,
});
export default dialogsReducer;

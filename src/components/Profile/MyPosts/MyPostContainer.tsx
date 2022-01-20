import React from "react";
import {ReduxStoreType} from '../../../Redux/redux-store';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profile-reducer";
import MyPost from "./MyPost";

export type propsPostsType = {
    state: ReduxStoreType
    dispatch: (action: any) => void
}

const MyPostContainer: React.FC<propsPostsType> = (props) => {


    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = (text: string) => {
        if (text) {
            let action = onPostChangeActionCreator(text)
            props.dispatch(action)
        }
    }
    return <MyPost updateNewPostText={onPostChange}
                   addPost={addPost}
                   postsData={props.state.profilePage.postsData}
                   newPostText={props.state.profilePage.newPostText}
    />

};

export default MyPostContainer;


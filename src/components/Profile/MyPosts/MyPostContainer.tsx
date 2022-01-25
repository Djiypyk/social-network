import React from "react";
import {addPostAC, onPostChangeAC} from "../../../Redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";
import {AppStateType, PostItemType} from "../../../Redux/redux-store";

export type propsPostsType = mapStateType & mapDispatchType & ownPropsType

const MyPostContainer: React.FC<propsPostsType> = (props) => {

    const addPost = () => {
        props.addPostAC()
    }

    const onPostChange = (text: string) => {
        if (text) {
            props.onPostChangeAC(text)
        }
    }
    return <MyPost updateNewPostText={onPostChange}
                   addPost={addPost}
                   postsData={props.postsData}
                   newPostText={props.newPostText}
    />
};


type mapStateType = {
    postsData: PostItemType[]
    newPostText: string
}

type mapDispatchType = {
    addPostAC: () => void
    onPostChangeAC: (text: string) => void
}

type ownPropsType = {}

const mapStateToProps = (state: AppStateType) => ({
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
})

export default connect<mapStateType, mapDispatchType, ownPropsType, AppStateType>(mapStateToProps, {
    addPostAC,
    onPostChangeAC
})(MyPostContainer)

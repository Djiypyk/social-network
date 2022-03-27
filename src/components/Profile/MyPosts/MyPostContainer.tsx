import React from "react";
import {addPostAC, PostType} from "../../../Redux/profile-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import MyPost from "./MyPost";

const mapStateToProps = (state: AppStateType) => ({
    postsData: state.profilePage.postsData,
})

const MyPostContainer: React.FC<propsPostsType> = (props) => {

    const addPost = (message: string) => props.addPostAC(message)
    return <MyPost
        addPost={addPost}
        postsData={props.postsData}/>
};

export default connect<mapStateType, mapDispatchType,
    ownPropsType, AppStateType>(mapStateToProps,
    {
        addPostAC,
    })(MyPostContainer)

//Types

type mapStateType = { postsData: PostType[] }
type mapDispatchType = { addPostAC: (message: string) => void }
type ownPropsType = {}
export type propsPostsType = mapStateType & mapDispatchType & ownPropsType

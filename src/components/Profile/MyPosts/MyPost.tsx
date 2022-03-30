import styles from "./MyPost.module.css";
import React from "react";
import Post from "./Posts/Post";
import {PostType} from "../../../Redux/profile-reducer";
import {AddPostForm} from "../common/AddPostForm";

const MyPost: React.FC<propsPostsType> = React.memo(({postsData, addPost}) => {

    const postsElement = postsData.map(p => <Post key={p.id} id={p.id} message={p.message}
                                                  likesCounts={p.likesCounts}/>)

    const addNewPost = (message: string) => addPost(message)

    // UI
    return (
        <div className={styles.myPost_block}>
            <h3>My posts</h3>
            <AddPostForm addNewPost={addNewPost}/>
            {postsElement}
        </div>
    );
},);

export default MyPost;
//Types
export type propsPostsType = {
    postsData: PostType[]
    addPost: (message: string) => void
}

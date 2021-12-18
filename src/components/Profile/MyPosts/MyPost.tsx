import styles from "./MyPost.module.css";
import React from "react";
import Post from "./Posts/Post";
import {PostsType} from "../../../index";


const MyPost: React.FC<PostsType> = (props) => {


    let postsElement = props.postsData.map(p => <Post id={p.id} message={p.message} likesCounts={p.likesCounts}/>)

    return (
        <div className={styles.myPost_block}>
            <h3>My posts</h3>
            <div>
                <textarea placeholder='Write your post'/>
            </div>
            <div>
                <button className={styles.add_button}>Add post</button>
            </div>
            {postsElement}

        </div>
    );
};

export default MyPost;


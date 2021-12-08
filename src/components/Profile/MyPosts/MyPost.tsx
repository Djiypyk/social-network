import styles from "./MyPost.module.css";
import React from "react";
import Post from "./Posts/Post";

const MyPost: React.FC = (props: any) => {

    let posts = [
        {id: 1, message: 'Hi. How are you?', likesCounts: 15},
        {id: 2, message: 'Wow,  it`s my first post.', likesCounts: 15}
    ]
    let postsElement = posts.map (p => <Post message={p.message} likesCounts={p.likesCounts}/>)

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


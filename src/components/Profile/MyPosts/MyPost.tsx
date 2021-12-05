import styles from "./MyPost.module.css";
import React from "react";
import Post from "./Posts/Post";

const MyPost: React.FC = (props: any) => {

    return (
        <div className={styles.myPost_block}>
            <h3>My posts</h3>
            <div>
                <textarea placeholder='Write your post'/>
            </div>
            <div>
                <button className={styles.add_button}>Add</button>
            </div>
            <Post message='Hi. How are you?' likesCounts={15}/>
            <Post message='Wow, this is first post.' likesCounts={17}/>
        </div>
    );
};

export default MyPost;


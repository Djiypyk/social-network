import styles from "./MyPost.module.css";
import React from "react";

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
        </div>
    );
};

export default MyPost;


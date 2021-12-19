import styles from "./Post.module.css";
import React from "react";
import {PostItemsType} from "../../../../Redux/state";


const Post: React.FC<PostItemsType> = (props) => {
    return (
        <div key={props.id} className={styles.item}>
            <div>
                <img
                    src='https://gtaforums.com/uploads/monthly_2018_06/271590_20180430214413_1.thumb.png.936cf1a9cee7d06e2fc47804c7ed2de7.png'
                    alt='Avatar icon'/>
            </div>
            <div><p className={styles.post_text}>{props.message}</p></div>

            <span>Like {props.likesCounts}</span>

        </div>
    )
}

export default Post;

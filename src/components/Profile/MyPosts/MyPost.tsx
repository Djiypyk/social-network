import styles from "./MyPost.module.css";
import React, {RefObject} from "react";
import Post from "./Posts/Post";
import {PostsType} from '../../../Redux/state';


const MyPost: React.FC<PostsType> = (props) => {


    let postsElement = props.postsData.map(p => <Post id={p.id} message={p.message} likesCounts={p.likesCounts}/>)

    const newPostElement: RefObject<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        let textNewPost = newPostElement.current?.value
        props.addPost(textNewPost)


    }
    return (
        <div className={styles.myPost_block}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} placeholder='Write your post'/>
            </div>
            <div>
                <button onClick={addPost} className={styles.add_button}>Add post</button>
            </div>
            {postsElement}

        </div>
    );
};

export default MyPost;


import styles from "./MyPost.module.css";
import React from "react";
import Post from "./Posts/Post";
import {PostItemType} from '../../../Redux/state';

export type propsPostsType = {
    postsData: PostItemType[]
    addPost: (message: string) => void
}

const MyPost: React.FC<propsPostsType> = (props) => {


    let postsElement = props.postsData.map(p => <Post id={p.id} message={p.message} likesCounts={p.likesCounts}/>)

    const newPostElement: React.LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()

    const addPost = () => {
        if (newPostElement?.current?.value) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }


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


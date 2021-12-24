import styles from "./MyPost.module.css";
import React from "react";
import Post from "./Posts/Post";
import {PostItemType, updateNewPostText} from '../../../Redux/state';

export type propsPostsType = {
    postsData: PostItemType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const MyPost: React.FC<propsPostsType> = (props) => {


    let postsElement = props.postsData.map(p => <Post id={p.id} message={p.message} likesCounts={p.likesCounts}/>)

    const newPostElement: React.LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()

    const addPost = () => {
        if (newPostElement?.current?.value) {
            props.addPost()
        }
    }
    const onPostChange = () => {
        if (newPostElement?.current?.value) {
        props.updateNewPostText(newPostElement.current.value)
        }

    }
    return (
        <div className={styles.myPost_block}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} placeholder='Write your post'/>
            </div>
            <div>
                <button onClick={addPost} className={styles.add_button}>Add post</button>
            </div>
            {postsElement}

        </div>
    );
};

export default MyPost;


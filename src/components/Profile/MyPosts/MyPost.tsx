import styles from "./MyPost.module.css";
import React from "react";
import Post from "./Posts/Post";
import { PostItemType} from '../../../Redux/store';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../Redux/profile-reducer";

export type propsPostsType = {
    postsData: PostItemType[]
    newPostText: string
    dispatch: (action: any) => void
}

const MyPost: React.FC<propsPostsType> = (props) => {

    let postsElement = props.postsData.map(p => <Post id={p.id} message={p.message} likesCounts={p.likesCounts}/>)

    const newPostElement: React.LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()

    const addPost = () => {
        if (newPostElement?.current?.value) {
            // props.addPost()
            props.dispatch(addPostActionCreator())
        }
    }
    const onKeyDownAddPost = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && newPostElement?.current?.value) {
            props.dispatch(addPostActionCreator())
        }
    }

    const onPostChange = () => {
        if (newPostElement?.current?.value) {
            const text = newPostElement.current.value
            // props.updateNewPostText(newPostElement.current.value)
            let action = onPostChangeActionCreator(text)
            props.dispatch(action)
        }

    }
    return (
        <div className={styles.myPost_block}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} onKeyPress={onKeyDownAddPost} ref={newPostElement}
                          value={props.newPostText}
                          placeholder='Write your post'/>
            </div>
            <div>
                <button onClick={addPost} className={styles.add_button}>Add post</button>
            </div>
            {postsElement}

        </div>
    );
};

export default MyPost;


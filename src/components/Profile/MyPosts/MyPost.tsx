import styles from "./MyPost.module.css";
import React from "react";
import Post from "./Posts/Post";
import {PostType} from "../../../Redux/profile-reducer";




export type propsPostsType = {
    postsData: PostType[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const MyPost: React.FC<propsPostsType> = (props) => {

    const postsElement = props.postsData.map(p => <Post key={p.id} id={p.id} message={p.message} likesCounts={p.likesCounts}/>)

    const newPostElement: React.LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()

    const onAddPost = () => {
        if (newPostElement?.current?.value) {
            props.addPost()
        }
    }
    const onKeyDownAddPost = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && newPostElement?.current?.value) {
            props.addPost()
        }
    }

    const onPostChange = () => {
        if (newPostElement?.current?.value) {
            const text = newPostElement.current.value
            props.updateNewPostText(text)
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
                <button onClick={onAddPost} className={styles.add_button}>Add post</button>
            </div>
            {postsElement}

        </div>
    );
};

export default MyPost;


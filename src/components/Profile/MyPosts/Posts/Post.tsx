import styles from "./Post.module.css";

type PostPropsType = {
    message: string,
    likesCounts: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={styles.item}>
            <div>
                <img
                    src='https://gtaforums.com/uploads/monthly_2018_06/271590_20180430214413_1.thumb.png.936cf1a9cee7d06e2fc47804c7ed2de7.png'
                    alt='Avatar icon'/>
                {props.message}
            </div>

            <span>Like {props.likesCounts}</span>

        </div>
    )
}

export default Post;

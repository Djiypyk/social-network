import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPost from "./MyPosts/MyPost";
import Post from "./MyPosts/Posts/Post";
import React from "react";

const Profile: React.FC = (props: any) => {
    return (

        <div>
            <ProfileInfo/>
            <MyPost/>
            <Post message='Hi.how are you?' likesCounts={15}/>
            <Post message='Wow, this is first post.' likesCounts={17}/>
            {/*<MyPostsContainer store={props.store} />*/}
        </div>

    )
}

export default Profile;
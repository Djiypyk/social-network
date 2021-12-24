import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPost, {propsPostsType} from "./MyPosts/MyPost";
import React from "react";


const Profile: React.FC<propsPostsType>= (props) => {


    return (

        <div>
            <ProfileInfo/>
            <MyPost postsData={props.postsData} newPostText = {props.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>

        </div>

    )
}

export default Profile;
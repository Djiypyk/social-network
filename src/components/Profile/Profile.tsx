import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPost from "./MyPosts/MyPost";
import React from "react";
import {PostsDataType} from "../../index";

const Profile: React.FC<PostsDataType>= (props) => {


    return (

        <div>
            <ProfileInfo/>
            <MyPost postsData={props.postsData}/>

        </div>

    )
}

export default Profile;
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPost, {propsPostsType} from "./MyPosts/MyPost";
import React from "react";


const Profile: React.FC<propsPostsType>= (props) => {


    return (

        <div>
            <ProfileInfo/>
            <MyPost postsData={props.postsData} addPost={props.addPost}/>

        </div>

    )
}

export default Profile;
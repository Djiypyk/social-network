import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPost from "./MyPosts/MyPost";

import React from "react";

const Profile: React.FC = (props: any) => {
    return (

        <div>
            <ProfileInfo/>
            <MyPost/>


        </div>

    )
}

export default Profile;
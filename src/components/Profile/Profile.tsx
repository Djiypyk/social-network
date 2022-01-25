import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPostContainer from "./MyPosts/MyPostContainer";



const Profile: React.FC = (props) => {
    return (

        <div>
            <ProfileInfo/>
           <MyPostContainer />
        </div>
    )
}

export default Profile;
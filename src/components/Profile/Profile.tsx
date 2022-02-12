import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPostContainer from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../Redux/profile-reducer";

export type ProfileContainerPropsType = {
    profile: ProfileType
}

const Profile: React.FC<ProfileContainerPropsType> = ({profile}) => {
    return (

        <div>
            <ProfileInfo profile={profile}/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile;
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPostContainer from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../Redux/profile-reducer";

export type ProfileContainerPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const Profile: React.FC<ProfileContainerPropsType> = ({profile, status, updateStatus}) => {

    return (

        <div>
            <ProfileInfo profile={profile} status={status}
                         updateStatus={updateStatus}/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile;
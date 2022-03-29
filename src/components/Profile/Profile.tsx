import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPostContainer from "./MyPosts/MyPostContainer";
import {ProfileType, savePhotoTC} from "../../Redux/profile-reducer";

export type ProfileContainerPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
}

const Profile: React.FC<ProfileContainerPropsType> = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    return (

        <div>
            <ProfileInfo isOwner={isOwner} profile={profile} status={status}
                         updateStatus={updateStatus} savePhoto={savePhoto}/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile;
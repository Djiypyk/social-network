import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPostContainer from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../Redux/profile-reducer";

export type ProfileContainerPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const Profile: React.FC<ProfileContainerPropsType> = (props) => {

    return (

        <div>
            <ProfileInfo profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile;
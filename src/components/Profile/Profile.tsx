import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import MyPostContainer from "./MyPosts/MyPostContainer";
import {ProfileType} from "../../Redux/profile-reducer";
import {Navigate} from "react-router-dom";
import {PATH} from "../Navbar/Navbar";

export type ProfileContainerPropsType = {
    profile: ProfileType
    isAuth: boolean
}

const Profile: React.FC<ProfileContainerPropsType> = ({profile, isAuth}) => {
    if (!isAuth) return <Navigate to={PATH.login} />
    return (

        <div>
            <ProfileInfo profile={profile}/>
            <MyPostContainer/>
        </div>
    )
}

export default Profile;
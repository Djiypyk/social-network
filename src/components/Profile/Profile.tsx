import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPost from "./MyPosts/MyPost";
import React from "react";
import {PostItemType} from "../../Redux/store";

type ProfilePropsType = {
    postsData: PostItemType[]
    newPostText: string
    dispatch: (action: any) => void

}

const Profile: React.FC<ProfilePropsType> = (props) => {


    return (

        <div>
            <ProfileInfo/>
            <MyPost postsData={props.postsData}
                    newPostText={props.newPostText}
                    dispatch={props.dispatch}
            />

        </div>

    )
}

export default Profile;
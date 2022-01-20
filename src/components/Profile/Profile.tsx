import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import { ReduxStoreType} from "../../Redux/redux-store";
import MyPostContainer from "./MyPosts/MyPostContainer";

type ProfilePropsType = {
    state: ReduxStoreType
    dispatch: (action: any) => void
}

const Profile: React.FC<ProfilePropsType> = (props) => {
    return (

        <div>
            <ProfileInfo/>
            <MyPostContainer state={props.state} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;
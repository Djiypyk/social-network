import styles from "./ProfileInfo.module.css";
import userNoPhoto from "../../Users/assets/img/noAvatar.jpg";
import React, {ChangeEvent} from "react";
import {ProfileType} from "../../../Redux/profile-reducer";

export const AvatarPhoto: React.FC<AvatarPhotoPropsType> = ({profile, savePhoto, isOwner}) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            savePhoto(e.target.files[0])
        }
    }

    return (<div className={styles.profile_info}>
        <div>
            <img
                className={styles.avatar}
                src={profile?.photos?.small || userNoPhoto}
                alt="Avatar Icon"
            />
        </div>
        <div>
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
        </div>
    </div>)
}

//Types

type AvatarPhotoPropsType = {
    profile: ProfileType
    isOwner: boolean
    savePhoto: (photo: File) => void
}
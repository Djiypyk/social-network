import styles from "./ProfileInfo.module.css";
import React, {useState} from "react";
import {ProfileType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../common/Preloader11";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {UserAvatar} from "./common/UserAvatar";
import {Button, Typography} from "@mui/material";
import {ProfileDataForm} from "./common/EditModeComponent/ProfileDataFrom";

export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
                                                                profile,
                                                                status,
                                                                updateStatus,
                                                                isOwner, savePhoto
                                                            }) => {
    const [editMode, setEditMode] = useState<boolean>(false)

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    className={styles.content_profile_img}
                    alt='Background'
                />
            </div>
            <div>
                <div className={styles.avatar_block}>
                    <UserAvatar profile={profile}
                                isOwner={isOwner} savePhoto={savePhoto}/>
                </div>
                <ProfileStatus status={status} updateUserStatus={updateStatus} isOwner={isOwner}/>
                {editMode ? <ProfileDataForm
                        initialValues={profile}
                        editMode={editMode}
                        isOwner={isOwner}
                        goCloseEditMode={() => setEditMode(false)}
                        profile={profile}/> :
                    <ProfileData editMode={editMode} goToEditMode={() => setEditMode(true)} isOwner={isOwner}
                                 profile={profile}/>}

            </div>
        </div>
    )
}
export default ProfileInfo;

const ProfileData: React.FC<ProfileDataPropsType> = ({
                                                         profile, isOwner,
                                                         goToEditMode,
                                                         editMode
                                                     }) => {
    return <div>
        {isOwner && <Button variant={'contained'} color={'primary'} onClick={goToEditMode}>Edit</Button>}
        <div><Typography component={'div'} variant={'h5'}>{profile.fullName}</Typography>
            <div>
                <b>Looking for a job</b>:{profile.lookingForAJob ? ' Yes' : ' No'}
            </div>
            {profile.lookingForAJob && <div>
                <b>My skills:</b> {profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>About me</b>:{profile.aboutMe}
            </div>
        </div>
        <p style={{textAlign: "center", fontWeight: '600', fontSize: '20px'}}>Other Contacts:</p>
        <div className={styles.user_contact}>
            <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    // @ts-ignore
                    return <Contact editMode={editMode} key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                }
            )}</div>
        </div>
    </div>
}

export const Contact: React.FC<ContactPropsType> = ({contactTitle, contactValue, editMode}) => {
    const editModeNotTrue = <div><b>{contactTitle}</b>: {contactValue} </div>
    return <div>
        {editMode ? contactValue : editModeNotTrue}
    </div>
}


//Types
type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
    editMode: boolean
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
    editMode: boolean
}
type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (photo: File) => void
}

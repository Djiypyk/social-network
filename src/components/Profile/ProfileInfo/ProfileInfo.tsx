import styles from "./ProfileInfo.module.css";
import React from "react";
import {ProfileType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../common/Preloader11";
import userNoPhoto from '../../Users/assets/img/noAvatar.jpg'
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status, updateStatus}) => {
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
                <div className={styles.content_about_user}>
                    <div style={{display: "flex", justifyContent: 'flex-start'}}>
                        <img
                            className={styles.avatar}
                            src={profile?.photos?.small || userNoPhoto}
                            alt="Avatar Icon"
                        />
                        <div>
                            <h1>{profile.fullName}</h1>
                            <p>{profile.aboutMe}</p>
                            <ProfileStatus status={status} updateUserStatus={updateStatus}/>
                        </div>

                    </div>
                    <div>{profile.lookingForAJob &&
                    <div style={{fontWeight: '600', color: 'darkblue'}}><p style={{marginBottom: '-10px'}}>В поиске
                        работы: </p><p>{profile.lookingForAJobDescription}</p></div>}</div>
                </div>
                <p style={{textAlign: "center", fontWeight: '600', fontSize: '20px'}}>Other Contacts:</p>
                <div className={styles.user_contact}>
                    {profile.contacts.vk &&
                    <p><a target={'_blank'} rel='noreferrer noopener' href={`https:/${profile.contacts.vk}`}>VK </a>
                    </p>}
                    {profile.contacts.instagram &&
                    <p><a target={'_blank'} rel='noreferrer noopener'
                          href={`https:/${profile.contacts.instagram}`}>Instagram </a></p>}
                    {profile.contacts.youtube &&
                    <p><a target={'_blank'} rel='noreferrer noopener'
                          href={`https:/${profile.contacts.youtube}`}>YouTube </a></p>}
                    {profile.contacts.facebook &&
                    <p><a target={'_blank'} rel='noreferrer noopener'
                          href={`https:/${profile.contacts.facebook}`}>Facebook </a></p>}
                    {profile.contacts.github &&
                    <p><a target={'_blank'} rel='noreferrer noopener'
                          href={`https:/${profile.contacts.github}`}>GitHub </a></p>}
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;


//Types

export type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

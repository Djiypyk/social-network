import React from "react";
import {ProfileType} from "../../../../../Redux/profile-reducer";
import {TextField, Typography} from "@mui/material";
import styles from "../../ProfileInfo.module.css";
import {Contact} from '../../ProfileInfo'

export const ProfileDataForm: React.FC<ProfileDataFormPropsType> = ({profile}) => {
    return <form>
        {/*<button onClick={goToEditMode}>Save</button>*/}
        <div><Typography component={'div'} variant={'h6'}><b>Full Name</b>:<TextField size={'small'}></TextField></Typography>
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
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                }
            )}</div>
        </div>
    </form>
}

//Types
type ProfileDataFormPropsType = {
    profile: ProfileType
    isOwner: boolean
}
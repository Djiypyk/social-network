import React from "react";
import {ProfileType, saveProfileTC} from "../../../../../Redux/profile-reducer";
import {Button, Checkbox, FormControlLabel, TextField, Typography} from "@mui/material";
import styles from "../../ProfileInfo.module.css";
import {Contact} from '../../ProfileInfo'
import {useFormik} from "formik";
import {useDispatch} from "react-redux";

export const ProfileDataForm: React.FC<ProfileDataFormPropsType> = ({
                                                                        initialValues,
                                                                        profile,
                                                                        goCloseEditMode,
                                                                        editMode
                                                                    }) => {
    const dispatch = useDispatch()

    const formik = useFormik({

        validate: () => {

        },
        // initialValues: initialValues,
        initialValues: {
            aboutMe: profile.aboutMe,
            contacts: {
                facebook: profile.contacts.facebook,
                website: profile.contacts.website,
                vk: profile.contacts.vk,
                twitter: profile.contacts.twitter,
                instagram: profile.contacts.instagram,
                youtube: profile.contacts.youtube,
                github: profile.contacts.github,
                mainLink: profile.contacts.mainLink,
            },
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            fullName: profile.fullName,
            userId: profile.userId,
            photos: {
                small: profile.photos?.small,
                large: profile.photos?.large,
            },
        },
        onSubmit: (values: ProfileType) => {
            dispatch(saveProfileTC(values))
            goCloseEditMode()
        }
    })

    return <form onSubmit={formik.handleSubmit}>
        <Button type={'submit'} variant={'contained'} color={'primary'}>Save</Button>
        <div><Typography component={'div'} variant={'h6'}> <TextField
            type={'Full Name'}
            label={'fullName'}
            margin="normal"
            {...formik.getFieldProps('fullName')}
            size={'small'}/></Typography>
            <div>
                <b>Looking for a job: </b>
                <FormControlLabel
                    label={''}
                    control={
                        <Checkbox
                            {...formik.getFieldProps('lookingForAJob')}
                            checked={formik.values.lookingForAJob}
                        />}/>
            </div>
            <div>
                <b>My skills:</b>
                <TextField
                    type={'lookingForAJobDescription'}
                    label={'Looking For A Job Description'}
                    margin="normal"
                    {...formik.getFieldProps('lookingForAJobDescription')}
                    size={'small'}/>
            </div>
            <div>
                <TextField
                    type={'aboutMe'}
                    label={'About Me'}
                    margin="normal"
                    {...formik.getFieldProps('aboutMe')}
                    size={'small'}/>
            </div>
        </div>
        <p style={{textAlign: "center", fontWeight: '600', fontSize: '20px'}}>Other Contacts:</p>
        <div className={styles.user_contact}>
            <div><b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                    // @ts-ignore
                    const contactsValue = profile.contacts[key]
                    return <div key={key}><TextField
                        type={key}
                        label={key}
                        margin="normal"
                        {...formik.getFieldProps(`${key}`)}
                        size={'small'}/>
                        <Contact editMode={editMode} contactTitle={key} contactValue={contactsValue}/>
                    </div>

                }
            )}</div>
        </div>
    </form>
}

//Types
type ProfileDataFormPropsType = {
    profile: ProfileType
    goCloseEditMode: () => void
    isOwner: boolean
    editMode: boolean
    initialValues: ProfileType
}
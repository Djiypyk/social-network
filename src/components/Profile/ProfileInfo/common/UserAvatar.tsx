import React, {ChangeEvent} from "react";
import {ProfileType} from "../../../../Redux/profile-reducer";
import {Card, CardContent, CardMedia} from "@mui/material";
import userNoPhoto from "../../../Users/assets/img/noAvatar.jpg";


export const UserAvatar: React.FC<UserAvatarPropsType> = ({
                                                              profile, isOwner,
                                                              savePhoto
                                                          }) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            savePhoto(e.target.files[0])
        }
    }

    return (<Card sx={{width: 250, background: 'dodgerblue', position: 'relative'}} raised>
        <CardMedia
            component="img"
            height="230"

            image={profile.photos?.large || userNoPhoto}
            alt=''
            sx={{borderRadius: '50%', padding: '10px', width: '230px'}}
        />
        <CardContent>
            <div>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            </div>
        </CardContent>
    </Card>)
}


//Types

type UserAvatarPropsType = {
    profile: ProfileType
    isOwner: boolean
    savePhoto: (photo: File) => void
}
import React from "react";
import styles from "./User.module.css";
import {NavLink} from "react-router-dom";
import userNoPhoto from "../assets/img/noAvatar.jpg";
import {Button} from "@mui/material";
import {UserType} from "../../../Redux/users-reducer";

export const User: React.FC<UserPropsType> = ({
                                                  user,
                                                  unFollowUser,
                                                  followingProgress,
                                                  followUser
                                              }) => {
    return (
        <div>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img className={styles.avatar_img}
                             src={user.photos.small !== null ? user.photos.small : userNoPhoto}
                             alt="Avatar user"/>
                    </NavLink>
                </div>
                <div style={{marginBottom: '10px'}}>
                    {user.followed
                        ? <Button size={'small'} color={'primary'}
                                  variant={'contained'} disabled={followingProgress
                            .some(id => id === user.id)} onClick={() => {
                            unFollowUser(user.id)
                        }}> Unfollow</Button>

                        : <Button size={'small'} color={'primary'}
                                  variant={'contained'}
                                  disabled={followingProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      followUser(user.id)
                                  }}> Follow</Button>}
                </div>
            </div>
            <span>
                <span>
                    <div className={styles.name}>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div></span>
                    <div>{"user.location.city"}</div>
            </span>
        </div>
    )
}

//Types
type UserPropsType = {
    user: UserType
    followingProgress: string[]
    unFollowUser: (userId: string) => void
    followUser: (userId: string) => void
}

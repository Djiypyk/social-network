import React from "react";
import styles from './Users.module.css'
import {UserType} from "../../Redux/users-reducer";
import {v1} from "uuid";
import  axios from "axios";
import userNoPhoto from './assets/img/noAvatar.jpg'

type UsersPageType = {
    unFollowUser: (userID: string) => void
    followUser: (userID: string) => void
    setUsers: (users: UserType[]) => void
    users: UserType[]
}

const Users: React.FC<UsersPageType> = (props) => {

    debugger
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
            response =>  (props.setUsers(response.data.items)))
    }
    // const unFollowUser = (userID: string) => {
    //     props.unFollowUser(userID)
    // }
    // const followUser = (userID: string) => {
    //     props.followUser(userID)
    // }
    // const setUsers = (users: UserType) => {
    //     props.setUsers(users)
    // }


    return (
        <div>{props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img className={styles.avatar_img}
                         src={u.photos.small != undefined ? u.photos.small : userNoPhoto}
                         alt="Avatar user"/>
                </div>
                <div>
                    {u.followed ?
                        <button onClick={() => props.unFollowUser(u.id)}> Unfollow</button>
                        : <button onClick={() => props.followUser(u.id)}> Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div></span>
                    <div>{"u.location.city"}</div>
            </span>
        </div>)}</div>
    )
}

export default Users
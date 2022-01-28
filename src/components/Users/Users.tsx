import React from "react";
import styles from './Users.module.css'
import {UserType} from "../../Redux/users-reducer";

type UsersPageType = {
    unFollowUser: (userID: string) => void
    followUser: (userID: string) => void
    setUsers: (users: UserType) => void
    users: UserType[]
}

const Users: React.FC<UsersPageType> = (props) => {


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
                    <img width={'50px'}
                         src={u.photoUrl}
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
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div></span>
                    <div>{u.location.city}</div>
            </span>
        </div>)}</div>
    )
}

export default Users
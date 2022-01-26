import React from "react";
import styles from './Users.module.css'
import {UserType} from "../../Redux/users-reducer";

type UsersPageType = {
    unFollowUser: (userID: string) => void
    followUser: (userID: string) => void
    setUsers : (users: UserType) => void
}

const Users: React.FC<UsersPageType> = (props) => {

   const unFollowUser = (userID: string) => {
       props.unFollowUser(userID)
   }
   const followUser = (userID:string) => {
       props.followUser(userID)
   }
   const setUsers = (users: UserType[]) => {
       props.setUsers(users)
   }


    return (
        <div>Users Page</div>
    )
}

export default Users
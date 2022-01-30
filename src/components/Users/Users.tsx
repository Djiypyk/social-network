import React from "react";
import styles from './Users.module.css'
import {UserType} from "../../Redux/users-reducer";
import axios from "axios";
import userNoPhoto from './assets/img/noAvatar.jpg'

type UsersPageType = {
    unFollowUser: (userID: string) => void
    followUser: (userID: string) => void
    setUsers: (users: UserType[]) => void
    users: UserType[]
    pagesCount: number
    totalUsersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
}

const Users: React.FC<UsersPageType> = (props) => {


    const onPageChanged = (p: number) => {
        props.setCurrentPage(p)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${props.pagesCount}`)
            .then(response => (props.setUsers(response.data.items)))

    }

    let pagesCount = Math.ceil(props.totalUsersCount / props.pagesCount)
    let pages: number[] = []
    debugger
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

        <div>
            <div className={styles.pages}>
                {pages.map(p => <span key={p}
                    onClick={() => onPageChanged(p)}
                    className={`${styles.normal} ${props.currentPage === p ? styles.selectedPage : ''}`}>{p}</span>)}
            </div>

            {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img className={styles.avatar_img}
                         src={u.photos.small !== null ? u.photos.small : userNoPhoto}
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
                    <div className={styles.name}>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div></span>
                    <div>{"u.location.city"}</div>
            </span>
                </div>
            )}
        </div>
    )
}

export default Users
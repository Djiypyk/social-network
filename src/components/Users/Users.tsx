import React from "react";
import styles from './Users.module.css'
import {UserType} from "../../Redux/users-reducer";

import userNoPhoto from './assets/img/noAvatar.jpg'

type UsersPageType = {
    unFollowUser: (userID: string) => void
    followUser: (userID: string) => void
    setUsers: (users: UserType[]) => void
    users: UserType[]
    // pagesCount: number
    // totalUsersCount: number
    currentPage: number
    onPageChanged: (page: number) => void
}

const Users: React.FC<UsersPageType> = (props) => {

    // let pagesCount = Math.ceil(props.totalUsersCount / props.pagesCount)
    let pages: number[] = []

    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }

    return (

        <div>
            <div className={styles.pages}>
                {pages.map(p => <span key={p}
                                      onClick={() => props.onPageChanged(p)}
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
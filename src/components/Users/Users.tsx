import React from "react";
import styles from './Users.module.css'
import {UserType} from "../../Redux/users-reducer";
import SearchForm, {filterValuesI} from "../SearchForm/SearchForm";
import {Paginator} from "./Paginator/Paginator";
import {User} from "./User/User";

type UsersPageType = {
    unFollowUser: (userId: string) => void
    followUser: (userId: string) => void
    onPageChanged: (page: number) => void
    users: UserType[]
    currentPage: number
    followingProgress: string[]
    onFilterChange: (filter: filterValuesI) => void
}

const Users: React.FC<UsersPageType> = ({users, onFilterChange, onPageChanged, currentPage, ...props}) => {
    return (
        <div>
            <div className={styles.pages}>
                <SearchForm onFilterChange={onFilterChange}/>
                <br/>
                <Paginator onPageChanged={onPageChanged} currentPage={currentPage}/>
            </div>
            {users.map(u =>
                <User user={u}
                      followUser={props.followUser}
                      unFollowUser={props.unFollowUser}
                      followingProgress={props.followingProgress}
                      key={u.id}
                />
            )}
        </div>
    )
}
export default Users
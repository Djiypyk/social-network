import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../Redux/users-reducer";
import Users from "./Users";

export type propsPostsType = mapStateType & mapDispatchType & ownPropsType

const UsersContainer: React.FC<propsPostsType> = (props) => {

    const followUser = (userID: string) => {
        props.followAC(userID)
    }

    const unFollowUser = (userID: string) => {
        props.unFollowAC(userID)
    }
    const setUsers = (users: UserType) => {
        props.setUsersAC(users)
    }


    return <Users followUser={followUser}
                  unFollowUser={unFollowUser}
                  setUsers={setUsers}
                  users={props.usersPage}
        />
}

type mapStateType = {
    usersPage: UserType[]

}

type mapDispatchType = {
    followAC: (userID: string) => void
    unFollowAC: (userID: string) => void
    setUsersAC: (users: UserType) => void
}

type ownPropsType = {}

const mapStateToProps = (state: AppStateType) => ({
    usersPage: state.usersPage.users
})


export default connect<mapStateType, mapDispatchType, ownPropsType, AppStateType>(
    mapStateToProps, {followAC, unFollowAC, setUsersAC})(UsersContainer)

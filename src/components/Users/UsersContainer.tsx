import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    followAC,
    setUsersAC,
    unFollowAC,
    setCurrentPageAC,
    totalUsersCountAC,
    UserType
} from "../../Redux/users-reducer";
import Users from "./Users";
import axios from "axios";


export type propsPostsType = mapStateType & mapDispatchType & ownPropsType

type mapStateType = {
    usersPage: UserType[]
    pagesCount: number
    totalUsersCount: number
    currentPage: number

}

type mapDispatchType = {
    followAC: (userID: string) => void
    unFollowAC: (userID: string) => void
    setUsersAC: (users: UserType[]) => void
    setCurrentPageAC: (currentPage: number) => void
    totalUsersCountAC: (totalCount: number) => void
}

type ownPropsType = {}


class UsersContainer extends React.Component<propsPostsType> {

    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesCount}`)
            .then(response => {
                this.setUsers(response.data.items);
                this.setTotalUserCount(response.data.totalCount)
            })
    }


    followUser = (userID: string) => {
        this.props.followAC(userID)
    }
    unFollowUser = (userID: string) => {
        this.props.unFollowAC(userID)
    }
    setUsers = (users: UserType[]) => {
        this.props.setUsersAC(users)
    }
    setCurrentPage = (currentPage: number) => {
        this.props.setCurrentPageAC(currentPage)
    }
    setTotalUserCount = (totalCounter: number) => {
        this.props.totalUsersCountAC(totalCounter)
    }

    render = () => {

        return <Users followUser={this.followUser}
                      unFollowUser={this.unFollowUser}
                      setUsers={this.setUsers}
                      setCurrentPage={this.setCurrentPage}
                      users={this.props.usersPage}
                      pagesCount={this.props.pagesCount}
                      totalUsersCount={this.props.totalUsersCount}
                      currentPage={this.props.currentPage}

        />
    }
}


const mapStateToProps = (state: AppStateType) => ({
    usersPage: state.usersPage.users,
    pagesCount: state.usersPage.pagesCount,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage

})


export default connect<mapStateType, mapDispatchType, ownPropsType, AppStateType>(
    mapStateToProps, {followAC, unFollowAC, setUsersAC, setCurrentPageAC, totalUsersCountAC})(UsersContainer)

import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    toggleIsFetchingAC,
    totalUsersCountAC,
    unFollowAC,
    UserType
} from "../../Redux/users-reducer";
import Users from "./Users";
import {Preloader} from "../common/Preloader";
import {API} from "../../api/api";


type propsPostsType = mapStateType & mapDispatchType & ownPropsType

type mapStateType = {
    usersPage: UserType[]
    pagesCount: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

}
type mapDispatchType = {
    followAC: (userID: string) => void
    unFollowAC: (userID: string) => void
    setUsersAC: (users: UserType[]) => void
    setCurrentPageAC: (currentPage: number) => void
    totalUsersCountAC: (totalCount: number) => void
    toggleIsFetchingAC: (isFetching: boolean) => void
}
type ownPropsType = {}

class UsersContainer extends React.Component<propsPostsType> {

    componentDidMount() {
        this.props.toggleIsFetchingAC(true)

        API.getUsers(this.props.currentPage, this.props.pagesCount)
            .then(data => {
                this.props.toggleIsFetchingAC(false)
                this.setUsers(data.items);
                this.setTotalUserCount(data.totalCount)
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
    toggleIsFetching = (isFetching: boolean) => {
        this.props.toggleIsFetchingAC(!isFetching)
    }
    onPageChanged = (pageNumber: number) => {
        this.setCurrentPage(pageNumber)
        this.props.toggleIsFetchingAC(true)
        API.getUsers(pageNumber, this.props.pagesCount)
            .then(data => {
                this.props.toggleIsFetchingAC(false)
                this.setUsers(data.items)
            })
    }

    render = () => {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users followUser={this.followUser}
                   unFollowUser={this.unFollowUser}
                   setUsers={this.setUsers}
                   onPageChanged={this.onPageChanged}
                   users={this.props.usersPage}
                   currentPage={this.props.currentPage}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    usersPage: state.usersPage.users,
    pagesCount: state.usersPage.pagesCount,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
})

export default connect<mapStateType, mapDispatchType, ownPropsType, AppStateType>(
    mapStateToProps, {
        followAC, unFollowAC, setUsersAC, setCurrentPageAC,
        totalUsersCountAC, toggleIsFetchingAC
    })(UsersContainer)

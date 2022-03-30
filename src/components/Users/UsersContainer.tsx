import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    followTC,
    getUsersTC,
    setCurrentPageAC,
    toggleIsFollowingProgressAC,
    unFollowTC,
    UserType
} from "../../Redux/users-reducer";
import Users from "./Users";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {filterValuesI} from "../SearchForm/SearchForm";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPagesCount,
    getTotalUsersCount,
    getUsers
} from "../../Redux/users-selectors";
import {CircularProgress} from "@mui/material";

class UsersContainer extends React.Component<propsPostsType> {
    componentDidMount() {
        const {currentPage, pagesCount} = this.props
        this.props.getUsersTC(currentPage, pagesCount)
    }

    setCurrentPage = (currentPage: number) => {
        this.props.setCurrentPageAC(currentPage)
    }
    toggleIsFollowingProgress = (isFetching: boolean, userId: string) => {
        this.props.toggleIsFollowingProgressAC(isFetching, userId)
    }
    onPageChanged = (pageNumber: number) => {
        const {pagesCount} = this.props
        this.props.getUsersTC(pageNumber, pagesCount)
    }
    onFilterChange = (filter: filterValuesI) => {
        const {pagesCount} = this.props
        this.props.getUsersTC(1, pagesCount, filter)
    }

    render = () => {
        return <>
            {this.props.isFetching ? <CircularProgress/> : null}
            <Users followUser={this.props.followTC}
                   unFollowUser={this.props.unFollowTC}
                   onPageChanged={this.onPageChanged}
                   users={this.props.usersPage}
                   currentPage={this.props.currentPage}
                   followingProgress={this.props.followingProgress}
                   onFilterChange={this.onFilterChange}
            />
        </>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    usersPage: getUsers(state),
    pagesCount: getPagesCount(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingProgress: getFollowingProgress(state)
})

export default compose<React.ComponentType>(
    connect<mapStateType, mapDispatchType, ownPropsType, AppStateType>(
        mapStateToProps, {
            unFollowTC, followTC, setCurrentPageAC,
            toggleIsFollowingProgressAC, getUsersTC
        }),
    WithAuthRedirect
)(UsersContainer)

// Types
type propsPostsType = mapStateType & mapDispatchType & ownPropsType
type mapStateType = {
    usersPage: UserType[]
    pagesCount: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingProgress: string[]
}
type mapDispatchType = {
    followTC: (userID: string) => void
    unFollowTC: (userID: string) => void
    setCurrentPageAC: (currentPage: number) => void
    toggleIsFollowingProgressAC: (isFetching: boolean, userId: string) => void
    getUsersTC: (currentPage: number, pagesCount: number, filter?: filterValuesI) => void
}
type ownPropsType = {}
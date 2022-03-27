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
import {Preloader} from "../common/Preloader11";
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

class UsersContainer extends React.Component<propsPostsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pagesCount)
    }

    setCurrentPage = (currentPage: number) => {
        this.props.setCurrentPageAC(currentPage)
    }
    toggleIsFollowingProgress = (isFetching: boolean, userId: string) => {
        this.props.toggleIsFollowingProgressAC(isFetching, userId)
    }
    onPageChanged = (pageNumber: number) => {
        this.props.getUsersTC(pageNumber, this.props.pagesCount)
    }
    onFilterChange = (filter: filterValuesI) => {
        this.props.getUsersTC(1, this.props.pagesCount, filter)
    }

    render = () => {
        return <>
            {this.props.isFetching ? <div style={{textAlign: 'center'}}><Preloader/></div> : null}
            <Users followUser={this.props.followTC}
                   unFollowUser={this.props.unFollowTC}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.toggleIsFollowingProgress}
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
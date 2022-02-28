import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    followAC,
    getUsersTC,
    setCurrentPageAC,
    toggleIsFollowingProgressAC,
    unFollowAC,
    UserType
} from "../../Redux/users-reducer";
import Users from "./Users";
import {Preloader} from "../common/Preloader";


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
    followAC: (userID: string) => void
    unFollowAC: (userID: string) => void
    setCurrentPageAC: (currentPage: number) => void
    toggleIsFollowingProgressAC: (isFetching: boolean, userId: string) => void
    getUsersTC: (currentPage: number, pagesCount: number) => void

}
type ownPropsType = {}

class UsersContainer extends React.Component<propsPostsType> {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.pagesCount)
    }


    followUser = (userID: string) => {
        this.props.followAC(userID)
    }
    unFollowUser = (userID: string) => {
        this.props.unFollowAC(userID)
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

    render = () => {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users followUser={this.followUser}
                   unFollowUser={this.unFollowUser}
                   onPageChanged={this.onPageChanged}
                   followingInProgress={this.toggleIsFollowingProgress}
                   users={this.props.usersPage}
                   currentPage={this.props.currentPage}
                   followingProgress={this.props.followingProgress}

            />
        </>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    usersPage: state.usersPage.users,
    pagesCount: state.usersPage.pagesCount,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingProgress: state.usersPage.followingInProgress
})

export default connect<mapStateType, mapDispatchType, ownPropsType, AppStateType>(
    mapStateToProps, {
        followAC, unFollowAC, setCurrentPageAC,
        toggleIsFollowingProgressAC, getUsersTC
    })(UsersContainer)

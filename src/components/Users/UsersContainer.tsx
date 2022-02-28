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
    followTC: (userID: string) => void
    unFollowTC: (userID: string) => void
    setCurrentPageAC: (currentPage: number) => void
    toggleIsFollowingProgressAC: (isFetching: boolean, userId: string) => void
    getUsersTC: (currentPage: number, pagesCount: number) => void

}
type ownPropsType = {}

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

    render = () => {
        return <>
            {this.props.isFetching ? <div style={{textAlign: 'center'}}> <Preloader/> </div>: null}
            <Users followUser={this.props.followTC}
                   unFollowUser={this.props.unFollowTC}
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
        unFollowTC, followTC, setCurrentPageAC,
        toggleIsFollowingProgressAC, getUsersTC
    })(UsersContainer)

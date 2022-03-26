import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getUserProfileTC, getUserStatusTC, ProfileType, updateUserStatusTC} from "../../Redux/profile-reducer";
import {withRouter} from "../common/WithRouter";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component<MapStatePropsType & MatchParams> {

    componentDidMount() {
        let userId = (this.props.match) ? this.props.match.params.userId : this.props.authorizedUserId
        if (userId) {
            this.props.getUserProfileTC(userId)
            this.props.getUserStatusTC(userId)
        }
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateUserStatusTC}/>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect<mapStateType, mapDispatchType, ownPropsType, AppStateType>(
        mapStateToProps, {
            getUserProfileTC, getUserStatusTC,
            updateUserStatusTC
        }),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)

//Types

type MatchParams = {
    match: {
        params: {
            userId: string
        }
    }
}

type mapStateType = {
    profile: ProfileType
    status: string
    authorizedUserId: number | null
}
type mapDispatchType = {
    getUserProfileTC: (userId: string | number) => void
    getUserStatusTC: (userId: string | number) => void
    updateUserStatusTC: (status: string) => void
}
type ownPropsType = {}

export type MapStatePropsType = mapStateType & mapDispatchType & ownPropsType

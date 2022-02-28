import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getUserProfileTC, ProfileType} from "../../Redux/profile-reducer";
import {withRouter} from "../common/WithRouter";


type MatchParams = {
    match: {
        params: {
            userId: string
        }
    }
}

type mapStateType = {
    profile: ProfileType
    isAuth: boolean
}
type mapDispatchType = {
    getUserProfileTC: (userId: string | number) => void
}
type ownPropsType = {}

export type MapStatePropsType = mapStateType & mapDispatchType & ownPropsType

class ProfileContainer extends React.Component<MapStatePropsType & MatchParams> {
    componentDidMount() {
        let userId = (this.props.match) ? this.props.match.params.userId : 16125
      this.props.getUserProfileTC(userId)
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})


export default connect<mapStateType, mapDispatchType, ownPropsType, AppStateType>(
    mapStateToProps, {getUserProfileTC})(withRouter(ProfileContainer))

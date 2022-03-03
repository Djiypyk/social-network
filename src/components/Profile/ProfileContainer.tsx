import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getUserProfileTC, ProfileType} from "../../Redux/profile-reducer";
import {withRouter} from "../common/WithRouter";
import {WithAuthRedirect} from "../../HOC/withAuthRedirect";


type MatchParams = {
    match: {
        params: {
            userId: string
        }
    }
}

type mapStateType = {
    profile: ProfileType
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
})


export default WithAuthRedirect(connect<mapStateType, mapDispatchType, ownPropsType, AppStateType>(
    mapStateToProps, {getUserProfileTC})(withRouter(ProfileContainer)))

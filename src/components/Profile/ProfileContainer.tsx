import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {ProfileType, setUserProfileAC} from "../../Redux/profile-reducer";
import {withRouter} from "../common/WithRouter";
import {profileAPI} from "../../api/profileAPI";


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
    setUserProfileAC: (profile: ProfileType) => void
}
type ownPropsType = {}

export type MapStatePropsType = mapStateType & mapDispatchType & ownPropsType

class ProfileContainer extends React.Component<MapStatePropsType & MatchParams> {
    componentDidMount() {

        let userId = (this.props.match) ? this.props.match.params.userId : 16125
        profileAPI.getProfile(userId)
            .then(response => {
                this.setUserProfile(response.data);
            })
    }

    setUserProfile = (profile: ProfileType) => {
        this.props.setUserProfileAC(profile)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): { profile: ProfileType } => ({
    profile: state.profilePage.profile
})


export default connect<mapStateType, mapDispatchType, ownPropsType, AppStateType>(
    mapStateToProps, {setUserProfileAC})(withRouter(ProfileContainer))

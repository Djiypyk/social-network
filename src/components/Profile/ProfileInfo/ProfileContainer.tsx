import React from "react";
import Profile from "../Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {ProfileType, setUserProfileAC} from "../../../Redux/profile-reducer";


type mapStateType = {
    profile: ProfileType
}
type mapDispatchType = {
    setUserProfileAC: (profile: ProfileType) => void
}
type ownPropsType = {}

export type propsPostsType = mapStateType & mapDispatchType & ownPropsType

class ProfileContainer extends React.Component<propsPostsType> {
    componentDidMount() {
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.setUserProfile(response.data);
            })
    }
    setUserProfile = (profile: ProfileType) => {
        this.props.setUserProfileAC(profile)
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile,
})

export default connect<mapStateType, mapDispatchType, ownPropsType, AppStateType>(
    mapStateToProps, {setUserProfileAC})(ProfileContainer)

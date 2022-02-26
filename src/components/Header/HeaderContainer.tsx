import React from "react";
import Header from "./Header";
import axios from "axios";
import {Preloader} from "../common/Preloader";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {setAuthUserDataAC, toggleIsFetchingAC, UserDataType} from "../../Redux/auth-reducer";

type propsPostsType = mapStateType & mapDispatchType & ownPropsType

type mapStateType = {
    isFetching: boolean
    isAuth: boolean
    login: string | null
}
type mapDispatchType = {
    setAuthUserDataAC: (data: UserDataType[]) => void
    toggleIsFetchingAC: (isFetching: boolean) => void
}
type ownPropsType = {}

class HeaderContainer extends React.Component<propsPostsType> {

    componentDidMount() {
        this.props.toggleIsFetchingAC(true)
        axios.get(
            `https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setAuthUserDataAC(response.data.data) // !!----> login, email, userId
                    this.props.toggleIsFetchingAC(false)
                }
            })
    }

    toggleIsFetching = (isFetching: boolean) => {
        this.props.toggleIsFetchingAC(!isFetching)
    }

    render = () => {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        </>

    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching: state.auth.isFetching
})

export default connect<mapStateType, mapDispatchType, ownPropsType, AppStateType>(
    mapStateToProps, {setAuthUserDataAC, toggleIsFetchingAC})(HeaderContainer);
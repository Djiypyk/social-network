import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Header} from "./Header";

class HeaderContainer extends React.Component<propsPostsType> {

    render = () => {
        return <>
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        </>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect<mapStateType, mapDispatchType, ownPropsType, AppStateType>(
    mapStateToProps,)(HeaderContainer);
type propsPostsType = mapStateType & mapDispatchType & ownPropsType
type mapStateType = {
    isAuth: boolean
    login: string | null
}
type mapDispatchType = {}
type ownPropsType = {}

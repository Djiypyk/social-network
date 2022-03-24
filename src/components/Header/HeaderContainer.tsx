import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";

type propsPostsType = mapStateType & mapDispatchType & ownPropsType

type mapStateType = {
    isAuth: boolean
    login: string | null
}
type mapDispatchType = {}
type ownPropsType = {}

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
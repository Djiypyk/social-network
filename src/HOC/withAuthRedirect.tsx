import {Navigate} from "react-router-dom";
import {PATH} from "../components/Navbar/Navbar";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../Redux/redux-store";


type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={PATH.login}/>
        return <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(RedirectComponent)

}
import React from "react";
import styles from './Login.module.css'
import {useFormik} from "formik";
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField} from "@mui/material";
import {loginTC} from "../../Redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {LoginDataType} from "../../api/headerAPI";
import {AppStateType} from "../../Redux/redux-store";
import {PATH} from "../Navbar/Navbar";
import {Navigate} from "react-router-dom";


const LoginForm: React.FC = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth)
    const formik = useFormik({
        validate: (values) => {
            if (!values.email) {
                return {
                    email: 'Email is required'
                }
            }
            if (!values.password) {
                return {
                    password: 'Password is required'
                }
            }
        },
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        onSubmit: (values: LoginDataType) => {
            dispatch(loginTC(values))
        }
    })


    if (isAuth) {
        return <Navigate to={PATH.profile}/>
    }
    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel>
                        <p>To log in get registered
                            <a href={'https://social-network.samuraijs.com/'}
                               target={'_blank'}
                               rel={'noreferrer'}> here
                            </a>
                        </p>
                        <p>or use common test account credentials:</p>
                        <p>Email: free@samuraijs.com</p>
                        <p>Password: free</p>
                    </FormLabel>
                    <FormGroup>
                        <TextField type={'email'}
                                   label={'Email'}
                                   margin="normal"
                                   {...formik.getFieldProps('email')}
                                   error={formik.touched.email && Boolean(formik.errors.email)}
                                   helperText={formik.touched.email && formik.errors.email}
                        />
                        <br/>
                        <TextField type={'password'}
                                   label={'Password'}
                                   margin="normal"
                                   {...formik.getFieldProps('password')}
                                   error={formik.touched.password && Boolean(formik.errors.password)}
                                   helperText={formik.touched.password && formik.errors.password}
                        />
                        <br/>
                        <FormControlLabel
                            label={'Remember me'}
                            control={
                                <Checkbox
                                    {...formik.getFieldProps('rememberMe')}
                                    checked={formik.values.rememberMe}
                                />}/>
                        <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
}

const Login: React.FC = () => {
    return <div className={styles.wrapperLogin}>
        <div><h1>LOGIN PAGE</h1></div>
        <LoginForm/>
    </div>
}

export default Login
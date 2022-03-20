import React from "react";
import styles from './Login.module.css'
import {Field, useFormik} from "formik";
import {Button, Checkbox, Container, FormControlLabel, TextField} from "@mui/material";


const LoginForm: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            password: '',
            rememberMe: false,
            email: '',
        },
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
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })

    return (
            <form onSubmit={formik.handleSubmit}>
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
                <FormControlLabel label={'rememberMe'}
                                  control={
                                      <Checkbox
                                          {...formik.getFieldProps('rememberMe')}
                                          checked={formik.values.rememberMe}
                                      />}/>
                <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
            </form>
    )
}


const Login: React.FC = () => {

    return <div className={styles.wrapperLogin}>
        <div><h1>LOGIN PAGE</h1></div>
        <LoginForm/>
    </div>
}

export default Login
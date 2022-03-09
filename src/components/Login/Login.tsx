import React from "react";
import styles from './Login.module.css'
import {Field, Form, Formik, FormikHelpers} from "formik";
import * as yup from 'yup'

type ValuesType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC = (props) => {
    const validations = yup.object().shape({
        email: yup.string().required('Email is required'),
        password: yup.string().required('Password is required')
    })
    return (
        <Formik initialValues={{email: '', password: '', rememberMe: false}}
                onSubmit={(values: ValuesType, {setSubmitting}: FormikHelpers<ValuesType>) => setSubmitting(false)}
                validationSchema={validations}>
            {({
                  isSubmitting, values
              }) => {
                return (
                    <Form>
                        <div>
                            <label htmlFor="email">Your email: </label>
                            <br/>
                            <Field type={'email'} name={'email'}
                                   placeholder={'email'}
                                   value={values.email}
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Your password: </label>
                            <br/>
                            <Field type={'password'} name={'password'}
                                   placeholder={'password'}
                                   value={values.password}/>
                        </div>
                        <div>
                            <Field type={"checkbox"} name={'rememberMe'}/>{" remember me"}
                        </div>
                        <div>
                            <button className={styles.button} type={'submit'}
                                    onClick={() => console.log(values)} disabled={isSubmitting}>Send
                            </button>
                        </div>

                    </Form>
                )
            }
            }

        </Formik>
    )
}


const Login: React.FC = () => {

    return <div className={styles.wrapperLogin}>
        <h1>LOGIN PAGE</h1>
        <LoginForm/>
    </div>
}

export default Login
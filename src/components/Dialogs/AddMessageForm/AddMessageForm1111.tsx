import React from "react";
import styles from '../Dialogs.module.css'
import {useFormik} from "formik";
import {Button, FormControl, FormGroup, TextField} from "@mui/material";


type PropsType = {
    textBody: string
    sendMessageAC: (text: string) => void
}

export const AddMessageForm: React.FC<PropsType> = (props) => {
    const onSendMessage = (value: string) => {
        props.sendMessageAC(value)
    }
    const formik = useFormik({
        initialValues: {
            message: '',
        },
        validate: (values) => {
            if (!values.message) {
                return {
                    message: 'Please, write your text in field!'
                }
            }
        },
        onSubmit: values => {
            onSendMessage(values.message)
        }
    })

    return (
        <form className={styles.message_input} onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormGroup>
                    <TextField
                        fullWidth
                        type={'message'}
                        label={'Message'}
                        {...formik.getFieldProps('message')}
                        error={formik.touched.message && Boolean(formik.errors.message)}
                        helperText={formik.touched.message && formik.errors.message}
                    />
                    <Button size={'small'} color={'primary'}
                            variant={'contained'} type={'submit'}>Send message</Button>
                </FormGroup>
            </FormControl>
        </form>
    )
}


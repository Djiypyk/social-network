import React, {ChangeEvent} from "react";
import styles from '../Dialogs.module.css'
import {useFormik} from "formik";
import {Button, TextField} from "@mui/material";


type PropsType = {
    textBody: string
    onChangeMessageAC: (text: string) => void
    sendMessageAC: () => void
}

export const AddMessageForm: React.FC<PropsType> = (props) => {

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
            alert(JSON.stringify(values, null, 2));
        }
    })


    const messageBody = props.textBody

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value) {
            let body = e.currentTarget.value
            props.onChangeMessageAC(body)
        }
    }
    const onSendMessage = () => {
        props.sendMessageAC()
    }


    return (
        <form className={styles.message_input} onSubmit={formik.handleSubmit}>
            <div style={{width: "450px"}}>
                <TextField
                    fullWidth
                    type={'message'}
                    label={'Message'}
                    value={messageBody}
                    onChange={onNewMessageChange}
                />
            </div>
            <Button size={'small'} disabled={formik.values.message.length > 2} color={'primary'}
                    variant={'contained'} type={'submit'}
                    onClick={onSendMessage}>Send message</Button>
        </form>
    )
}


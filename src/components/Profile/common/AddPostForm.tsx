import React from "react";
import {useFormik} from "formik";
import styles from "../MyPosts/MyPost.module.css";
import {Button, FormControl, FormGroup, TextField} from "@mui/material";

export const AddPostForm: React.FC<AddPostFormType> = ({addNewPost}) => {

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
            addNewPost(values.message)
        }
    })

    return <div style={{width: "450px"}}>
        <form className={styles.message_input} onSubmit={formik.handleSubmit}>
            <FormControl>
                <FormGroup>
                    <TextField
                        type={"message"}
                        label={"Message"}
                        {...formik.getFieldProps("message")}
                        error={formik.touched.message && Boolean(formik.errors.message)}
                        helperText={formik.touched.message && formik.errors.message}
                    />
                    <Button size={"small"} disabled={formik.values.message.length === 0} color={"primary"}
                            variant={"contained"} type={"submit"}>Send message</Button>
                </FormGroup>
            </FormControl>
        </form>
    </div>;
}

//Types
type AddPostFormType = {
    addNewPost: (message: string) => void
}

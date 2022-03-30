import React from 'react';
import {Field, Form, Formik} from 'formik';

const SearchForm = (props: propsI) => {
    const {onFilterChange} = props
    const initialValues = {name: '', friends: 'null' as friendStatusType}
    const onSubmitHandler = (values: filterValuesI, {setSubmitting}: { setSubmitting: setSubmittingType }) => {
        const filters: filterValuesI = {
            name: values.name,
            friends: values.friends === 'null' ? 'null' : values.friends === 'true' ? 'true' : 'false'
        }
        onFilterChange(filters)
        setTimeout(() => setSubmitting(false), 500)
    }
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmitHandler}>
            {({isSubmitting}) => (
                <Form>
                    <Field type='text' name='name'/>
                    <Field as='select' name='friends'>
                        <option value='null'>All</option>
                        <option value='true'>Friends</option>
                        <option value='false'>Other</option>
                    </Field>
                    <button type='submit' disabled={isSubmitting}>Search</button>
                </Form>
            )}
        </Formik>
    );
};
export default SearchForm;

//Types
interface propsI {
    onFilterChange: (filter: filterValuesI) => void
}

export interface filterValuesI {
    name: string
    friends: friendStatusType
}

type friendStatusType = 'true' | 'false' | 'null'
type setSubmittingType = (isSubmitting: boolean) => void
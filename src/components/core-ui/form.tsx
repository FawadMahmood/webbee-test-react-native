import { Formik } from 'formik';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStateContext } from '../../utils/help';

interface FormProps {
    fields: ((props: object) => React.ReactNode[] | React.ReactNode)[]
    onSubmitForm?: any;
}

const Form = ({ fields, onSubmitForm }: FormProps) => {
    const FormContext = createStateContext();
    //  email: ''
    return (
        <Formik
            initialValues={{}}
            onSubmit={onSubmitForm?.bind(null)}
        >
            {({ handleChange, handleBlur, handleSubmit, values, setFieldValue }) => (
                <FormContext.Provider value={{ handleChange, handleBlur, handleSubmit, values, setFieldValue }}>
                    <View>
                        {fields && fields.map((_) => {
                            if (typeof (_) === "function") {
                                return _({ values: values });
                            }

                            return _;
                        })}
                    </View>
                </FormContext.Provider>
            )}
        </Formik>
    );
};

export default Form;

const styles = StyleSheet.create({
    container: {}
});

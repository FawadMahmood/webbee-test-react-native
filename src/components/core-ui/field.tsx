import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useStateContext } from '../../utils/help';

interface FieldProps {
    _key: string;
    value: any;
    values: any
    label: string;
}

const Field = ({ _key, value, values, label }: FieldProps) => {
    const formActions = useStateContext<FormElement>() as FormElement;

    const onChangeText = (text: string) => {
        if (formActions.setFieldValue) formActions.setFieldValue(_key, text)
        if (formActions.handleSubmit) formActions.handleSubmit();
    }


    return (
        <TextInput
            mode="outlined"
            label={label}
            value={values[_key]}
            defaultValue={value}
            onChangeText={onChangeText.bind(null)}
            onBlur={formActions.handleBlur?.bind(null, _key)}
            style={styles.container}
        />
    );
};

export default Field;

const styles = StyleSheet.create({
    container: { width: "100%" }
});

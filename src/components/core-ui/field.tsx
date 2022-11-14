import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useStateContext } from '../../utils/help';

interface FieldProps {
    _key: string;
    value: any;
    label: string;
}

const Field = ({ _key, value, label }: FieldProps) => {
    const formActions = useStateContext<FormElement>() as FormElement;

    return (
        <TextInput
            mode="outlined"
            label={label}
            value={value}
            defaultValue={value}
            onChangeText={formActions.onTextChanged.bind(null, _key)}
            // onBlur={formActions.handleBlur?.bind(null, _key)}
            style={styles.container}
        />
    );
};

export default Field;

const styles = StyleSheet.create({
    container: { width: "100%" }
});

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { MarginModifiers, View } from 'react-native-ui-lib';
import { useStateContext } from '../../utils/help';

interface FieldProps {
    _key: string;
    value: any;
    label: string;
}

const Field = ({ _key, value, label, ...modifiers }: FieldProps & MarginModifiers) => {
    const formActions = useStateContext<FormElement>() as FormElement;

    return (
        <View {...modifiers}>
            <TextInput

                mode="outlined"
                label={label}
                value={value}
                defaultValue={value}
                onChangeText={formActions.onTextChanged.bind(null, _key)}
                style={styles.container}
            />
        </View>
    );
};

export default Field;

const styles = StyleSheet.create({
    container: { width: "100%" }
});

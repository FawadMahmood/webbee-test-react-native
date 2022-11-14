import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStateContext } from '../../utils/help';

interface FormProps {
    fields: React.ReactNode
    onTextChanged?: (key: string, value: string) => void;
}

const Form = ({ fields, onTextChanged }: FormProps) => {
    const FormContext = createStateContext();
    return (
        <FormContext.Provider value={{ onTextChanged }}>
            <View>
                {fields}
            </View>
        </FormContext.Provider>
    );
};

export default Form;

const styles = StyleSheet.create({
    container: {}
});

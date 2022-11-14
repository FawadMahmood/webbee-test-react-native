import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

interface AttributesFieldProps {
    id: string;
}

const AttributesField = ({ id }: AttributesFieldProps) => {
    const attribue = useSelector((s: AppState) => s.fields.byIds[id]);

    console.log("all attribues are here", attribue);


    return (
        <View style={styles.container}>
            <Text>AttributesField</Text>
        </View>
    );
};

export default AttributesField;

const styles = StyleSheet.create({
    container: {}
});

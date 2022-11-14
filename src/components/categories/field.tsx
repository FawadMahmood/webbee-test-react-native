import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

interface FieldProps {
    id: string;
}

const Field = ({ id }: FieldProps) => {
    const attribue = useSelector((s: AppState) => s.fields.byIds[id]);

    console.log("all attribues are here", attribue);


    return (
        <View style={styles.container}>
            <Text>FIELD COMPONENT</Text>
        </View>
    );
};

export default Field;

const styles = StyleSheet.create({
    container: {}
});

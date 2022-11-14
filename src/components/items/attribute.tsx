import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

interface AttributeProps {
    id: string;
}

const Attribute = ({ id }: AttributeProps) => {
    const attribite = useSelector((s: AppState) => s.attributes.byIds[id]);

    console.log("have this attribute", attribite);

    return (
        <View style={styles.container}>
            <Text>Attribute</Text>
        </View>
    );
};

export default Attribute;

const styles = StyleSheet.create({
    container: {}
});

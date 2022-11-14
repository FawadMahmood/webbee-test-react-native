import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

interface AttributeProps {
    id: string;
}

const Attribute = ({ id }: AttributeProps) => {
    const attribite = useSelector((s: AppState) => s.attributes.byIds[id]);

    const fieldIds = useSelector((s: AppState) => s.categories.byIds[attribite.category_id].fieldIds);


    console.log("have this attribute", attribite.field_id, "fieldIds has", fieldIds);

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

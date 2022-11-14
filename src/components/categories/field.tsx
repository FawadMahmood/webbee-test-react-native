import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { removeFieldRelation } from '../../stores/categories/actions';
import { deleteField } from '../../stores/fields/actions';

interface FieldProps {
    id: string;
}

const Field = ({ id }: FieldProps) => {
    const dispatch = useDispatch();
    const attribue = useSelector((s: AppState) => s.fields.byIds[id]);

    const onRemoveField = () => {
        dispatch(removeFieldRelation({
            id: attribue.category_id,
            item_id: attribue.id,
        }));
        dispatch(deleteField(id));
    }

    return (
        <View style={styles.container}>
            <Text>{attribue.name}</Text>

            <Button onPress={onRemoveField.bind(null)}>REMOVE</Button>
        </View>
    );
};

export default Field;

const styles = StyleSheet.create({
    container: {}
});

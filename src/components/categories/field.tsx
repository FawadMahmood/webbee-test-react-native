import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Text, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import { Bounceable } from 'rn-bounceable';
import { removeFieldRelation } from '../../stores/categories/actions';
import { deleteField, updateField } from '../../stores/fields/actions';
import { theme } from '../../utils/constants';
import VectorIcon from '../vector';

interface FieldProps {
    id: string;
}

const Field = ({ id }: FieldProps) => {
    const dispatch = useDispatch();
    const attribue = useSelector((s: AppState) => s.fields.byIds[id]);

    const update = (field: Field) => {
        dispatch(updateField(field));
    }

    const onRemoveField = () => {
        dispatch(removeFieldRelation({
            id: attribue.category_id,
            item_id: attribue.id,
        }));

        dispatch(deleteField(id));
    }

    const onChangeText = (key: string, value: any) => {
        console.log("changed text", key, value);
        update({ ...attribue, [key]: value })
    }

    return (
        <View marginT-3 row style={styles.container}>
            <View flex>
                <TextInput mode="outlined" onChangeText={onChangeText.bind(null, 'name')} label={"Name"} value={attribue.name?.toString()} />
            </View>

            <View width={100} center>
                <Text vsmall wbold black>{attribue.type.toUpperCase()}</Text>
            </View>

            <View center width={30} >
                <Bounceable onPress={onRemoveField.bind(null)} contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}>
                    <VectorIcon vector={"Octicons"} name="trash" color={theme.color.red} size={20} />
                </Bounceable>
            </View>
        </View>
    );
};

export default Field;

const styles = StyleSheet.create({
    container: {}
});

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Picker, Text, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import { Bounceable } from 'rn-bounceable';
import { removeFieldRelation } from '../../stores/categories/actions';
import { deleteField, updateField } from '../../stores/fields/actions';
import { theme } from '../../utils/constants';
import VectorIcon from '../vector';

interface FieldProps {
    id: string;
}

const options = [
    { label: 'Text', value: 'text' },
    { label: 'Number', value: 'number' },
    { label: 'Checkbox', value: 'checkbox' },
    { label: 'Date', value: 'date' }
];


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

    const onUpdateType = (value: FieldType) => {
        update({ ...attribue, type: value })
    }


    return (
        <View marginT-3 row style={styles.container}>
            <View flex>
                <TextInput mode="outlined" onChangeText={onChangeText.bind(null, 'name')} label={"Name"} value={attribue.name?.toString()} />
            </View>

            <View width={100} center>
                {/* <Text vsmall wbold black>{attribue.type.toUpperCase()}</Text> */}
                {/* @ts-ignore */}
                <Picker
                    migrate
                    migrateTextField
                    value={attribue.type}
                    onChange={onUpdateType.bind(null)}
                    placeholder="Add New Item"
                    fieldType={Picker.fieldTypes.filter}
                    marginB-s3
                >
                    {options.map(filter => (
                        <Picker.Item key={filter.value} {...filter} />
                    ))}
                </Picker>
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

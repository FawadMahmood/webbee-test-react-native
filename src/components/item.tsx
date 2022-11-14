import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import { Bounceable } from 'rn-bounceable';
import { VectorIcon } from '.';
import { deleteField, updateField } from '../store/fields/actions';
import { theme } from '../utils/constants';
import Field from './core-ui/field';
import Form from './core-ui/form';

interface CategoryItemProps {
    id: string;
}

const CategoryItem = ({ id }: CategoryItemProps) => {
    const dispatch = useDispatch();
    const item = useSelector((s: AppState) => s.fields.find((x) => x.id === id)) as Field;

    const removeField = () => {
        dispatch(deleteField(item.id))
    }

    const update = (item: Field) => {
        dispatch(updateField(item));
    }

    const onTextChanged = (key: string, value: string) => {
        update({ ...item, [key]: value });
    }

    return (
        <View row spread marginV-5 height={60}>
            <View flex marginR-5>
                <Form
                    onTextChanged={onTextChanged.bind(null)}
                    fields={[
                        <Field label="Name" value={item.name} _key={'name'} />
                    ]}
                />
            </View>

            <View center width={100} marginT-6 height={"85%"} marginR-5 style={styles.border}>
                <Text vsmall wbold>{item.type.toUpperCase()}</Text>
            </View>

            <View center width={30} marginT-7 height={"80%"}>
                <Bounceable onPress={removeField.bind(null)} contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}>
                    <VectorIcon vector={"Octicons"} name="trash" color={theme.color.red} size={20} />
                </Bounceable>
            </View>
        </View>
    );
};

export default CategoryItem;

const styles = StyleSheet.create({
    container: {},
    border: {
        borderWidth: 1,
        borderColor: theme.color.blue,
        borderRadius: 10
    }
});

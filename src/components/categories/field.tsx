import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { Text, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import { Bounceable } from 'rn-bounceable';
import { removeFieldRelation } from '../../stores/categories/actions';
import { deleteField } from '../../stores/fields/actions';
import { theme } from '../../utils/constants';
import VectorIcon from '../vector';

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
        <View row style={styles.container}>
            <View flex>
                <TextInput mode="outlined" label={"Name"} value={attribue.value?.toString()} />
            </View>

            <View width={100} center>
                <Text wbold black>TEXT</Text>
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

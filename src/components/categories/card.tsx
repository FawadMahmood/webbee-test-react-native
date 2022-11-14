import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Text, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-native-uuid';
import { addField } from '../../stores/fields/actions';
import { addFieldRelation } from '../../stores/categories/actions';
import AttributesField from './attributes';

interface CategoryCardProps {
    id: string;
}

const CategoryCard = ({ id }: CategoryCardProps) => {
    const category = useSelector((s: AppState) => s.categories.byIds[id]);
    const fieldIds = useSelector((s: AppState) => s.categories.byIds[id].fieldIds);

    const dispatch = useDispatch();


    console.log("categories field ids got", fieldIds);

    const addNewField = React.useCallback(() => {
        const field: Field = {
            id: uuid.v4() as string,
            category_id: id,
            type: "text",
        }
        dispatch(addField(field));
        dispatch(addFieldRelation({ id: id, item_id: field.id }));
    }, [dispatch]);




    return (
        <View style={styles.container}>
            <Text>{category ? category.name : ""}</Text>

            {fieldIds && fieldIds.map((_, i) => {
                return (
                    <AttributesField key={_ + 'attribute'} id={_} />
                )
            })}

            <Button onPress={addNewField.bind(null)}>ADD NEW ITEM</Button>
        </View>
    );
};

export default CategoryCard;

const styles = StyleSheet.create({
    container: {}
});

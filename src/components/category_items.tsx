import { uniqueId } from 'lodash';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Text, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import { addField } from '../store/fields/actions';
import CategoryItem from './item';
import uuid from 'react-native-uuid';

interface CategoryItemsProps {
    id: string;
}

const CategoryItems = ({ id }: CategoryItemsProps) => {
    const dispatch = useDispatch();
    const fields = useSelector((s: AppState) => s.fields.filter((x) => x.category_id === id));
    console.log("CategoryItems", fields);


    const onAddNewItem = () => {
        const field: Field = {
            id: uuid.v4() as string,
            category_id: id,
            type: "text"
        }
        dispatch(addField(field));
    }

    return (
        <View marginV-10>
            <Text blue small marginB-5>Items</Text>

            {fields && fields.map((_) => {
                return (
                    <CategoryItem key={_.id} id={_.id} />
                )
            })}

            <Button onPress={onAddNewItem.bind(null)}>ADD NEW ITEM</Button>
        </View>
    );
};

export default CategoryItems;

const styles = StyleSheet.create({
    container: {}
});

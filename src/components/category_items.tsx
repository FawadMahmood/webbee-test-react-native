import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import { addField } from '../stores/fields/actions';
import CategoryItem from './item';
import uuid from 'react-native-uuid';
import SelectDropdown from 'react-native-select-dropdown'
import VectorIcon from './vector';

interface CategoryItemsProps {
    id: string;
}
const countries: FieldType[] = ["text", "number", "checkbox", "date"]

const CategoryItems = ({ id }: CategoryItemsProps) => {
    const dispatch = useDispatch();
    const fields = useSelector((s: AppState) => s.fields.filter((x) => x.category_id === id));
    console.log("CategoryItems", fields);


    const onAddNewItem = (type: FieldType) => {
        const field: Field = {
            id: uuid.v4() as string,
            category_id: id,
            type: type
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

            <SelectDropdown
                data={countries}
                onSelect={onAddNewItem.bind(null)}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                renderCustomizedButtonChild={() => {
                    return (
                        <View>
                            <Text>ADD NEW ITEM</Text>
                        </View>
                    )
                }}
                renderDropdownIcon={() => {
                    return (
                        <VectorIcon vector={"AntDesign"} name={'caretdown'} size={20} color={''} />
                    )
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}

            />

            {/* <Button onPress={onAddNewItem.bind(null)}>ADD NEW ITEM</Button> */}
        </View>
    );
};

export default CategoryItems;

const styles = StyleSheet.create({
    container: {}
});

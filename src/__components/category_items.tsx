import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import { addField } from '../stores/fields/actions';
import CategoryItem from './fieldItem';
import uuid from 'react-native-uuid';
import SelectDropdown from 'react-native-select-dropdown'
import VectorIcon from './vector';
import { If } from '@kanzitelli/if-component';

interface CategoryItemsProps {
    id: string;
}
const countries: FieldType[] = ["text", "number", "checkbox", "date"]

const CategoryItems = ({ id }: CategoryItemsProps) => {
    const dispatch = useDispatch();
    const fields = useSelector((s: AppState) => s.fields.filter((x) => x.category_id === id));


    const onAddNewItem = (type: FieldType) => {
        const field: Field = {
            id: uuid.v4() as string,
            category_id: id,
            type: type
        }
        dispatch(addField(field));
    }

    const _fields = (
        <React.Fragment>
            {fields.map((_) => {
                return (
                    <CategoryItem key={_.id + 'item'} id={_.id} />
                )
            })}
        </React.Fragment>
    );

    return (
        <View marginV-10>
            <Text blue small marginB-5>Items</Text>

            <If
                _={fields.length === 0}
                _then={
                    <Text>No More Items</Text>
                }
                _else={_fields}
            />

            <Text blue small marginV-10>Actions</Text>


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
                        <View center>
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
                    return item
                }}

                buttonStyle={{ width: "100%" }}
            />

        </View>
    );
};

export default CategoryItems;

const styles = StyleSheet.create({
    container: {}
});

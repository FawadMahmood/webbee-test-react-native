import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Divider, TextInput } from 'react-native-paper';
import { Card, Text, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-native-uuid';
import { addField } from '../../stores/fields/actions';
import { addFieldRelation, deleteCategory, updateCategory } from '../../stores/categories/actions';
import AttributesField from './field';
import { Bounceable } from 'rn-bounceable';
import { VectorIcon } from '../../components';
import { theme } from '../../utils/constants';
import SelectDropdown from 'react-native-select-dropdown';

interface CategoryCardProps {
    id: string;
}

const countries: FieldType[] = ["text", "number", "checkbox", "date"]


const CategoryCard = ({ id }: CategoryCardProps) => {
    const category = useSelector((s: AppState) => s.categories.byIds[id]);
    const fieldIds = useSelector((s: AppState) => s.categories.byIds[id].fieldIds);
    const dispatch = useDispatch();

    const onAddNewField = (type: FieldType) => {
        const field: Field = {
            id: uuid.v4() as string,
            category_id: id,
            name: "",
            type: type,
        }
        dispatch(addField(field));
        dispatch(addFieldRelation({ id: id, item_id: field.id }));
    }

    const removeCategory = () => {
        dispatch(deleteCategory(id));
    }

    const update = (field: Category) => {
        dispatch(updateCategory(field));
    }


    const onChangeText = (key: string, value: any) => {
        update({ ...category, [key]: value })
    }

    return (
        <Card width={'96%'} marginV-5 padding-15 style={[styles.container]}>
            <View row spread marginB-10>
                <Text large wbold style={styles.controlledWidth}>{category.name}</Text>
                <Bounceable onPress={removeCategory.bind(null)} contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}>
                    <VectorIcon vector={"AntDesign"} name="closecircle" color={theme.color.blue} size={30} />
                    <Text vsmall wregular>Remove</Text>
                </Bounceable>
            </View>

            <Divider />

            <TextInput mode="outlined" label={"Name"} onChangeText={onChangeText.bind(null, 'name')} value={category.name} />

            {fieldIds && fieldIds.map((_, i) => {
                return (
                    <AttributesField key={_ + 'attribute'} id={_} />
                )
            })}


            <View height={10} />
            <SelectDropdown
                data={countries}
                onSelect={onAddNewField.bind(null)}
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

            {/* <Button onPress={addNewField.bind(null)}>ADD NEW ITEM</Button> */}

        </Card>
    );
};

export default CategoryCard;

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        borderRadius: 10,
    },
    controlledWidth: {
        maxWidth: "80%",

    }
});

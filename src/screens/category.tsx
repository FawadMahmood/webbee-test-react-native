import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, addItemAndAttributeRelation } from '../stores/items/actions';
import uuid from 'react-native-uuid';
import { Button } from 'react-native-paper';
import { addItemRelation } from '../stores/categories/actions';
import { ItemCard } from '../components';
import { store } from '../stores';
import { addAttribute } from '../stores/attributes/actions';

interface CategoryProps {
    route: { params: { id: string } }
}

const Category = ({ route }: CategoryProps) => {
    const dispatch = useDispatch();
    // const columns = useColumns();

    const { id } = route.params;
    const category = useSelector((s: AppState) => s.categories.byIds[id])
    const itemIds = useSelector((s: AppState) => s.categories.byIds[id].itemIds)
    const fieldIds = useSelector((s: AppState) => s.categories.byIds[id].fieldIds)



    console.log("this category page got", fieldIds);

    const getRelevantTypeDataEmptyData = (type: FieldType) => {
        switch (type) {
            case "checkbox":
                return false
            case "date":
                return new Date();
            case "number":
                return 0;
            case "text":
                return "";
        }
    }


    // const items = store.getState().items.filter(s => s.category_id === id); ///useSelector((s: AppState) => s.items.filter(s => s.category_id === id))
    // useSelector((s: AppState) => s.items.length);
    // const fields = useSelector((s: AppState) => s.fields.filter((x) => x.category_id === id));

    const addNewItem = React.useCallback(() => {
        const new_item: Item = {
            id: uuid.v4().toString(),
            category_id: id,
            name: "New Item",
            attributeIds: []
        }
        dispatch(addItem(new_item));
        dispatch(addItemRelation({ id: id, item_id: new_item.id }));

        fieldIds.map((_, i) => {
            const field = store.getState().fields.byIds[_];
            console.log("field we can add", field);

            const attr = {
                id: uuid.v4().toString(),
                field_id: id,
                name: "New Attribute",
                type: field.type,
                value: getRelevantTypeDataEmptyData(field.type),
                category_id: id,
            };

            dispatch(addAttribute(attr));

            dispatch(addItemAndAttributeRelation({
                id: new_item.id,
                attrubute_id: attr.id
            }));
        })
    }, [dispatch, fieldIds]);

    // const renderItem = ({ item }: { item: Item, index: number }) => {
    //     return (
    //         <Item item={item} marginV-20 />
    //     )
    // }

    return (
        <View flex padding-15>
            <View row spread>
                <Text>{category.name}</Text>

                <Button onPress={addNewItem.bind(null)}>ADD NEW ITEM</Button>
            </View>

            {itemIds && itemIds.map((_) => {
                return (
                    <ItemCard key={_ + 'item_card'} id={_} />
                )
            })}


            {/* <View height={30} spread row centerV>
                <Text black wbold small>{category?.name}</Text>
                <Bounceable onPress={addNewItem.bind(null)} contentContainerStyle={{ justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
                    <VectorIcon vector={"AntDesign"} name="plus" color={theme.color.blue} size={20} />
                    <Text> Add New Item</Text>
                </Bounceable>
            </View>

            <FlashList
                numColumns={columns}
                data={items}
                renderItem={renderItem.bind(null)}
                estimatedItemSize={200}
                contentContainerStyle={styles.contentContainerStyle}
            /> */}

        </View>
    );
};

export default Category;

const styles = StyleSheet.create({
    container: {},
    contentContainerStyle: {
        paddingBottom: 20
    }
});

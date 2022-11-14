import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import { Bounceable } from 'rn-bounceable';
import { VectorIcon } from '../components';
import { theme } from '../utils/constants';
import uuid from 'react-native-uuid';
import { addItem } from '../stores/items/actions';
import { FlashList } from '@shopify/flash-list';
import { useColumns } from '../utils/columns';
import Item from '../components/item';
import { store } from '../stores';

interface CategoryProps {
    route: { params: { id: string } }
}

const Category = ({ route }: CategoryProps) => {
    const dispatch = useDispatch();
    const columns = useColumns();

    const { id } = route.params;
    const category = useSelector((s: AppState) => s.categories.find(s => s.id === id))
    const items = store.getState().items.filter(s => s.category_id === id); ///useSelector((s: AppState) => s.items.filter(s => s.category_id === id))
    useSelector((s: AppState) => s.items.length);
    const fields = useSelector((s: AppState) => s.fields.filter((x) => x.category_id === id));

    const addNewItem = React.useCallback(() => {
        const new_category: Item = {
            id: uuid.v4().toString(),
            category_id: id,
            name: "New Item",
            fields: fields
        }

        dispatch(addItem(new_category));
    }, [dispatch]);

    const renderItem = ({ item }: { item: Item, index: number }) => {
        return (
            <Item item={item} marginV-20 />
        )
    }

    return (
        <View flex padding-15>
            <View height={30} spread row centerV>
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
            />

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

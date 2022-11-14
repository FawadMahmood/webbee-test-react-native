import { FlashList } from '@shopify/flash-list';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import { Category } from '../components';
import { store } from '../stores';


interface ManageCategoriesProps { }

const ManageCategories = (props: ManageCategoriesProps) => {
    const dispatch = useDispatch();
    const categories = store.getState().categories;

    // to make sure whole list updates when length of categories changes
    // might help prevent render count for the whole screen
    useSelector((s: AppState) => s.categories.length);
    // might help prevent render count for the whole screen
    // to make sure whole list updates when length of categories changes

    const renderItem = ({ item }: { item: Category, index: number }) => {
        return (
            <Category id={item.id} marginV-20 />
        )
    }


    return (
        <View padding-10 flex spread bg-white>
            <FlashList
                data={categories}
                renderItem={renderItem.bind(null)}
                estimatedItemSize={200}
            />
        </View>
    );
};

export default ManageCategories;

const styles = StyleSheet.create({
    container: {}
});

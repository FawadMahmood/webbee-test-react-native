import { FlashList } from '@shopify/flash-list';
import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Button, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryCard } from '../components';
import { store } from '../stores';
import { addCategory } from '../stores/categories/actions';
import uuid from 'react-native-uuid';
import { useColumns } from '../utils/columns';


interface ManageCategoriesProps { }

const ManageCategories = (props: ManageCategoriesProps) => {
    const catIds = useSelector((s: AppState) => s.categories.allIds);

    console.log(catIds);

    const dispatch = useDispatch();
    const columns = useColumns();

    // React.useEffect(() => {
    //     setTimeout(() => {
    //         const new_category: Category = {
    //             id: uuid.v4().toString(),
    //             name: "New Category"
    //         }
    //         dispatch(addCategory(new_category));
    //     }, 5000);
    // }, [' '])


    // const categories = store.getState().categories;

    // // to make sure whole list updates when length of categories changes
    // // might help prevent render count for the whole screen
    // useSelector((s: AppState) => s.categories.length);
    // // might help prevent render count for the whole screen
    // // to make sure whole list updates when length of categories changes

    // const renderItem = ({ item }: { item: Category, index: number }) => {
    //     return (
    //         <Category id={item.id} marginV-20 />
    //     )
    // }

    const addNewCategory = React.useCallback(() => {
        const new_category: Category = {
            id: uuid.v4().toString(),
            name: "New Category",
            fieldIds: []
        }
        dispatch(addCategory(new_category));
    }, [dispatch]);


    return (
        <View flex spread bg-white>
            <ScrollView>
                {catIds && catIds.map((_) => {
                    return (
                        <CategoryCard key={_ + 'card'} id={_} />
                    )
                })}
            </ScrollView>


            {/* <FlashList
                numColumns={columns}
                data={categories}
                renderItem={renderItem.bind(null)}
                estimatedItemSize={200}
                contentContainerStyle={styles.contentContainerStyle}
            /> */}

            <Button onPress={addNewCategory} bg-black label="ADD NEW CATEGORY" style={styles.btn} />
        </View>
    );
};

export default ManageCategories;

const styles = StyleSheet.create({
    container: {},
    contentContainerStyle: {
        paddingBottom: 20
    },
    btn: {
        width: "90%",
        alignSelf: "center"
    }
});

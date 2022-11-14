import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Text, View } from 'react-native-ui-lib';

interface CategoryItemsProps {
    id: string;
}

const CategoryItems = ({ id }: CategoryItemsProps) => {

    console.log("CategoryItems", id);


    const onAddNewItem = () => {

    }

    return (
        <View marginV-10>
            <Text>CategoryItems</Text>

            <Button onPress={onAddNewItem.bind(null)}>ADD NEW ITEM</Button>

        </View>
    );
};

export default CategoryItems;

const styles = StyleSheet.create({
    container: {}
});

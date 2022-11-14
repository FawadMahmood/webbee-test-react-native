import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface ManageCategoriesProps { }

const ManageCategories = (props: ManageCategoriesProps) => {
    return (
        <View style={styles.container}>
            <Text>ManageCategories</Text>
        </View>
    );
};

export default ManageCategories;

const styles = StyleSheet.create({
    container: {}
});

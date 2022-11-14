import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface CategoryProps { }

const Category = (props: CategoryProps) => {
    return (
        <View style={styles.container}>
            <Text>Category</Text>
        </View>
    );
};

export default Category;

const styles = StyleSheet.create({
    container: {}
});

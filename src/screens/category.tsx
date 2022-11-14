import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface CategoryProps {
    route: { params: { id: string } }
}

const Category = ({ route }: CategoryProps) => {
    const { id } = route.params;

    console.log("collection id", id);

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

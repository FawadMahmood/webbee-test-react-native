import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

interface ItemCardProps {
    id: string;

}

const ItemCard = ({ id }: ItemCardProps) => {
    const item = useSelector((e: AppState) => e.items.byIds[id]);

    console.log("item I got", item);

    return (
        <View style={styles.container}>
            <Text>ItemCard</Text>
        </View>
    );
};

export default ItemCard;

const styles = StyleSheet.create({
    container: {}
});

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';

interface ItemCardProps {
    id: string;

}

const ItemCard = ({ id }: ItemCardProps) => {
    const item = useSelector((e: AppState) => e.items.byIds[id]);
    const attributeIds = useSelector((e: AppState) => e.items.byIds[id].attributeIds);


    console.log("item I got", attributeIds);

    return (
        <View style={styles.container}>
            <Text>ItemCard</Text>

            <Button>ADD NEW ATTRIBIUTE</Button>
        </View>
    );
};

export default ItemCard;

const styles = StyleSheet.create({
    container: {}
});

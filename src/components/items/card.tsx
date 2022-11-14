import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useSelector } from 'react-redux';
import Attribute from './attribute';

interface ItemCardProps {
    id: string;

}

const ItemCard = ({ id }: ItemCardProps) => {
    const item = useSelector((e: AppState) => e.items.byIds[id]);
    const attributeIds = useSelector((e: AppState) => e.items.byIds[id].attributeIds);

    return (
        <View style={styles.container}>
            <Text>ItemCard</Text>

            {attributeIds && attributeIds.map((_, i) => {
                return (
                    <Attribute id={_} />
                )
            })}

            <Button>ADD NEW ATTRIBIUTE</Button>
        </View>
    );
};

export default ItemCard;

const styles = StyleSheet.create({
    container: {}
});

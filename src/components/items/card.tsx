import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../stores';
import Attribute from './attribute';
import uuid from 'react-native-uuid';
import { addAttribute } from '../../stores/attributes/actions';
import { addItemAndAttributeRelation } from '../../stores/items/actions';
import { getRelevantTypeDataEmptyData } from '../../utils/help';

interface ItemCardProps {
    id: string;

}

const ItemCard = ({ id }: ItemCardProps) => {
    const dispatch = useDispatch();
    const item = useSelector((e: AppState) => e.items.byIds[id]);
    const fieldIds = useSelector((s: AppState) => s.categories.byIds[item.category_id].fieldIds);
    const attributeIds = useSelector((e: AppState) => e.items.byIds[id].attributeIds);


    // React.useEffect(() => {
    //     fieldIds.forEach((_, i) => {
    //         if (!attributeIds.includes(_)) {
    //             const field = store.getState().fields.byIds[_];
    //             const attr = {
    //                 id: uuid.v4().toString(),
    //                 field_id: field.id,
    //                 item_id: id,
    //                 name: "New Attribute",
    //                 type: field.type,
    //                 value: getRelevantTypeDataEmptyData(field.type),
    //                 category_id: id,
    //             };

    //             dispatch(addAttribute(attr));

    //             dispatch(addItemAndAttributeRelation({
    //                 id: id,
    //                 attrubute_id: attr.id
    //             }));
    //         }
    //     })
    // }, [fieldIds])


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

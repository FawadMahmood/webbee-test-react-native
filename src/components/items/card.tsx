import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Divider, TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../stores';
import Attribute from './attribute';
import uuid from 'react-native-uuid';
import { addAttribute } from '../../stores/attributes/actions';
import { addItemAndAttributeRelation, updateItem } from '../../stores/items/actions';
import { getRelevantTypeDataEmptyData } from '../../utils/help';
import { Card, Text, View } from 'react-native-ui-lib';
import { Bounceable } from 'rn-bounceable';
import VectorIcon from '../vector';
import { theme } from '../../utils/constants';

interface ItemCardProps {
    id: string;

}

const ItemCard = ({ id }: ItemCardProps) => {
    const dispatch = useDispatch();
    const item = useSelector((e: AppState) => e.items.byIds[id]);
    const fieldIds = useSelector((s: AppState) => s.categories.byIds[item.category_id].fieldIds);
    const attributeIds = useSelector((e: AppState) => e.items.byIds[id].attributeIds);



    const update = (field: Item) => {
        dispatch(updateItem(field));
    }




    const removeItem = () => {

    }

    const onChangeText = (key: string, value: any) => {
        update({ ...item, [key]: value })
    }

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
        <Card width={'96%'} marginV-5 padding-15 style={[styles.container]}>
            <View row spread marginB-10>
                <Text large wbold style={styles.controlledWidth}>{item.name}</Text>
                <Bounceable onPress={removeItem.bind(null)} contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}>
                    <VectorIcon vector={"AntDesign"} name="closecircle" color={theme.color.blue} size={30} />
                    <Text vsmall wregular>Remove</Text>
                </Bounceable>
            </View>

            <Divider />

            <TextInput mode="outlined" label={"Name"} onChangeText={onChangeText.bind(null, 'name')} value={item.name} />


            {attributeIds && attributeIds.map((_, i) => {
                return (
                    <Attribute id={_} />
                )
            })}

        </Card>
    );
};

export default ItemCard;

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        borderRadius: 10,
    },
    controlledWidth: {
        maxWidth: "80%",

    }
});

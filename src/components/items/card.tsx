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
    const category = useSelector((s: AppState) => s.categories.byIds[item.category_id]);

    // let title; //= useSelector((s: AppState) => s.)
    // // ? s.attributes.byIds[category.nameKey as string].name : item.name
    // console.log("title found", title, category.nameKey);
    // title = "aaa";
    // category.nameKey


    const update = (field: Item) => {
        dispatch(updateItem(field));
    }




    const removeItem = () => {

    }

    const onChangeText = (key: string, value: any) => {
        update({ ...item, [key]: value })
    }


    const getTitle = () => React.useCallback(() => {
        if (category.nameKey) {
            for (let i = 0; i < attributeIds.length; i++) {
                const attr = useSelector((s: AppState) => s.attributes.byIds[attributeIds[i]]);
                console.log("name key matched", attr, category.nameKey);

                if (attr.field_id === category.nameKey) {
                    return attr.name;
                }
            }
        } else {
            return item.name;
        }
    }, [category.nameKey]);

    // React.useEffect(() => {
    //     let toRemove: string[] = [];
    //     let _attr = []
    //     fieldIds.forEach((_, i) => {
    //         let isHave = false;

    //         attributeIds.map((_) => {
    //             const attr = store.getState().attributes.byIds[_];
    //             if (!fieldIds.includes(attr.field_id)) {
    //                 toRemove.push(attr.id);
    //             }
    //         });




    //         // if (!isHave) {

    //         //     isHave = false;
    //         // } else {
    //         //     isHave = false;
    //         // }

    //         // if (!attributeIds.includes(_)) {
    //         //     const field = store.getState().fields.byIds[_];

    //         //     const attr = {
    //         //         id: uuid.v4().toString(),
    //         //         field_id: field.id,
    //         //         item_id: item.id,
    //         //         name: "New Attribute",
    //         //         type: field.type,
    //         //         value: getRelevantTypeDataEmptyData(field.type),
    //         //         category_id: item.category_id,
    //         //     };

    //         //     console.log("seems like some attributes are missing", attr);

    //         //     dispatch(addAttribute(attr));

    //         //     dispatch(addItemAndAttributeRelation({
    //         //         id: attr.item_id,
    //         //         attrubute_id: attr.id
    //         //     }));
    //         // }
    //     });

    //     // const filteredArray = fieldIds.filter(value => missingKeys.includes(value));


    //     console.log("all missing items, ", fieldIds);


    // }, [fieldIds])

    const title = getTitle();


    return (
        <Card width={'96%'} marginV-5 padding-15 style={[styles.container]}>
            <View row spread marginB-10>
                <Text large wbold style={styles.controlledWidth}>{title}</Text>
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

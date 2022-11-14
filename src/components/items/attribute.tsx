import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAttribute } from '../../stores/attributes/actions';
import { removeItemAndAttributeRelation } from '../../stores/items/actions';

interface AttributeProps {
    id: string;
}

const Attribute = ({ id }: AttributeProps) => {
    const dispatch = useDispatch();
    const attribite = useSelector((s: AppState) => s.attributes.byIds[id]);
    const fieldIds = useSelector((s: AppState) => s.categories.byIds[attribite.category_id].fieldIds);
    const isExist = fieldIds.find(s => s === attribite.field_id);


    React.useEffect(() => {
        if (isExist === undefined && attribite) {
            console.log("YES REMOVED CAN SAFELY DELETE");
            dispatch(removeItemAndAttributeRelation({
                id: attribite.item_id,
                attrubute_id: attribite.id
            }));
            dispatch(deleteAttribute(attribite.id));
        }

    }, [isExist])

    // if (isExist === undefined && attribite) {

    //     dispatch(deleteAttribute(attribite.id));

    //     return null;
    // }


    console.log("have this attribute", attribite.field_id, "fieldIds has", fieldIds.find(s => s === attribite.field_id), isExist);

    return (
        <View style={styles.container}>
            <Text>Attribute</Text>
        </View>
    );
};

export default Attribute;

const styles = StyleSheet.create({
    container: {}
});

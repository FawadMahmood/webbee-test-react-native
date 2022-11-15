import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native-ui-lib';
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
    const field = useSelector((s: AppState) => s.fields.byIds[attribite.field_id]);

    console.log("field value", field);


    React.useEffect(() => {
        if (isExist === undefined && attribite) {
            console.log("YES REMOVED CAN SAFELY DELETE");
            dispatch(removeItemAndAttributeRelation({
                id: attribite.item_id,
                attrubute_id: attribite.id
            }));
            dispatch(deleteAttribute(attribite.id));
        }



    }, [isExist]);



    const update = (field: Attribute) => {
        // dispatch(updateItem(field));
    }

    const onChangeText = (key: string, value: any) => {
        update({ ...attribite, [key]: value })
    }

    console.log("have this attribute", attribite.field_id, "fieldIds has", fieldIds.find(s => s === attribite.field_id), isExist);

    return (
        <View marginT-10>
            <TextInput mode="outlined" label={field.name} onChangeText={onChangeText.bind(null, 'name')} value={attribite.name} />
        </View>

    );
};

export default Attribute;

const styles = StyleSheet.create({
    container: {}
});

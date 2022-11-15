import * as React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAttribute, updateAttribute } from '../../stores/attributes/actions';
import { removeItemAndAttributeRelation } from '../../stores/items/actions';
import { getKeyboardType } from '../../utils/help';

interface AttributeProps {
    id: string;
    onSetTitle: any;
    nameKey?: string;
}

const Attribute = ({ id, nameKey, onSetTitle }: AttributeProps) => {
    const dispatch = useDispatch();
    const attribite = useSelector((s: AppState) => s.attributes.byIds[id]);
    const fieldIds = useSelector((s: AppState) => s.categories.byIds[attribite.category_id].fieldIds);
    const field = useSelector((s: AppState) => s.fields.byIds[attribite.field_id]);
    const categoy = useSelector((s: AppState) => s.categories.byIds[attribite.category_id]);



    React.useEffect(() => {
        if (nameKey === attribite.field_id) {
            if (onSetTitle) onSetTitle(attribite.name)
        }
    }, [attribite, categoy.nameKey])

    const update = (field: Attribute) => {
        dispatch(updateAttribute(field));
    }

    const onChangeText = (key: string, value: any) => {
        update({ ...attribite, [key]: value })
    }


    if (!attribite || !field) {
        return null;
    }

    return (
        <View marginT-10>
            <TextInput keyboardType={getKeyboardType(field.type)} mode="outlined" label={field.name} onChangeText={onChangeText.bind(null, 'name')} value={attribite.name} />
        </View>

    );
};

export default Attribute;

const styles = StyleSheet.create({
    container: {}
});

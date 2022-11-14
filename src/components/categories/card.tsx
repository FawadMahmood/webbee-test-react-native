import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Divider, TextInput } from 'react-native-paper';
import { Card, Text, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-native-uuid';
import { addField } from '../../stores/fields/actions';
import { addFieldRelation } from '../../stores/categories/actions';
import AttributesField from './field';
import { Bounceable } from 'rn-bounceable';
import { VectorIcon } from '../../components';
import { theme } from '../../utils/constants';

interface CategoryCardProps {
    id: string;
}

const CategoryCard = ({ id }: CategoryCardProps) => {
    const category = useSelector((s: AppState) => s.categories.byIds[id]);
    const fieldIds = useSelector((s: AppState) => s.categories.byIds[id].fieldIds);

    const dispatch = useDispatch();

    const addNewField = React.useCallback(() => {
        const field: Field = {
            id: uuid.v4() as string,
            category_id: id,
            name: "New Field",
            type: "text",
        }
        dispatch(addField(field));
        dispatch(addFieldRelation({ id: id, item_id: field.id }));
    }, [dispatch]);

    const removeCategory = () => {

    }


    return (
        <Card width={'96%'} marginV-5 padding-15 style={[styles.container]}>
            <View row spread marginB-10>
                <Text large wbold style={styles.controlledWidth}>{category.name}</Text>
                <Bounceable onPress={removeCategory.bind(null)} contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}>
                    <VectorIcon vector={"AntDesign"} name="closecircle" color={theme.color.blue} size={30} />
                    <Text vsmall wregular>Remove</Text>
                </Bounceable>
            </View>

            <Divider />

            <TextInput mode="outlined" label={"Name"} value={category.name} />


            {fieldIds && fieldIds.map((_, i) => {
                return (
                    <AttributesField key={_ + 'attribute'} id={_} />
                )
            })}
        </Card>
    );
};

export default CategoryCard;

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        borderRadius: 10,
    },
    controlledWidth: {
        maxWidth: "80%",

    }
});

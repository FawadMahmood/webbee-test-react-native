import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Divider } from 'react-native-paper';
import { Text, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import { Bounceable } from 'rn-bounceable';
import { updateItem } from '../stores/items/actions';
import { theme } from '../utils/constants';
import Field from './core-ui/field';
import Form from './core-ui/form';
import VectorIcon from './vector';

interface ItemProps {
    item: Item;
}

const Item = ({ item }: ItemProps) => {
    const dispatch = useDispatch();


    const update = (item: Item) => {
        dispatch(updateItem(item));
    }

    const onTextChanged = (key: string, value: string) => {
        if (key.includes('items.')) {
            const ids = key.split('.');
            const indexToUpdate = item.fields.findIndex((s, i) => s.id === ids[1]);
            let _item: Item = { ...item };
            _item.fields[indexToUpdate].value = value;
            update(_item);
        } else {
            update({ ...item, [key]: value });
        }
    }

    const removeItem = () => {

    }

    const it = useSelector((s: AppState) => s.items.find((a) => a.id === item.id));


    return (
        <View marginV-5 style={styles.container}>
            <View row spread marginB-10>
                <Text large wbold style={styles.controlledWidth}>{item.name}</Text>
                <Bounceable onPress={removeItem.bind(null)} contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}>
                    <VectorIcon vector={"AntDesign"} name="closecircle" color={theme.color.blue} size={30} />
                    <Text vsmall wregular>Remove</Text>
                </Bounceable>
            </View>

            <Form
                onTextChanged={onTextChanged.bind(null)}
                fields={[
                    <Field marginB-5 key={'field_text'} label={"Name"} value={it?.name} _key={'name'} />,
                    it?.fields.map((_, i) => {
                        return (
                            <Field key={_.id + i} label={_.name as string} value={_.value} _key={"items" + "." + _.id} />
                        )
                    })
                ]}
            />
        </View>
    );
};

export default React.memo(Item);

const styles = StyleSheet.create({
    container: {
        borderWidth: 1
    },
    controlledWidth: {
        maxWidth: "80%",

    }
});

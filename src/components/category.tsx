import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, Incubator, Colors, MarginModifiers, PaddingModifiers, Card } from 'react-native-ui-lib';
const { TextField } = Incubator;
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, updateCategory } from '../stores/categories/actions';


import { VectorIcon } from '.';
import { theme } from '../utils/constants';
import { Bounceable } from 'rn-bounceable';
import { Divider } from 'react-native-paper';
import Field from './core-ui/field';
import Form from './core-ui/form';
import CategoryItems from './category_items';
import { useColumns } from '../utils/columns';

interface CategoryProps {
    id: string;
}

const Category = ({ id, ...modifiers }: CategoryProps & MarginModifiers & PaddingModifiers) => {
    const dispatch = useDispatch();


    const item = useSelector((s: AppState) => s.categories.find((s) => s.id === id)) as Category;

    const removeCategory = () => {
        dispatch(deleteCategory(item.id));
    }

    const update = (item: Category) => {
        dispatch(updateCategory(item));
    }

    const onTextChanged = (key: string, value: string) => {
        update({ ...item, [key]: value });
    }

    return (
        <Card width={'96%'} marginV-5 padding-15 style={[styles.container]}>
            <View row spread marginB-10>
                <Text large wbold style={styles.controlledWidth}>{item.name}</Text>
                <Bounceable onPress={removeCategory.bind(null)} contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}>
                    <VectorIcon vector={"AntDesign"} name="closecircle" color={theme.color.blue} size={30} />
                    <Text vsmall wregular>Remove</Text>
                </Bounceable>
            </View>

            <Divider />

            <Form
                onTextChanged={onTextChanged.bind(null)}
                fields={[
                    <Field key={'field_text'} label="Name" value={item.name} _key={'name'} />
                ]}
            />

            <CategoryItems id={item.id} />
        </Card>
    );
};

export default React.memo(Category);

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        borderRadius: 10,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 1,
    },
    withUnderline: {
        borderBottomWidth: 1,
        borderColor: Colors.$outlineDisabledHeavy,
        paddingBottom: 4
    },
    controlledWidth: {
        maxWidth: "80%",
    },


    border: {
        borderWidth: 1,
        borderColor: theme.color.blue,
        borderRadius: 10
    }
});

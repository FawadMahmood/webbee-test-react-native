import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, Incubator, Colors, Typography, MarginModifiers, PaddingModifiers, Card } from 'react-native-ui-lib';
const { TextField } = Incubator;
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory, updateCategory } from '../store/categories/actions';
import { Formik } from 'formik';
import { VectorIcon } from '.';
import { theme } from '../utils/constants';
import { Bounceable } from 'rn-bounceable';
import { Button, Divider, TextInput } from 'react-native-paper';
import Field from './core-ui/field';
import Form from './core-ui/form';

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

    const onUpdateFieldKey = (key: string, value: string) => {
        update({ ...item, [key]: value })
    }

    const customField = (dbProps: any, props: any) => {
        return (
            <View row spread marginV-5 height={60}>
                <View flex marginR-5>
                    <Field label="Field" value={item.name} _key={'name'} {...props} />
                </View>
                <View center width={100} marginT-6 height={"85%"} marginR-5 style={styles.border}>
                    <Text>TEXT</Text>
                </View>
                <View center width={30} marginT-7 height={"80%"}>
                    <Bounceable onPress={removeCategory.bind(null)} contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}>
                        <VectorIcon vector={"Octicons"} name="trash" color={theme.color.red} size={20} />
                    </Bounceable>
                </View>
            </View>
        )
    }

    const onSubmitForm = (form: object) => {
        update({ ...item, ...form })
    }

    const onAddNewItem = () => {
        const fields = (item.fields ? [...item.fields, { name: "", type: "text" }] : [{ name: "", type: "text" }]) as Field[]
        update({ ...item, fields: fields })
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

            <View marginT-10>
                <Form
                    onSubmitForm={onSubmitForm.bind(null)}
                    fields={item.fields ? [
                        (props: any) => <Field label="Name" value={item.name} _key={'name'} {...props} />,
                        ...item.fields?.map((_) => {
                            return customField.bind(null, _)
                        })
                    ] : [(props: any) => <Field label="Name" value={item.name} _key={'name'} {...props} />,]}
                />
            </View>

            <Button onPress={onAddNewItem.bind(null)}>ADD NEW ITEM</Button>
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

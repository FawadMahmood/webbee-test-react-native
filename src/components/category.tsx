import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, Incubator, Colors, Typography, MarginModifiers, PaddingModifiers } from 'react-native-ui-lib';
const { TextField } = Incubator;
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory } from '../store/categories/actions';
import { Formik } from 'formik';

interface CategoryProps {
    id: string;
}

const Category = ({ id, ...modifiers }: CategoryProps & MarginModifiers & PaddingModifiers) => {
    const dispatch = useDispatch();
    const item = useSelector((s: AppState) => s.categories.find((s) => s.id === id)) as Category;

    const removeCategory = () => {
        dispatch(deleteCategory(item.id));
    }


    return (
        <View padding-10 bg-white width={'96%'} marginV-5 height={300} style={[styles.container, styles.shadow]}>
            <View row spread>

            </View>
        </View>
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
});

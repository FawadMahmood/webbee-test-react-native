import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { useSelector } from 'react-redux';
import { Bounceable } from 'rn-bounceable';
import { VectorIcon } from '.';
import { theme } from '../utils/constants';
import Field from './core-ui/field';
import Form from './core-ui/form';

interface CategoryItemProps {
    id: string;
}

const CategoryItem = ({ id }: CategoryItemProps) => {
    const item = useSelector((s: AppState) => s.fields.filter((x) => x.id === id)[0]) as Field;



    console.log("item we got", item);


    const removeCategory = () => {

    }

    const onTextChanged = (key: string, value: string) => {
        console.log("onTextChanged", key, value);

    }

    return (
        <View row spread marginV-5 height={60}>
            <View flex marginR-5>
                <Form
                    onTextChanged={onTextChanged.bind(null)}
                    fields={[
                        <Field label="Name" value={item.name} _key={'name'} />
                    ]}
                />
            </View>

            <View center width={100} marginT-6 height={"85%"} marginR-5 style={styles.border}>
                <Text vsmall wbold>{item.type.toUpperCase()}</Text>
            </View>

            <View center width={30} marginT-7 height={"80%"}>
                <Bounceable onPress={removeCategory.bind(null)} contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}>
                    <VectorIcon vector={"Octicons"} name="trash" color={theme.color.red} size={20} />
                </Bounceable>
            </View>
        </View>
    );
};

export default CategoryItem;

const styles = StyleSheet.create({
    container: {},
    border: {
        borderWidth: 1,
        borderColor: theme.color.blue,
        borderRadius: 10
    }
});

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../stores/categories/actions';
import uuid from 'react-native-uuid';


interface DashboardProps { }

const Dashboard = (props: DashboardProps) => {
    const dispatch = useDispatch();


    const addNewItem = React.useCallback(() => {
        const new_category: Category = {
            id: uuid.v4().toString(),
            name: "New Category"
        }
        dispatch(addCategory(new_category));
    }, [dispatch]);

    return (
        <View style={styles.container}>

            <Text>Dashboard</Text>
        </View>
    );
};

export default Dashboard;

const styles = StyleSheet.create({
    container: {}
});

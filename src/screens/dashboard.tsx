import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../stores/categories/actions';
import uuid from 'react-native-uuid';


interface DashboardProps { }

const Dashboard = (props: DashboardProps) => {
    const dispatch = useDispatch();


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

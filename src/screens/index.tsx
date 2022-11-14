import * as React from 'react';
import { StyleSheet } from "react-native";

import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './dashboard';
import { Text, View } from 'react-native-ui-lib';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ManageCategories from './manage';
import Category from './category';


const Drawer = createDrawerNavigator();


export type ModalProps = {
  ExampleModal: undefined;
};

export type ScreenProps = {
  Main: undefined;
  Example: ExampleScreenProps;
  Settings: undefined;
} & ModalProps;


interface RootNavigationProps { }


// const Stack = createNativeStackNavigator();


const RootNavigation = (props: RootNavigationProps) => {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="dashboard" component={Dashboard} options={{ title: "Dashboard" }} />
      <Drawer.Screen name="manage" component={ManageCategories} options={{ title: "Manage Categories" }} />
      <Drawer.Screen name="category" component={Category} options={{ title: "Manage Categories" }} />
    </Drawer.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({
  container: {}
});

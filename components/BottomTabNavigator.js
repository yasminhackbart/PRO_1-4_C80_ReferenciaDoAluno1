import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//importe a biblioteca dos icones


import TransactionScreen from "../screens/Transaction";
import SearchScreen from "../screens/Search";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
          // escreva o código aqui
      
      
      
      
      
          })
          }
        >
          <Tab.Screen name="Transação" component={TransactionScreen} />
          <Tab.Screen name="Pesquisar" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

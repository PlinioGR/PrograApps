import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ProductosView from './Screens/productos';
import ProductosAdd from './Screens/productos_add';

function Home(){
  return(
  <View style ={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Inicio</Text>
    </View>
    )
}

function Config() {
  return (
    <View style ={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Configuraciones de app</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Productos" component={ProductosView} />
        <Tab.Screen name="Configuraciones" component={Config} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


export default App;

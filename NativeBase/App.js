import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import {Input} from 'react-native-elements';
import {collection, addDoc, doc, getDoc, getDocs} from 'firebase/firestore';
import {firebaseConfig} from './firebase_config';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from 'firebase/database';

import Login from './vistas/login';
import Signup from './vistas/Signup';
import { Stack } from 'native-base';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack= createStackNavigator;

function App () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Signup" component={Signup}/>
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}

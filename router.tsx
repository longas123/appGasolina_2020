import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,  } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import App from './App';

const Stack = createStackNavigator();

function header(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component= {App}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default router;
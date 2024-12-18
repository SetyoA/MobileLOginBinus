import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { HeaderShownContext } from '@react-navigation/elements';
import loginScreen from './screens/loginScreen';
import registerScreen from './screens/registerScreen'
import homescreen from './screens/welcomeScreen'


const Stack = createStackNavigator();

export default function Example() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login' screenOptions={{headerShown: false}}>
        <Stack.Screen name='login' component={loginScreen} />
        <Stack.Screen name='register' component={registerScreen} />
        <Stack.Screen name='Home' component={homescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

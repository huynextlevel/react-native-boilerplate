import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import RegisterScreen from '../screens/Authentication/Register/RegisterScreen';

const RegisterStack = createStackNavigator();

export default function RegisterStackScreen() {
  return (
    <RegisterStack.Navigator initialRouteName="Login">
      <RegisterStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={navigation => ({
          headerLeft: false,
          headerShown: false,
          gestureEnabled: false,
          headerStyle: {},
          headerTitle: false,
        })}
      />
    </RegisterStack.Navigator>
  );
}

const styles = StyleSheet.create({});

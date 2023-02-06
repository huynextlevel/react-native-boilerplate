import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from 'src/screens/Authentication/Login'

const LoginStack = createStackNavigator()

export default function LoginStackScreen() {
  return (
    <LoginStack.Navigator initialRouteName="LoginScreen">
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={navigation => ({
          headerLeft: false,
          headerShown: false,
          gestureEnabled: false,
          headerStyle: {},
          headerTitle: false,
        })}
      />
    </LoginStack.Navigator>
  )
}

const styles = StyleSheet.create({})

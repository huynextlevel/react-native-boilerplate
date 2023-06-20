import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import RegisterScreen from 'src/screens/Register'

const RegisterStack = createStackNavigator()

function RegisterStackScreen() {
  return (
    <RegisterStack.Navigator initialRouteName="RegisterScreen">
      <RegisterStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={() => ({
          headerTitle: '',
          headerShown: false,
          gestureEnabled: false,
          headerLeft: () => null,
        })}
      />
    </RegisterStack.Navigator>
  )
}

export default RegisterStackScreen

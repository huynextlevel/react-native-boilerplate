import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from 'src/screens/Login'

const LoginStack = createStackNavigator()

function LoginStackScreen() {
  return (
    <LoginStack.Navigator initialRouteName="LoginScreen">
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={() => ({
          headerTitle: '',
          headerShown: false,
          gestureEnabled: false,
          headerLeft: () => null,
        })}
      />
    </LoginStack.Navigator>
  )
}

export default LoginStackScreen

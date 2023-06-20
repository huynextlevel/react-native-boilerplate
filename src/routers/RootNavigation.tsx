import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainStack from './MainStack'
import LoginStack from './LoginStack'
import RegisterStack from './RegisterStack'

import SplashScreen from 'src/screens/Splash'

const Stack = createStackNavigator()

function NavigatorView({ uriPrefix }: { uriPrefix: string }) {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
      />
      <Stack.Screen
        name="Login"
        component={LoginStack}
        options={() => ({
          headerTitle: '',
          headerLeft: () => null
        })}
      />
      <Stack.Screen
        name="Register"
        component={RegisterStack}
        options={() => ({
          headerTitle: '',
          headerLeft: () => null
        })}
      />
      <Stack.Screen
        name="Main"
        component={MainStack}
      />
    </Stack.Navigator>
  )
}

export default NavigatorView

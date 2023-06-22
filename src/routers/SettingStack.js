import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SettingScreen from '../screens/Setting'

const SettingStack = createStackNavigator()

export default function SettingStackScreen() {
  return (
    <SettingStack.Navigator initialRouteName="SettingScreen">
      <SettingStack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={navigation => ({
          headerLeft: false,
          headerShown: false,
          gestureEnabled: true,
          headerTitle: false,
        })}
      />
    </SettingStack.Navigator>
  )
}

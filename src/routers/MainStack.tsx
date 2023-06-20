import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TabNavigator from './TabNavigator'

const MainStack = createStackNavigator()

function MainStackScreen() {
  return (
    <MainStack.Navigator initialRouteName="MainTab">
      <MainStack.Screen
        name="MainTab"
        component={TabNavigator}
        options={{
          headerTitle: '',
          headerShown: false,
          gestureEnabled: true,
          headerLeft: () => null,
        }}
      />
    </MainStack.Navigator>
  )
}

export default MainStackScreen

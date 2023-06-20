import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { colors } from 'src/styles'

import HomeScreen from 'src/screens/Home'
import SettingScreen from 'src/screens/Setting'

const Tab = createBottomTabNavigator()

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.black
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              size={30}
              style={{ color: focused ? colors.black : colors.greyLight }}
            />
          ),
          unmountOnBlur: false,
        })}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Icon
              name="settings"
              size={30}
              style={{ color: focused ? colors.black : colors.greyLight }}
            />
          ),
          unmountOnBlur: false,
        })}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator

import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { colors } from '../styles/index';
import HomeStack from './HomeStack';
import SettingStack from './SettingStack';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        activeTintColor: colors.black,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
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
        component={SettingStack}
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
  );
}

export default TabNavigator;

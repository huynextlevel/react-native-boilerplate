import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from '../screens/Setting/SettingScreen';

const SettingStack = createStackNavigator();

export default function SettingStackScreen() {
  return (
    <SettingStack.Navigator initialRouteName="Setting">
      <SettingStack.Screen
        name="Setting"
        component={SettingScreen}
        options={navigation => ({
          headerLeft: false,
          headerShown: false,
          gestureEnabled: true,
          headerTitle: false,
        })}
      />
    </SettingStack.Navigator>
  );
}

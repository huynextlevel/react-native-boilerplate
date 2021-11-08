import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Main">
      <Drawer.Screen
        name="Tab"
        component={TabNavigator}
        options={{
          title: 'Home',
          headerShown: false,
          gestureEnabled: true,
          drawerType: 'front',
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;

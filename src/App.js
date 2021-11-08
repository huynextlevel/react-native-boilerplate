import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { appStore } from './store';
import AppView from './routers/AppViewContainer';

LogBox.ignoreAllLogs();

const App = props => (
  <Provider store={appStore}>
    <NavigationContainer>
      <AppView />
    </NavigationContainer>
  </Provider>
);

export default App;

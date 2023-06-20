import React from 'react'
import { LogBox } from 'react-native'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import { appStore } from 'src/store'
import AppView from 'src/routers/AppViewContainer'

LogBox.ignoreAllLogs()

const App = () => {
  return (
    <Provider store={appStore}>
      <NavigationContainer>
        <AppView />
      </NavigationContainer>
    </Provider>
  )
}

export default App

import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'

import styles from './styles'
import {
  IProps
} from './types'
import * as appActions from 'src/store/action/app'
import { globalStyles } from 'src/styles'

const LoginScreen: React.FC<IProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const data = {
    username: 'username',
    password: 'password',
  };

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <TouchableOpacity
        style={globalStyles.buttonContainer}
        onPress={() => dispatch(appActions.login(data, navigation))}>
        <Text style={globalStyles.buttonTextContainer}>Go to Home Page</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalStyles.buttonContainer}
        onPress={() => navigation.navigate('Register')}>
        <Text style={globalStyles.buttonTextContainer}>
          Go to Register Page
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen;

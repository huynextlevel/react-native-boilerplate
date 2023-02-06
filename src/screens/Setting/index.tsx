import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'

import styles from './styles'
import {
  IProps
} from './types'
import * as appActions from 'src/store/action/app'
import { globalStyles } from 'src/styles'

const SettingScreen: React.FC<IProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(appActions.saveLoginData(null));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>SettingScreen</Text>
      <TouchableOpacity onPress={handleGoBack}>
        <Text style={globalStyles.goBackText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SettingScreen

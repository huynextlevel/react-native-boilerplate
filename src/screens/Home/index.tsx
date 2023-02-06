import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'

import styles from './styles'
import Welcome from '../Welcome'
import {
  IProps
} from './types'
import * as appActions from 'src/store/action/app'
import { globalStyles } from 'src/styles'

const HomeScreen: React.FC<IProps> = ({ navigation }) => {
  const dispatch = useDispatch()

  const handleGoBack = () => {
    dispatch(appActions.saveLoginData(null))
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <Welcome navigation={navigation} />
      <TouchableOpacity onPress={handleGoBack}>
        <Text style={globalStyles.goBackText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

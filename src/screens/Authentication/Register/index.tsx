import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import styles from './styles'
import {
  IProps
} from './types'
import { globalStyles } from 'src/styles'

const RegisterScreen: React.FC<IProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>RegisterScreen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={globalStyles.goBackText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RegisterScreen

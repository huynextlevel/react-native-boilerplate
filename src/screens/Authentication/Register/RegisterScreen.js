import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import { globalStyles } from 'src/styles';

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>RegisterScreen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={globalStyles.goBackText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

RegisterScreen.propTypes = {};

export default RegisterScreen;

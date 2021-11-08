import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import styles from './styles';
import * as appActions from 'src/store/action/app';
import { globalStyles } from 'src/styles';

const LoginScreen = ({ navigation }) => {
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
  );
};

LoginScreen.propTypes = {};

export default LoginScreen;

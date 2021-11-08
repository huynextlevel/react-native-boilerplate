import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import styles from './styles';
import * as appActions from 'src/store/action/app';
import { globalStyles } from 'src/styles';

const SettingScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(appActions.saveLoginData(null));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>SettingScreen</Text>
      <TouchableOpacity
        style={globalStyles.buttonContainer}
        onPress={() => navigation.toggleDrawer()}>
        <Text style={globalStyles.buttonTextContainer}>Open Drawer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoBack}>
        <Text style={globalStyles.goBackText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

SettingScreen.propTypes = {};

export default SettingScreen;

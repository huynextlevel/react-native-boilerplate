import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import styles from './styles';
import Welcome from '../Welcome';
import * as appActions from 'src/store/action/app';
import { globalStyles } from 'src/styles';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleGoBack = () => {
    dispatch(appActions.saveLoginData(null));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Welcome />
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

HomeScreen.propTypes = {};

export default HomeScreen;

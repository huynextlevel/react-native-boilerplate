import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(
    () =>
      navigation.addListener('focus', () => {
        setTimeout(() => navigation.navigate('Login'), 3000);
      }),
    [navigation],
  );

  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 10 }}>SplashScreen</Text>
      <ActivityIndicator color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

SplashScreen.propTypes = {};

export default SplashScreen;

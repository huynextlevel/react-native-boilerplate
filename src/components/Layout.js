import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Layout = ({ children, style }) => (
  <React.Fragment>
    <SafeAreaView style={[styles.container, style]} edges={['right', 'left']}>
      {children}
    </SafeAreaView>
  </React.Fragment>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Layout.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
};

export default Layout;

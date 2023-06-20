import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface IProps {
  style?: object
  children?: React.ReactNode
}

const Layout = ({ children, style }: IProps) => (
  <SafeAreaView style={[styles.container, style]} edges={['right', 'left']}>
    {children}
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Layout

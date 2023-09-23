import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import RepositoryList from './src/components/RepoList'
import Constants from 'expo-constants'

export default function App () {
  return (
    <View style={styles.container}>
      <RepositoryList />
      <StatusBar style='dark' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'top',
    justifyContent: 'center',
    flexDirection: 'column',
    resizeMode: 'cover',
    margin: Constants.statusBarHeight
  }
})

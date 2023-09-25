import AsyncStorage from '@react-native-async-storage/async-storage'
//import { AsyncStorage } from 'react-native'

export async function saveLocalStorageValue (key, value) {
  try {
    console.log('STORAGE Value: ', value)
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
    console.log('STORAGE: key:', key, ' value:', value)
  } catch (e) {
    throw new Error(e)
  }
}

export async function getLocalStorageValue (key) {
  try {
    const value = await AsyncStorage.getItem(key)
    console.log('STORAGE RECOVERED: ', value)
    if (value !== null) {
      return JSON.parse(value)
    }
  } catch (e) {
    throw new Error(e)
  }
}

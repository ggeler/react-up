import React from 'react'
import { useUserContext } from '../utils/UserContext'
import RegisterUser from './RegisterUser'
import { Text, View } from 'react-native'

export default function Login () {
  const state = useUserContext()
  //login()
  console.log(state)
  return (
    <View>
        {state.auth ? <Text>Hola {state.userDatos.nombre}!!!</Text> : <RegisterUser />}
    </View>
  )
}

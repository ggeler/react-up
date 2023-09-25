import React from 'react'
import { Button, TextInput, View } from 'react-native'
import { useUserContext, userType } from '../utils/UserContext'

export default function RegisterUser () {
  const [nombre, setNombre] = React.useState('')
  const [apellido, setApellido] = React.useState('')
  const { state, dispatch } = useUserContext()
  //const [state, dispatch] = React.useReducer(reducer, userType)
  return (
        <View>
            <TextInput placeholder='Nombre' onChangeText={e => setNombre(e)}/>
            <TextInput placeholder='Apellido' onChangeText={e => setApellido(e)}/>
            <Button title='Guardar' onPress={() => {
              console.log('Guardando: ', nombre, apellido)
              console.log('state: ', state)
              dispatch({ type: 'register', payload: { nombre, apellido } })
            }}
            />
        </View>
  )
}

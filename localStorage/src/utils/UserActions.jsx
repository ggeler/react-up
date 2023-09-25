import React, { useContext, useId, useState } from 'react'
import { getLocalStorageValue, saveLocalStorageValue } from './UserStorage'

const userDatosType = { nombre: null, apellido: null }
const userType = { id: null, auth: false, userDatosType }

export default function UserActions () {
  const [user, setUser] = useState(userType)
  //const [userDatos, setUserDatos] = useState(userDatosType)
  const newId = useId()
  const [state, dispatch] = React.useReducer(reducer, user)
  // login, logout, register
  function reducer (state, action) {
    switch (action.type) {
      case 'register':
        console.log('Reducer USER: ', action.payload)
        console.log('Register state', state)
        register(action.payload)
        break
      case 'login':
        login()
        break
      case 'logout':
        logout()
        break
      default:
        return state
    }
  }

  function register (userDatos) {
    console.log('REGISTER USER Datos: ', userDatos)
    //setUserDatos(userDatos)
    setUser({ id: newId, auth: true, userDatos })
    console.log('REGISTER USER: ', user)
    saveLocalStorageValue('user', { id: newId, auth: true, userDatos })
    getLocalStorageValue('user')
  }

  const login = () => {
    getLocalStorageValue('user').then(user => {
      console.log('USER LOGGED IN: ', user)
      setUser(user)
    })
  }

  const logout = () => {
    const [setUser] = useState(userType)
    setUser(userType)
  }

  return [state, dispatch]
}

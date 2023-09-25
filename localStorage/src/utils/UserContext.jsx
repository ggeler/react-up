import React, { createContext, useId, useState } from 'react'
import { getLocalStorageValue, saveLocalStorageValue } from './UserStorage'
import UserActions from './UserActions'

const userDatosType = { nombre: null, apellido: null }
const userType = { id: null, auth: false, userDatosType }

const userContext = createContext(userType)

const UserContextProvider = (props) => {
  const [state, dispatch] = UserActions()
  /*
  const [user, setUser] = useState(userType)
  const [userDatos, setUserDatos] = useState(userDatosType)
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
    setUserDatos(userDatos)
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
  */
  return (
    <userContext.Provider value={{ state, dispatch }}>
        {props.children}
    </userContext.Provider>
  )
}

function useUserContext () {
  const { context, dispatch } = React.useContext(userContext)
  if (context === undefined) {
    throw new Error('useUserContext debe ser usado dentro de UserContextProvider')
  }
  return [context, dispatch]
}

export { UserContextProvider, useUserContext }

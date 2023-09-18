import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import DeviceNumber from 'react-native-device-number'
import NetInfo from '@react-native-community/netinfo'
import TcpSocket from 'react-native-tcp-socket'
import { NetworkInfo } from 'react-native-network-info'
import GetIp from './GetIP'
/*
const ws = TcpSocket.createServer((socket) => {
  socket.on('connect', () => {
    console.log('Coneccion')
  })
}).listen(3333, '0.0.0.0')
ws.on('listening', () => {
  console.log('listening')
})

function getIp () {
  return new Promise((resolve, reject) => {
    const ip = require('ip')
    ip.address((err, address) => {
      if (err) {
        reject(err)
      } else {
        resolve(address)
      }
    })
  })
}
*/


export default function App () {
  /*
  NetInfo.fetch().then(state => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
    console.log("Is internet reachable?", state.isInternetReachable);
    console.log("Details", state.details);
  })
  const number = DeviceNumber?.get()
  
  const server = useEffect(() => {
    const ws = TcpSocket.createServer((socket) => {
      socket.on('connect', () => {
        console.log('Coneccion')
      })
    }).listen(3333, '0.0.0.0')
    ws.on('listening', () => {
      console.log('listening')
    })
    return ws
  }, [])

  const srv = React.useRef(server).current
  */
  
  return (
    <View style={styles.container}>
      <GetIp />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

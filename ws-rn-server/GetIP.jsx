import React, { useEffect } from 'react'
import { Text } from 'react-native'
import DeviceInfo from 'react-native-device-info'
import { NetworkInfo } from 'react-native-network-info'

function GetIp () {
  const [ipAddress, setIpAddress] = React.useState('')
  NetworkInfo.getIPAddress().then(ip => console.log(ip), error => console.log('error gg:' + error))
  
  console.log('Bran: ', DeviceInfo.getIpAddressSync())

  return (
    <>
    <Text>Hola IP</Text>
    <Text>IP: {ipAddress}</Text></>
  )
}

export default GetIp

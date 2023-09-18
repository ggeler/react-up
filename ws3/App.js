import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { useEffect } from 'react';
import { useState } from 'react';
import { NetworkInfo } from 'react-native-network-info'
import NetInfo from '@react-native-community/netinfo'
import { server } from './SocketServer'
import { CustomUdpSocket } from './UdpSocketServer'

const a = CustomUdpSocket(3001)
//const b = server
export default function App() {
  console.log('device log: ',DeviceInfo.getBaseOsSync())
  const [device, setDevice] = useState('')
  const [ip, setIp] = useState('')
  const [netInfo, setNetInfo] = useState()  
  const [connectionStatus, setConnectionStatus] = useState(false)
  const [connectionType, setConnectionType] = useState(null)
  const [isServer, setSetver] = useState(true)
  const handleNetworkChange = (state) => {
    setConnectionStatus(state.isConnected)
    setConnectionType(state.type)
    setIp(state.details.ipAddress)
    setNetInfo(state)
    console.log('netinfo: ',state)
  }
  
  //server.server()
  useEffect(() => {
    
   
  },[isServer])
  

  NetInfo.useNetInfo( (netinfo) => {
    console.log('netinfo2: ',netinfo)
  })

  useEffect(() => {
    const listener = NetInfo.addEventListener(handleNetworkChange) 
    //=> {
    //  console.log('State change Netinfo: ',handleNetworkChange) 
    //  setNetInfo(handleNetworkChange)
    //})
    return () => listener && listener()
  }, [])

  useEffect(() => {
    const getIp = async () => {
      //const ip = await NetworkInfo.getIPV4Address()
      const ip = await DeviceInfo.getIpAddress()
      setIp(ip)
      console.log('ip: ',ip)
      //setIp(ip)
    }
    getIp()
  }, [])

  useEffect(() => {
    const deviceInfo = async () => {
      //DeviceInfo.getBaseOs().then(os => setDevice(os))
      const os = await DeviceInfo.getBaseOs()
      setDevice(os)
      console.log('os: ',os)
    }
    deviceInfo()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Hola: {device}</Text>
      <Text>Ip: {ip}</Text>
      <Text>NetInfo: {JSON.stringify(netInfo)}</Text>
      <Text>Tipo: { connectionType }</Text>
      <Text>Status: { connectionStatus ? "Conectado" : "Desconectado" }</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

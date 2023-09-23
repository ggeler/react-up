import dgram from 'react-native-udp'

const CustomUdpSocket = (port) => {
    console.log('port ', port)
    let udpSocket = dgram.createSocket('udp4')
    udpSocket.bind(port, function(error) {
        console.log('bind error: ',error)
    })
    udpSocket.on('error', (err) => {
        console.log('error: ',err)
    })
    udpSocket.on('connection', (stream) => {
        console.log('connection')
    })
    udpSocket.on('message', (msg, rinfo) => {
        console.log('message: ',msg.toString())
        console.log('rinfo: ',rinfo)
    })
    udpSocket.once('listening', () => {
        console.log('listening', udpSocket.address())
    })

    
    return udpSocket
}

export { CustomUdpSocket }


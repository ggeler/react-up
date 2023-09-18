import dgram from 'react-native-tcp-socket'

const server = dgram.createServer((socket) => {
    socket.on('data', (data) => {
        console.log('data: ',data.toString())
      })
      socket.on('end', () => {
        console.log('end')
      })
      socket.on('error', (err) => {
        console.log('error: ',err)
      })
      socket.on('timeout', () => {
        console.log('timeout')
      })
      socket.on('close', () => {
        console.log('close')
      })
}).listen( {port: 3000, host: '0.0.0.0', reuseAddress: true } )
//server.listen()
console.log('server: ',server)
server.on('listening', (socket) => {
    console.log('listening', socket)
})

server.on('connection', (socket) => {
    console.log('connection')

})

export { server }


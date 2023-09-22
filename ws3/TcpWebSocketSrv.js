import { createServer } from 'react-native-websocket'


/*
const server = TcpSocket.createServer(function(socket) {
    socket.on('data', (data) => {
      socket.write('TCP Socket: Echo server ' + data);
    });
  
    socket.on('error', (error) => {
      console.log('TCP Socket: An error ocurred with client socket ', error);
    });
  
    socket.on('close', (error) => {
      console.log('TCP Socket: Closed connection with ', socket.address());
    });
  }).listen(connection);
  */
function init (requiredPort) {

  const server = createServer({port: requiredPort})
  server.on('connection', (socket) => console.log('connection', socket))
  server.on('error', (error) => console.log('error', error))
  server.on('close', (close)  => console.log('close', close)) 
  server.on('open', (open) => console.log('open', open)) 
  server.on('message', (message) => console.log('message', message)) 
  return server
}


export { init }


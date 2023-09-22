import TcpSocket from 'react-native-tcp-socket'


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

  const connection = {
    port: requiredPort,
    host: 'localhost',
    reuseAddress: true
  }
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
  
  server.on('error', (error) => {
    console.log('TCP Socket: An error ocurred with the server', error);
  });
  
  server.on('close', () => {
    console.log('Server closed connection');
  });

  server.on('listening', () => {
    console.log('TCP Socket ', server)
  })
}

export { init }


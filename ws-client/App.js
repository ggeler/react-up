import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [serverState, setServerState] = React.useState('Loading...');
  const [messageText, setMessageText] = React.useState('');
  const [disableButton, setDisableButton] = React.useState(true);
  const [inputFieldEmpty, setInputFieldEmpty] = React.useState(true);
  const [serverMessages, setServerMessages] = React.useState([]);
  const socket = new WebSocket('ws://192.168.0.82:8080');
  
  console.log("Socket: ",socket)
  var ws = React.useRef(socket).current;

  React.useEffect(() => {
    const serverMessagesList = [];
    ws.onopen = () => {
      setServerState('Connected to the server')
      console.log("Connected")
      setDisableButton(false);
    };
    ws.onclose = (e) => {
      setServerState('Disconnected. Check internet or server.')
      console.log("Closed")
      setDisableButton(true);
    };
    ws.onerror = (e) => {
      setServerState(e.message);
      console.log("Error")
    };
    ws.onmessage = (e) => {
      serverMessagesList.push(e.data);
      setServerMessages([...serverMessagesList])
      console.log("Msg")
    };
  }, [])
  const submitMessage = () => {
    ws.send(messageText);
    setMessageText('')
    setInputFieldEmpty(true)
  }
  /*
  
  </View>  
  */
  return (
    <View style={styles.container}>
      <View style={styles.serverState}>
        <Text>{serverState}</Text>
      </View>
      <View style={styles.scrollView}>
        <ScrollView>
          {
            serverMessages.map((item, ind) => {
              return (
                <Text key={ind}>{item}</Text>
              )
            }) 
          }
        </ScrollView>
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.textInput} 
          placeholder={'Add Message'} 
          onChangeText={text => {
            setMessageText(text)
            setInputFieldEmpty(text.length > 0 ? false : true)  
          }}
          value={messageText}
         />
        <Button
         onPress={submitMessage}
         title={'Submit'} 
         disabled={disableButton || inputFieldEmpty}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: 30,
    padding: 8,
  },
  serverState: {
    height: 30,
    backgroundColor: '#eeceff',
    padding: 5
  },
  scrollView: {
    backgroundColor: '#ffeece',
    padding: 5,
    flexGrow: 1
  },
  inputView: {
    flexDirection: 'row',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    flexGrow: 1,
    padding: 5,
  }

});

import { useState,useEffect,useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import axios from 'axios';

const ChatScreen=() => {

    const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      // {
      //   _id: 1,
      //   text: 'Hello developer',
      //   image:'',
      //   createdAt: new Date(),
      //   user: {
      //     //_id: 2,
      //     name: 'Haritha Gunaratne',
      //     //avatar: 'https://placeimg.com/140/140/any',
      //     //avatar: null,
      //     renderUsernameOnMessage:true,
          
      //   },
      // },
      // {
      //   _id: 1,
      //   text: 'Hello developer',
      //   image:'',
      //   createdAt: new Date(),
      //   user: {
      //     //_id: 2,
      //     name: 'Haritha Gunaratne',
      //     //avatar: 'https://placeimg.com/140/140/any',
      //     //avatar: null,
      //     renderUsernameOnMessage:true,
          
      //   },
      // }

      axios.get('http://localhost:5000/messeges').then((response) => {
        console.log(response);

        var obj = JSON.parse(response.data);
          var res = [];
                   
         for(var i in obj)
            res.push(JSON.parse(obj[i]));
                      //console.log(obj[i]);
      
                  
                  return res;

      })

      
    ]

          
    
    
    
    
    )
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}


export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

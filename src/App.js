import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import './App.css';
import Message from './Message'
import db from './firebase.js'
import firebase from 'firebase'
import FlipMove from 'react-flip-move'

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUserName] = useState('');

  useEffect(() => {
    db.collection('messages')
      .orderBy('timeStamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      })
  }, [])

  useEffect(() => {
    setUserName(prompt('Please enter your name'));
  }, [])

  const sendMessages = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      username: username,
      message: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      {/* <img src="{require(public/messenger.png)}" width="100" height="100"></img> */}
      <h1>MESSENGER</h1>
      <br></br>
      <br></br>
      <form className="app_form"> 
        <FormControl>
          <InputLabel>Enter your Message Here</InputLabel>
          <Input classNamw="app_Input"value={input} onChange={event => setInput(event.target.value)} aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">Your message is end-to-end ecrypted.</FormHelperText>
          <Button disabled={!input} variant="contained" color="primary" onClick={event => sendMessages(event)} type='submit'>
            Send
          </Button>
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({ message, id }) => (
            <Message username={username} message={message} key={id} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;

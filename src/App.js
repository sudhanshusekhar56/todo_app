import React, { useEffect, useState } from "react";
import './App.css';
import Todo from './Todo';
import {Button, FormControl, InputLabel, Input} from '@mui/material';
import db from './firebase';
import firebase from 'firebase/compat/app';

function App() {

const [todos, setTodos] = useState ([]);
const[input, setInput] = useState('');

//when app loads we need to listen to database and fetch new todos as they get added
useEffect(() => {
  db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc => ({id : doc.id, todo: doc.data().todo})))
  })
}, [])

const addTodo = (event) =>{
  event.preventDefault(); //will stop refreshing
  //this will fire when we click button
  db.collection('todos').add({ 
    todo : input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  })
  setTodos([...todos, input]);
  setInput(''); //clears up the input again
}

return (
  <div className="App">
    <h1>Hello Sudhanshu😜!</h1>
    <form>
      <FormControl>
        <InputLabel>Write a todo</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      
      <Button disabled= {!input} variant="contained" type='submit' onClick={addTodo}>Add Todo</Button>
      {/* <button type='submit' onClick={addTodo}>Add Todo</button> */}
    </form>

    <ul>
      {todos.map(todo =>(
        <Todo todo={todo} />
      ))}
    </ul>

  </div>
);
}

export default App;

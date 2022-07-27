import { ListItem, List, ListItemText, Modal } from '@mui/material'
import React from 'react'
import './Todo.css'
import db from './firebase'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from 'react'

function Todo(props) {
  const [open, setOpen] = useState(false);
  const handleOpen =() => {
    setOpen(true);
  }

  return (
    <>
    <Modal open={open} onClose={e => setOpen(false)}>
      <div>
        <h1>Open</h1>
        <button onClick={e => setOpen(false)}></button>
      </div>
    </Modal>
    <List className = 'todo_list'>
        <ListItem>
            <ListItemText primary={props.todo.todo} secondary="Dummy deadline⏰"/>
        </ListItem>
        <button onClick={ e => setOpen(true)}>Edit Me</button>
        <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()}/>
    </List>
    </>
  )
}

export default Todo

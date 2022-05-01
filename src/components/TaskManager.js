import React, { useState } from 'react'
import TaskList from './TaskList';
import '../Todo.css'

function TaskManager() {

  const [task, setTask] = useState('');
  const [tasklist, setTaskList] = useState([]);

  const handlesubmit =(e) =>{
    e.preventDefault();
    console.log(task)
    AddTasks(task)
    setTask('')
  }

  const AddTasks = (task) =>{
    return setTaskList([...tasklist, task]);
  }

  return (
    <div className='TaskManager'>
      <form>
        <input type="text" className='Input' value={task} onChange={e => setTask(e.target.value)}/>
        <button style={{color:'black', background:'yellow'}} onClick={handlesubmit}>Add</button>
      </form>
      <div>
        <div><TaskList tasklist={tasklist}/></div>
      </div>
    </div> 
  )
}

export default TaskManager
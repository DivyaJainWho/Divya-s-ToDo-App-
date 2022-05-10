import React, { useState } from 'react'
import Task from './Task'
import '../Todo.css'

function TaskManager() {

  const [task, setTask] = useState('');
  const [tasklist, setTaskList] = useState([]);

  const handlesubmit =(e) =>{
    e.preventDefault();
    console.log(task)
    addTasks(task)
    setTask('')
  }

  const addTasks = (task) => {
    return setTaskList([...tasklist, task]);
  }
  
  const deleteTask =(todo) =>{
    console.log(tasklist.filter(e => e !== todo))
    return setTaskList([...(tasklist.filter(e => e !== todo))])
  }
  return (
    <div className='TaskManager'>
      <form>
        <input type="text" className='Input' value={task} onChange={e => setTask(e.target.value)}/>
        <button style={{color:'black', background:'yellow'}} onClick={handlesubmit}>Add</button>
      </form>
      <div>
      <div className='TaskList'>
      {tasklist.map(todo =>{
        return (
          <div key={todo} className="Task">
              <Task todo={todo} deleteTask={deleteTask}/>
          </div>
        )
      })}
      </div>
      </div>
    </div> 
  )
}

export default TaskManager
import React, { useState } from 'react'
import Task from './Task'
import '../Todo.css'
import { v4 as uuidv4 } from 'uuid';

function TaskManager() {

  const [task, setTask] = useState({id:'', title:''});
  const [tasklist, setTaskList] = useState([]);

  const handlesubmit =(e) =>{
    e.preventDefault();
    console.log(task)
    addTasks(task)
    setTask({id:'',title:''})
  }

  const addTasks = (task) => {
    return setTaskList([...tasklist, task]);
  }
  
  const deleteTask =(todo) =>{
    console.log(tasklist.filter(e => e.id !== todo.id))
    return setTaskList([...(tasklist.filter(e => e.id !== todo.id))])
  }

  const editTask = (todo) =>{
    const updateTask = prompt('Please enter changed task');
    let list= tasklist.map((task) => {if(task.id === todo.id){task.title = updateTask} return task })
    return setTaskList([...list])
  }

  return (
    <div className='TaskManager'>
      <form>
        <input type="text" className='Input' value={task.title} onChange={e => setTask({id:uuidv4(),title:e.target.value})}/>
        <button style={{color:'black', background:'yellow'}} onClick={handlesubmit}>Add</button>
      </form>
      <div>
      <div className='TaskList'>
      {tasklist.map(todo =>{
        return (
          <div key={todo.id} className="Task">
              <Task todo={todo} deleteTask={deleteTask} editTask={editTask}/>
          </div>
        )
      })}
      </div>
      </div>
    </div> 
  )
}

export default TaskManager
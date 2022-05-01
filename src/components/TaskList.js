import React from 'react'
import Task from './Task'
import '../Todo.css'

const TaskList = ({tasklist})=> {

  const DeleteTask =(task) =>{
    return tasklist.filter(e => e.task !== task)
  }

  return (
    <div className='TaskList'>
      {tasklist.map(task =>{
        return (
          <div key={task} className="Task">
              <Task task={task} DeleteTask={() => DeleteTask()}/>
          </div>
        )
      })}
    </div>
  )
}

export default TaskList
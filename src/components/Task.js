import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faStar} from '@fortawesome/free-solid-svg-icons'

import '../Todo.css'

const Task= (task, {DeleteTask}) =>{
  const [isChecked, setCheck] = useState(false)

  const toggleCheck = () =>{
    return setCheck(!isChecked)
  }

  const deleteTask =(task) =>{
    return DeleteTask(task)
  }

  return (
    <div className='task'  style={{background : isChecked === true ? 'red': 'beige'}}>
      <div><span onClick={toggleCheck}><input type="checkbox" checked={isChecked} className='checkbox'/></span>
      {task.task}<span onClick={()=> deleteTask(task)}><FontAwesomeIcon icon={faTrash} className="trashIcon"/></span>
      <FontAwesomeIcon icon={faStar} className="trashIcon"/>
      </div>
    </div>
  )
}

export default Task
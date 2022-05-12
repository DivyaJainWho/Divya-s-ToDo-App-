import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash ,faEdit} from '@fortawesome/free-solid-svg-icons'

import '../Todo.css'

const Task= (props) =>{
  const [isChecked, setCheck] = useState(false)

  const toggleCheck = () =>{
    return setCheck(!isChecked)
  }

  const handleDelete =() =>{
    return props.deleteTask(props.todo)
  }

  const handleEdit =() =>{
    return props.editTask(props.todo)
  }

  return (
    <div className='task'  style={{background : isChecked === true ? 'red': 'beige'}}>
      <div><span onClick={toggleCheck}><input type="checkbox" checked={isChecked} onChange={e => {}} className='checkbox'/></span>
      <span>{props.todo.title}</span>
      <span onClick={handleDelete}><FontAwesomeIcon icon={faTrash} className="trashIcon"/></span>
      <span onClick={handleEdit}><FontAwesomeIcon icon={faEdit} className="trashIcon"/></span>
      </div>
    </div>
  )
}

export default Task
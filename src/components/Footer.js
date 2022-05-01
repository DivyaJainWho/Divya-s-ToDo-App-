import React from 'react'
import '../Todo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitterSquare, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className='Footer'>
      <div><FontAwesomeIcon icon={faLinkedin}/>  divyajainwho@gmail.com</div>
      <div><FontAwesomeIcon icon={faGithub}/>  @DivyaJainWho</div>
      <div><FontAwesomeIcon icon={faTwitterSquare}/>  @DivyaJa67274382</div>
    </div>
  )
}

export default Footer
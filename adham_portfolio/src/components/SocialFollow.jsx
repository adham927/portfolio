import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
  import '../App.css'
const SocialFollow = () => {
  return (
    <div class="social-container">
        
        <a  href="https://www.linkedin.com/in/adhamamer1989/"
       class="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a> 
        
      
      <a  href="https://github.com/adham927"
      class="github social">
        <FontAwesomeIcon icon={faGithub} size="3x" />
      </a>
    
      
      
    </div>
  )
}

export default SocialFollow
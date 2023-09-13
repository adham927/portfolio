import React from 'react'
import UpperPart from '../components/UpperPart'
import Summary from '../components/Summary'
import Projects from '../components/Projects'
import Skill from '../components/Skill'
import Contact from '../components/Contact'
import '../App.css'

const MPage = () => {
  return (
    <div>
     <UpperPart />
     <Summary />
     <Projects />
     <Skill />
     <Contact />
    </div>
  )
}

export default MPage
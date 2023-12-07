import React from 'react'
import UpperPart from '../components/UpperPart'
import Summary from '../components/Summary'
import Projects from '../components/Projects'
import Skill from '../components/Skill'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import '../App.css'

const MPage = () => {
  return (
    <div>
     <UpperPart />
     <Summary />
     <Projects />
     <Skill />
     <Contact />
     <Footer />
    </div>
  )
}

export default MPage
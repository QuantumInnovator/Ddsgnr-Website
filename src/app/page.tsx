import React from 'react'
import Navbar from './Components/Navbar'
import Skills from './Components/Skills'
import Companies from './Components/Companies'
import Courses from './Components/Courses'
import Cards from './Components/Cards'
import Button from './Components/Button'
import Achievement from './Components/Achievement'
import Cards2 from './Components/Cards2'
import OurTeam from './Components/OurTeam'
import Testimonials from './Components/Testimonials'
import Cards3 from './Components/Cards3'
import Footer from './Components/Footer'

function page() {
  return (
    <div>
      <Navbar/>
      <Skills/>
      <Companies/>
      <Courses/>
      <Cards/>
      <Button/>
      <Achievement/>
      <Cards2/>
      <OurTeam/>
      <Testimonials/>
      <Cards3/>
      <Footer/>
    </div>
  )
}

export default page
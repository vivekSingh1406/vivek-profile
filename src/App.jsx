import { useState } from 'react'
import './App.css'
import { Hero } from './herosection/Hero'
import { About } from './about/About'
import { Skills } from './skills/Skills'
import { Work } from './works/Work'
import { Contact } from './contact/Contact'
import { Service } from './services/Service'
import { Base } from './base/Base'

function App() {


  return (
    <>
    <Hero></Hero>
    <About></About>
    <Service></Service>
    <Skills></Skills>
    <Work></Work>
    <Contact></Contact>
    <Base></Base>


    </>
  )
}

export default App

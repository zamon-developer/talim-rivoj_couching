import { useState } from 'react'
import './App.css'
import Projectinfo from './components/ProjectInfo/ProjectInfo'
import Navbar from "./components/Navbar/Navbar"

import Faq from './components/FAQ/Faq'


function App() {


  return (
    <div className="App">

      <Faq faqData={faqData}/>

      <Projectinfo />
      <Faq/>
      <h1>FUCK YOu</h1>
    </div>

  )
}
export default App

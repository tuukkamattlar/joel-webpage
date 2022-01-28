import { useState } from 'react'
import Header from '@components/Header'
import About from '@components/About'
import Projects from '@components/Projects'
import Contact from '@components/Contact'
import useWindowDimensions from 'functions/windowSize'

export default function Home() {
  const [contenctSelect, setContentSelect] = useState('about')
  const { height, width } = useWindowDimensions();


  function showContent() {
    switch(contenctSelect) {
      case 'about':
        return <About/>
      case 'projects':
        return <Projects/>
      case 'contact':
        return <Contact/>
      default:
        return <About/>
    }
  }

  function NaviBar(){
    // DESKTOP
    if(width > 1000){
      return(
        <div className='head'>
          <h1>Joel Ward</h1>
          <h2>Producer, musician</h2>
          <div className='navigator'>
            <a onClick={() => setContentSelect('about')} className={contenctSelect === 'about'? 'selectedNav':''}>About</a>
            <a onClick={() => setContentSelect('projects')} className={contenctSelect === 'projects'? 'selectedNav':''}>Projects</a>
            <a onClick={() => setContentSelect('contact')} className={contenctSelect === 'contact'? 'selectedNav':''}>Contact</a>
          </div>
        </div>
      )
    }
      // MOBILE
    else {
      return(
          <div className='headMobile'>
            <h1>Joel Ward</h1>
            <h2>Producer, musician</h2>
            <div className=''>
              <a onClick={() => setContentSelect('about')} className={contenctSelect === 'about'? 'selectedNav':''}>About</a>
              <a onClick={() => setContentSelect('projects')} className={contenctSelect === 'projects'? 'selectedNav':''}>Projects</a>
              <a onClick={() => setContentSelect('contact')} className={contenctSelect === 'contact'? 'selectedNav':''}>Contact</a>
            </div>
          </div>
      )
    }
  }

  return (
    <div className="container">
      <div className='headPhoto'>
        <img width={width} src='https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGlvfGVufDB8fDB8fA%3D%3D&w=1000&q=80'/>
      </div>
      <NaviBar/>
      
      <div className='mainContent'>
        {showContent()}
      </div>
      <div className='footer'>
        Footer
        content todo
      </div>
    </div>
  )
}

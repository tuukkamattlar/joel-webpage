import { useState } from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'
import About from '@components/About'
import Projects from '@components/Projects'

export default function Home() {
  const [contenctSelect, setContentSelect] = useState('about')


  function showContent() {
    switch(contenctSelect) {
      case 'about':
        console.log('ata')
        return <About/>
      case 'projects':
      return <Projects/>
      case 'contact':
        return <div>Contact</div>
      default:
        return <div>About</div>
    }
  }

  return (
    <div className="container">
      <div className='head'>
        <h1>Joel Ward</h1>
        <div className='navigator'>
          <a onClick={() => setContentSelect('about')} className={contenctSelect === 'about'? 'selectedNav':''}>About</a>
          <a onClick={() => setContentSelect('projects')} className={contenctSelect === 'projects'? 'selectedNav':''}>Projects</a>
          <a onClick={() => setContentSelect('contact')} className={contenctSelect === 'contact'? 'selectedNav':''}>Contact</a>
        </div>
      </div>
      <div className='mainContent'>
        {showContent()}
      </div>
      <div className='footer'>
        Footer
      </div>
    </div>
  )
}

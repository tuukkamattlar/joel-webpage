import styles from './Footer.module.css'

export default function Projects() {

  function ProjectItem(p) {
    return(
      <div className='projectItem'>
        <h1>{p.title}</h1>
        <p>{p.description}</p>
      </div>
    )
  }

  return (
    <>
          <audio controls controlsList="nodownload">
            <source src="audio/esim.mp3" type="audio/mpeg"/>
            <source src="audio/esim.mp3" type="audio/mpeg"/>
            <source src="audio/esim.mp3" type="audio/mpeg"/>
            Your browser does not support the audio element.
          </audio>
      <div className='projectsGrid'>
        <ProjectItem title={'Project 1'} description={'content'}/>
        <ProjectItem title={'Project 1'} description={'content'}/>
        <ProjectItem title={'Project 1'} description={'content'}/>
        <ProjectItem title={'Project 1'} description={'content'}/>
        <ProjectItem title={'Project 1'} description={'content'}/>
      </div>
    </>
  )
}

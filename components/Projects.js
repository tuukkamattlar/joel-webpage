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
      <h1>Projects</h1>
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

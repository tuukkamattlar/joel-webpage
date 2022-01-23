import styles from './Footer.module.css'

export default function About() {
  return (
    <>
      <h1>About</h1>
      <div className='aboutContent'>
          <div className='aboutContentFirst'>
            <div className='leftPhoto'>
                <img width={'600px'} src='https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGlvfGVufDB8fDB8fA%3D%3D&w=1000&q=80'/>
            </div>
            <div className='rightText'>
                Sed ut perspiciatis unde omnis iste natus error sit 
                voluptatem accusantium doloremque laudantium, totam rem 
                aperiam, eaque ipsa quae ab illo inventore veritatis et 
                quasi architecto beatae vitae dicta sunt explicabo. 
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
                aut odit aut fugit, sed quia consequuntur magni dolores 
                eos qui ratione voluptatem sequi nesciunt. Neque porro 
                quisquam est, qui dolorem ipsum quia dolor sit amet, 
                consectetur, adipisci velit, sed quia non numquam eius 
                modi tempora incidunt ut labore et dolore magnam aliquam 
                quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                exercitationem ullam corporis suscipit laboriosam, nisi ut 
                aliquid ex ea commodi consequatur? Quis autem vel eum iure 
                reprehenderit qui in ea voluptate velit esse quam nihil 
                molestiae consequatur, vel illum qui dolorem eum fugiat 
                quo voluptas nulla pariatur?
            </div>
          </div>
          <div className='aboutContentSecond'>
          <div className='leftText'>
                Sed ut perspiciatis unde omnis iste natus error sit 
                voluptatem accusantium doloremque laudantium, totam rem 
                aperiam, eaque ipsa quae ab illo inventore veritatis et 
                quasi architecto beatae vitae dicta sunt explicabo. 
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
                aut odit aut fugit, sed quia consequuntur magni dolores 
                eos qui ratione voluptatem sequi nesciunt. Neque porro 
                quisquam est, qui dolorem ipsum quia dolor sit amet, 
                consectetur, adipisci velit, sed quia non numquam eius 
                modi tempora incidunt ut labore et dolore magnam aliquam 
                quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                exercitationem ullam corporis suscipit laboriosam, nisi ut 
                aliquid ex ea commodi consequatur? Quis autem vel eum iure 
                reprehenderit qui in ea voluptate velit esse quam nihil 
                molestiae consequatur, vel illum qui dolorem eum fugiat 
                quo voluptas nulla pariatur?
            </div>
            <div className='rightPhoto'>
            <img width={'600px'} src='https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGlvfGVufDB8fDB8fA%3D%3D&w=1000&q=80'/>
            </div>

          </div>
      </div>

    </>
  )
}

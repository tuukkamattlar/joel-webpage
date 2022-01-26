export default function About() {

  const loremIpsum = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
  return (
    <>
      <div className='aboutContent addMediumPaddingTop'>
        <div className='aboutPhoto'>
          <img src='https://blog.discogs.com/wp-content/uploads/2019/06/discogs-lists.jpg'/>
        </div>
        <div className='aboutText'>
          {loremIpsum}
        </div>
      </div>
      <div className='allWidthMid addLargePaddingTop'>
        <img src='https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGlvfGVufDB8fDB8fA%3D%3D&w=1000&q=80'/>
      </div>
      <div className='aboutContent'>
        <div className='aboutText'>
            {loremIpsum}
          </div>
        <div className='aboutPhoto addLargePaddingTop'>
          <img src='https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGlvfGVufDB8fDB8fA%3D%3D&w=1000&q=80'/>
        </div>
      </div>
      <div className='allWidthMid addLargePaddingTop addPaddingBottom'>
        <img src='https://blog.discogs.com/wp-content/uploads/2019/06/discogs-lists.jpg'/>
      </div>

    </>
  )
}

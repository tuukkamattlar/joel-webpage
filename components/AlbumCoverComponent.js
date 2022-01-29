import albumData from '../Datainputs/coveralbums.json'

export default function AlbumCoverComponent() {
    const albums = () => JSON.parse(JSON.stringify(albumData));
    

    const listOfAlbums = [1,2,3,4,5,6,7,8,9,10,11]

    function AlbumCovers(props) {
        const i = props.input
        const urlIMG = 'https://images.genius.com/45a01d6d3a803f67f93fd3aa1b757c24.1000x1000x1.jpg'
        const styleSheet = {
        backgroundImage: "url(images/albumCovers/"+i.imgfile+")",
        minWidth: "100%",
        minHeight: "100%",
        backgroundPosition: "center center",
        overflow: "hidden",
        backgroundSize: "cover"
      };
      //<div style={styleSheet} className='albumCoverImg' >
      //</div>
      
      return(
        <a href={i.linkto} >
            <div className='albumCoverUpperItem'>
                <div style={styleSheet} className='albumCoverImg' >
                </div>
                <div className='albumText'>
                    <h3>{i.name}</h3>
                    <h5>{i.artist}</h5>
                    <h5>{i.action}</h5>
                    <h5>{i.year}</h5>
                </div>
            </div>
        </a>
      )
    }

    return(
        <>
            <div className='albums'>
                {albumData[1].map((i) => 
                <AlbumCovers input={i}/>
                )}
            </div>
        </>
    )
  
}
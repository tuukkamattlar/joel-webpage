import React from 'react';
import axios from 'axios';

export default function Discogs() {

    async function getDiscography(){
        axios.get('https://conf.lngtd.com/lngtd-config?account=discogs&section=a')
            .then(res => {
            console.log(res)
      })
  }

  return (
    <>
    <a>Discogs</a>
    </>
  )
}

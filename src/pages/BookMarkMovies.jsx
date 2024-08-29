import React, { useState, useEffect } from 'react'
import axios from 'axios'
function BookMarkMovies() {
  const [data, setData] = useState([])
 useEffect(() => {
  axios.get("https://api.kinopoisk.dev/v1.4/movie?rating.imdb=8-10.", {
    headers: {
      'X-API-KEY': 'WPVCNA8-BFG4ZRF-N4W3SD4-8TRWN1B',
    },
  }).then((data) => {
  console.log(data.data.docs);
  
  })
 }, [])
  return (

    <div>
      
    </div>
  )
}

export default BookMarkMovies
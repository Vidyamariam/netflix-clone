import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';

const Banner = () => {
     
    const [movie, setMovie] = useState();


    useEffect(()=> {

      axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=> {
          console.log(response.data.results[0]);
          setMovie(response.data.results[0]);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    },[])
  

  return (
    <div style={{backgroundImage: `url(${movie? imageUrl+movie.backdrop_path : ""})` }} className='banner'>
        <div className='content'>
                <h1 className='title' >{movie? movie.title : ""}</h1>
                
                <div className='buttons'>
                        <button className='button' id='play' >Play</button>
                        <button className='button' id='add'>Add list</button>
                </div>
                <h1 className='description'>{movie? movie.overview: ""}</h1>
        </div>
        <div className='fade'></div>
    </div>
  )
}

export default Banner

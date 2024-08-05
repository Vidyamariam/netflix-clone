import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPoster from './Components/RowPoster/RowPoster'
import {originals, action, ComedyMovies} from './urls'

const App = () => {
  return (
    <div>
       <Navbar/>
       <Banner/>
       <RowPoster url={originals} title='Netflix Originals' />
       <RowPoster url={action} title='Action Movies' isSmall= {true} />
       <RowPoster url={ComedyMovies} title='Comedy Movies' isSmall= {true} />
    </div>
  )
}

export default App

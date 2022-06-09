import React from 'react'

import './homepage.css'

import SearchBar from '../components/search/search.component'
import Results from '../components/results/results.component'

const HomePage = () => {
  return (
    <div className='homepage'>
        <SearchBar/>
        <Results/>
    </div>
  )
}

export default HomePage
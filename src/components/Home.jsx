import React from 'react'
import CountryList from './CountryList'
import { useOutletContext } from 'react-router-dom'

function Home() {
   
  const {theam,query} = useOutletContext()  

  return (
    <CountryList theam={theam} query={query}/>
  )
}

export default Home
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import CountryCard from './components/CountryCard'
import CountryList from './components/CountryList'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {

  const [theam,setTheam] = useState(JSON.parse(localStorage.getItem('theam')))
  const [query,setQuery] = useState('')

  if(localStorage.getItem('theam')==null)
  {
     localStorage.setItem('theam',true)
  }
  

  return (
    <div className='h-auto w-full flex flex-col flex-wrap gap-3 justify-center'>
      <Header setTheam={setTheam} theam={theam} setQuery={setQuery}/>
      <Outlet context={{theam,query}}/>
      
    </div>
  )
}

export default App

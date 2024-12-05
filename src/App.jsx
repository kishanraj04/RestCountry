import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import CountryCard from './components/CountryCard'
import CountryList from './components/CountryList'
import Header from './components/Header'

function App() {

  const [theam,setTheam] = useState(true)

  return (
    <div className='h-auto w-full flex flex-col flex-wrap gap-3 justify-center'>
      <Header setTheam={setTheam} theam={theam}/>
      <CountryList theam={theam}/>
    </div>
  )
}

export default App

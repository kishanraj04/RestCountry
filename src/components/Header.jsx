import React, { useEffect } from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import Menu from './Menu';


function Header({setTheam,theam,setQuery}) {

    const updateTheam = ()=>
    {
         console.log("theam ",theam);
        theam==false ? localStorage.setItem('theam',true) : localStorage.setItem('theam',false)
        setTheam(JSON.parse(localStorage.getItem('theam')))
       
    }


    let flag = true
    const handleInput = (e)=>
    {
      const inputValue = e.target.value 
      
          setQuery(inputValue)
        
        
       
        
        
    }

  return (
   <header className={`h-[5rem] flex justify-between sticky top-0 
      ${theam ? 'text-white bg-black' : 'text-black bg-slate-50'}`}>
    <h1 className='ml-[10rem] mt-5 text-2xl font-serif'>Rest Country API</h1>
    
    <div className='flex gap-8 justify-center items-center'>
     <input type="text" className={`${theam ? 'text-black' : 'text-black'} border-2 h-[2.5rem] font-serif text-2xl`} onInput={handleInput}/>

     <Menu options={['name','name','name','name','name']}/>

    <span className='mr-[10rem]' onClick={updateTheam}>
      {theam ? <CiLight size={'2rem'} /> : <MdDarkMode size={'2rem'} />}
    </span>
    </div>
  </header>
  
  )
}

export default Header
import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";


function Header({setTheam,theam}) {

    const updateTheam = ()=>
    {
         console.log("theam ",theam);
        theam==false ? localStorage.setItem('theam',true) : localStorage.setItem('theam',false)
        setTheam(JSON.parse(localStorage.getItem('theam')))
       
    }

  return (
   <header className={`h-[5rem] flex justify-between sticky top-0 
      ${theam ? 'text-white bg-black' : 'text-black bg-slate-50'}`}>
    <h1 className='ml-[10rem] mt-5 text-2xl font-serif'>Rest Country API</h1>
    <span className='mr-[10rem] mt-5' onClick={updateTheam}>
      {theam ? <CiLight size={'2rem'} /> : <MdDarkMode size={'2rem'} />}
    </span>
  </header>
  
  )
}

export default Header
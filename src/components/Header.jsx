import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";


function Header({setTheam,theam}) {

    const updateTheam = ()=>
    {
       
        theam==true ? setTheam(false) : setTheam(true)
       
    }

  return (
     <header className='h-[5rem] flex justify-between bg-black text-white sticky top-0'>
        <h1 className='ml-[10rem] mt-5 text-2xl font-serif'>Rest Country API</h1>
        <span className='mr-[10rem] mt-5' onClick={updateTheam}><CiLight size={'2rem'}/></span>
     </header>
  )
}

export default Header
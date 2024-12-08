import React from 'react'

function Menu({options}) {
  return (
    <select name="" id="" className='h-[2.5rem] w-[10rem] text-black border-2'>
        {
          options.map((value,index)=>{
            return <option value={value} key={index}>{value}</option>
          })
        }
    </select>
  )
}

export default Menu
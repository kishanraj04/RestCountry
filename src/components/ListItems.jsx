import React from 'react'

function ListItems({arr}) {

 if(arr==undefined)
 {
    return;
 }

  return (
    <ul className='flex text-2xl gap-2 text-white'>
        {
            arr.map((value)=>{
                return <li>{value}</li>
            })
        }
    </ul>

  )
}

export default ListItems
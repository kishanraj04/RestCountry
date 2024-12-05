import React, { useEffect } from "react";

function CountryCard({key,image,name,population,area,theam}) {



  return <section className="h-[15rem] w-[12rem] flex flex-col border-[2px]">

    {/* this div is for images */}
    <div className="h-[8rem] w-full bg-slate-400">
    <img src={image} alt={name} className="h-[8rem] w-full object-cover"/>
     </div>


    {/* this div is for titels */}
    <div className={`h-[4rem] w-full flex flex-col p-1 ${theam === false ? 'text-white' : 'text-black'}`}>

        <h1 className="text-[1.3rem] font-serif">{name}</h1>
        <h6>Population : {population}</h6>
        <h6>Area : {area}</h6>
    </div>

  </section>
}

export default CountryCard;

import React, { useEffect, useState } from "react";
import { use } from "react";
import { Outlet, useOutletContext, useParams } from "react-router-dom";
import ListItems from "./ListItems";
import ShimmerEffect from "./ShimmerEffect";
import CountryCard from "./CountryCard";

function DetailsPage() {
  const { name } = useParams();
  const [country,setCountry] = useState(null)

  
  useEffect(() => {
   
    const fetchData = async()=>
    {
        const res = await fetch(
            `https://restcountries.com/v3.1/name/${name}`
          );
          const data = (await res.json())[0];
          console.log(data.flags.svg);
        setCountry({
            image:data.flags.svg,
            population:data.population,
            region:data.region,
            sub_region:data.subregion,
            capital:data.capital[0],
            langue:Object.values(data.languages),
            border:data.borders

        })
    }

    fetchData()
  }, [name]);


  const [countryList, setCountryList] = useState([]);
  const {query} = useOutletContext()
 
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://restcountries.com/v3.1/all');
      const data = await resp.json();

      setCountryList(data);  // Set country data to state
    };

    fetchData();
  }, []);

  if (countryList.length === 0) {
    return <ShimmerEffect/>
  }

  return (
    
    <>
    {
        country===null ? 'Loading' : <section className="h-[90vh] w-full bg-orange-950 flex justify-center items-center">f
        <section className="w-full flex justify-evenly">
          
            <img src={country.image} alt="" className="h-[60%] w-[40%] border-[5px]"/>
          
  
          <div className="flex flex-col justify-center  gap-[1.5rem]">
               
               <h1 className="text-5xl font-serif text-white">{name}</h1>
              <p className="text-2xl font-serif text-white">Population : {country.population}</p>
              <p className="text-2xl font-serif text-white">Region : {country.region}</p>
              <p className="text-2xl font-serif text-white">Sub Region : {country.sub_region}</p>
              <p className="text-2xl font-serif text-white">Capital : {country.capital}</p>
              <div className="flex">
              <p className="text-2xl font-serif text-white">Langues : </p><ListItems arr={country.langue}/>
              </div>

              <div className="flex">
              <p className="text-2xl font-serif text-white">Border Counteries : </p>
              <ListItems arr={country.border}/>
              </div>
             
              
          </div>
        </section>
      </section>
    }
    
    <div className="flex flex-wrap gap-3 justify-center">
    {
     countryList && countryList.filter((items)=>
    {
      return items.name.common.toLowerCase().includes(query)
    }).map((item, index) => {
        return <CountryCard key={index} name={item.name.common} image={item.flags.svg} population={item.population} area={item.area} />;
      })
    }
    </div>
    </>
  );
}

export default DetailsPage;

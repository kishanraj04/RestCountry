import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';

function CountryList({theam}) {
  const [country, setCountry] = useState([]);
  console.log(theam);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch('https://restcountries.com/v3.1/all');
      const data = await resp.json();
      console.log(data);
      setCountry(data);  // Set country data to state
    };

    fetchData();
  }, []);


  return (
    <>
      <div className={`flex w-full h-auto flex-wrap gap-3 justify-center ${theam === false ? 'bg-black' : 'bg-white'}`}>

      {country.map((item, index) => {
        return <CountryCard key={index} name={item.name.common} image={item.flags.svg} population={item.population} area={item.area} theam={theam}/>;
      })}
      </div>
    </>
  );
}

export default CountryList;